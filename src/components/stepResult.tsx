import React from "react";
import { useTemplateContext } from "../context";
import { CopyBlock, dracula } from "react-code-blocks";

const StepResult = (): JSX.Element => {
  const {
    setCurrentTemplateData,
    currentTemplateData,
    templateDataList,
    templateGeneratorFunction,
    result,
    renderResult,
    templateOptionsNames,
  } = useTemplateContext().templateContext;

  React.useEffect(() => {
    setCurrentTemplateData({
      ...currentTemplateData,
      result: (
        templateGeneratorFunction as (list: any, options?: any[]) => string
      )(templateDataList, templateOptionsNames),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renderResult]);

  return (
    <>
      {result ? (
        <div className="step-content-container">
          <div className="code-container">
            <CopyBlock
              language={"html"}
              text={result}
              showLineNumbers={true}
              theme={dracula}
              wrapLines={true}
              codeBlock
              customStyle={{
                height: "30rem",
                overflow: "scroll",
              }}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default StepResult;
