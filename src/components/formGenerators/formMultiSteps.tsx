import React, { FormEvent } from "react";
import { useTemplateContext } from "../../context/index";

const FormMultiSteps = () => {
  const { templateOptions, setCurrentTemplateData, currentTemplateData } =
    useTemplateContext().templateContext;
  const emptyModel = {
    image: "",
    image2x: "",
    titulo: "",
    descripcion: "",
    active: null,
    orden: 1,
  };
  const [stepsData, setStepsData] = React.useState([emptyModel]);

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
    console.log(stepsData)
    setCurrentTemplateData({
      ...currentTemplateData,
      templateDataList: stepsData,
      renderResult: true,
    });
  };

  return (
    <div className="container">
      <div>
        <button onClick={(e) => handleOnAdd(e)}>Add</button>
        <button className="btn-primary" onClick={(e) => handleOnSubmit(e)}>Finish</button>
      </div>
      {stepsData && templateOptions
        ? stepsData.map((step, index) => (
            <form id={`${index}`} onChange={(e) => handleOnChange(e)}>
              <div className="col-12">
                <h2>Step {index + 1}</h2>
              </div>
              {templateOptions.map((option) => (
                <div className="col-12">
                  <label className="form-label">
                    {option}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id={`${index}`}
                    placeholder=""
                    name={option}
                  />
                </div>
              ))}
            </form>
          ))
        : null}
    </div>
  );
};

export default FormMultiSteps;
