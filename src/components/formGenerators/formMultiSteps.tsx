import React from "react";
import { useTemplateContext } from "../../context/index";

const FormMultiSteps = () => {
  const {
    templateOptions,
    templateOptionsNames,
    setCurrentTemplateData,
    currentTemplateData,
    templateDataList
  } = useTemplateContext().templateContext;
  const emptyModel = templateOptionsNames.reduce(
    (o, key) => key !== "orden" ? Object.assign(o, { [key]: "" }): Object.assign(o, { [key]: 1 }),
    {}
  );

  const [stepsData, setStepsData] = React.useState(templateDataList.length ? templateDataList : [emptyModel]);

  const handleOnAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const newModel = { ...emptyModel, orden: stepsData.length + 1 };
    setStepsData([...stepsData, newModel]);
  };

  const handleOnChange = (e: React.FormEvent<HTMLFormElement>) => {
    setStepsData(
      stepsData.map((step, index) => {
        if (parseInt((e.target as HTMLInputElement).id) === index) {
          return (step = {
            ...step,
            [(e.target as HTMLInputElement).name]: (
              e.target as HTMLInputElement
            ).value,
          });
        }
        return step;
      })
    );
  };

  const handleOnSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log(stepsData);
    setCurrentTemplateData({
      ...currentTemplateData,
      templateDataList: stepsData.map(step => ({...step, total: stepsData.length})),
      renderResult: true,
      currentStep: 3
    });
  };

  return (
    <>
      <div className="d-flex flex-wrap justify-content-end gap-2">
        <button className="btn-alert" onClick={(e) => handleOnAdd(e)}>
          Add
        </button>
        <button className="btn-primary" onClick={(e) => handleOnSubmit(e)}>
          Finish
        </button>
      </div>
      {stepsData && templateOptions
        ? stepsData.map((step, index) => (
            <form
              id={`${index}`}
              onChange={(e) => handleOnChange(e)}
              className="row py-4"
            >
              <div className="col-12 mb-3">
                <h4>Step {index + 1}</h4>
              </div>
              {templateOptions.map((option) => (
                <>
                  {option.isEditable ? (
                    <div className="col-6 mb-3">
                      <label className="form-label  text-capitalize">
                        {option.displayName}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id={`${index}`}
                        placeholder=""
                        name={option.option}
                        value={stepsData ? stepsData[index][option.option]: ''}
                      />
                    </div>
                  ) : null}
                </>
              ))}
            </form>
          ))
        : null}
      {stepsData.length > 1 ? (
        <div className="d-flex">
          <button
            className="btn-primary align-self-end"
            onClick={(e) => handleOnSubmit(e)}
          >
            Finish
          </button>
        </div>
      ) : null}
    </>
  );
};

export default FormMultiSteps;
