import React from "react";
import { templates } from "../templates";
import { useTemplateContext } from "../context/index";
import { IsTemplateGenerator } from "../interfaces";
import PreviewTemplateInfo from "./previewTemplateInfo";
import cleanData from "../utils/cleanData";

const StepOne = () => {
  const [selectTemplate, setSelectTemplate] = React.useState("");
  const [selectTemplateIndex, setSelectTemplateIndex] = React.useState('-1')
  const { setCurrentTemplateData, currentTemplateData } =
    useTemplateContext().templateContext;

  const generateFormTemplate = async function (
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    const template: IsTemplateGenerator = (
      await import(`../templates/instances/${selectTemplate}.tsx`)
    ).default;

    cleanData(currentTemplateData,setCurrentTemplateData)

    setCurrentTemplateData({
      ...currentTemplateData,
      TemplateComponent: template.formTemplate,
      templateGeneratorFunction: template.templateGenerator,
      templateOptions: template.options,
      templateOptionsNames: template.optionsNames,
      currentStep: 2
    });
  };

React.useEffect(()=>{
//eslint-disable-next-line
console.log('selectTemplateIndex',selectTemplateIndex);
 },[selectTemplateIndex])

  return (
    <div className="step-content-container">
      <form onSubmit={(e) => generateFormTemplate(e)} className='d-flex gap-3'>
        <div className="container-fluid ">
          <select
          
            onChange={(e) => {setSelectTemplate(e.target.value);setSelectTemplateIndex(e.target.options[e.target.options.selectedIndex].id);}}
            value={selectTemplate}
            className="form-select" aria-label="Default select example"
          >
            <option value="" id='-1'>Seleccionar plantilla</option>
            {templates.map((temp,idx) => (
              <option value={temp.value} id={`${idx}`}>{temp.name}</option>
            ))}
          </select>
          <input className="btn-primary mt-3" type="submit" value="Siguiente"/>
        </div>
        {parseInt(selectTemplateIndex) >= 0 ? <PreviewTemplateInfo img={templates[parseInt(selectTemplateIndex)].image} description={templates[parseInt(selectTemplateIndex)].description}/> : null}
      </form>
    </div>
  );
};

export default StepOne;
