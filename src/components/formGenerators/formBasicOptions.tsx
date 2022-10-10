import React from "react";
import { FormEvent } from "react";
import { useTemplateContext } from "../../context";

const FormBasicOptions = (): JSX.Element => {
  const { templateOptions, currentTemplateData, setCurrentTemplateData, templateDataList } =
    useTemplateContext().templateContext;
  const [localData, setLocalData] = React.useState<Record<string, string|number>>(templateDataList ? templateDataList[0] : {});

  const handleOnChange = (e: React.FormEvent<HTMLFormElement>) => {
    setLocalData({
      ...localData,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    });
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrentTemplateData({
      ...currentTemplateData,
      templateDataList: [...[], localData],
      renderResult: true,
      currentStep: 3
    });
  };

  return (
    <div>
      <form
        onChange={(e) => handleOnChange(e)}
        onSubmit={(e) => handleOnSubmit(e)}
        className="row my-3"
      >
        {templateOptions.map((option) => (
          <>
            {option.isEditable ? (
              <div className="col-6 mb-3">
                <label className="form-label text-capitalize">
                  {option.displayName}
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  name={option.option}
                  value={localData ? localData[option.option]: ''}
                />
              </div>
            ) : (
              true
            )}
          </>
        ))}
        <input className="btn-primary " type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormBasicOptions;
