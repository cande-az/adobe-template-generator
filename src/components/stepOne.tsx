import React from "react";
import { templates } from "../templates";
import { useTemplateContext } from "../context/index";
import { IsTemplateGenerator } from "../interfaces";

const StepOne = () => {
  const [selectTemplate, setSelectTemplate] = React.useState("");
  const { setCurrentTemplateData, currentTemplateData } =
    useTemplateContext().templateContext;

  const generateFormTemplate = async function (
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    const template: IsTemplateGenerator = (
      await import(`../templates/instances/${selectTemplate}.tsx`)
    ).default;

    setCurrentTemplateData({
      ...currentTemplateData,
      TemplateComponent: template.formTemplate,
      templateGeneratorFunction: template.templateGenerator,
      templateOptions: template.options,
    });
  };

  return (
    <div className="step-content-container">
      <form onSubmit={(e) => generateFormTemplate(e)}>
        <select
          onChange={(e) => setSelectTemplate(e.target.value)}
          value={selectTemplate}
          className="form-select" aria-label="Default select example"
        >
          <option value="">Seleccionar plantilla</option>
          {templates.map((temp) => (
            <option value={temp.value}>{temp.name}</option>
          ))}
        </select>
        <input className="btn-primary" type="submit" />
      </form>
    </div>
  );
};

export default StepOne;
