import React from "react";
import { useTemplateContext } from "../context";

const StepTwo = (): JSX.Element => {
  const { TemplateComponent } = useTemplateContext().templateContext;
  return (
      <div className="step-content-container" >
        {TemplateComponent ? <TemplateComponent /> : null}
      </div>
  );
};

export default StepTwo;
