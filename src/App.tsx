import StepOne from "./components/stepOne";
import StepResult from "./components/stepResult";
import StepTwo from "./components/stepTwo";
import { useTemplateContext } from "./context";
import "./styles/global.scss";
import backStep from "./utils/backStep";
import cleanData from "./utils/cleanData";
import { BsArrowLeftCircleFill } from "react-icons/bs";

function App() {
  const {
    renderResult,
    currentTemplateData,
    currentStep,
    setCurrentTemplateData,
  } = useTemplateContext().templateContext;

  const handleOnRestart = () => {
    cleanData(currentTemplateData, setCurrentTemplateData);
    setCurrentTemplateData({ ...currentTemplateData, currentStep: 1 });
  };
  return (
    <div className="App">
      <nav id="header-component" className="navbar bg-light py-3">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Adobe Target Plantilla</span>
        </div>
      </nav>
      <section
        id="step-one"
        className={`step-container container py-2 ${
          currentStep === 1 ? "active" : ""
        }`}
      >
        <div className="step-header">
          <label className="label">1</label>
          <h3>Selecciona tu plantilla</h3>
        </div>
        {currentStep === 1 ? <StepOne /> : null}
      </section>
      <div
        id="step-two"
        className={`step-container container py-2 ${
          currentStep === 2 ? "active" : ""
        }`}
      >
        <div className="step-header">
          <label className="label">2</label>

          <h3>Personalizar Información</h3>
          {currentStep === 2 ? (
            <button
              onClick={() =>
                backStep(currentTemplateData, setCurrentTemplateData)
              }
              className="btn-back"
            >
              <BsArrowLeftCircleFill />
            </button>
          ) : null}
        </div>
        {currentStep === 2 ? <StepTwo /> : null}
      </div>
      <div
        id="step-result"
        className={`step-container container py-2 ${
          currentStep === 3 ? "active" : ""
        }`}
      >
        <div className="step-header">
          <label className="label">3</label>
          <h3>Generar código final</h3>
          {currentStep === 3 ? (
            <button
              onClick={() =>
                backStep(currentTemplateData, setCurrentTemplateData)
              }
              className="btn-back"
            >
              <BsArrowLeftCircleFill />
            </button>
          ) : null}
        </div>
        {currentStep === 3 && renderResult ? <StepResult /> : null}
      </div>
      {currentStep === 3 ? (
        <div className="container d-flex justify-content-end">
          <button className="btn-alert" onClick={() => handleOnRestart()}>
            Reiniciar
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
