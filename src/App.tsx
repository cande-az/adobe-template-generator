import StepOne from "./components/stepOne";
import StepResult from "./components/stepResult";
import StepTwo from "./components/stepTwo";
import { useTemplateContext } from "./context";
import "./styles/global.scss";

function App() {
  const { TemplateComponent, renderResult } =
    useTemplateContext().templateContext;

  return (
    <div className="App">
      <nav id="header-component" className="navbar bg-light py-3">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Adobe Target Plantilla</span>
        </div>
      </nav>
      <section id="step-one" className="step-container container py-4">
        <div className="step-header">
          <label className="label">1</label>
          <h3>Selecciona tu plantilla</h3>
        </div>
        <StepOne />
      </section>
      <div id="step-two" className="step-container container py-4">
        <div className="step-header">
          <label className="label">2</label>

          <h3>Personalizar Información</h3>
        </div>
        <StepTwo />
      </div>
      <div id="step-result" className="step-container container py-4">
        <div className="step-header">
          <label className="label">3</label>
          <h3>Generar código final</h3>
        </div>
        {renderResult ? <StepResult /> : null}
      </div>
    </div>
  );
}

export default App;
