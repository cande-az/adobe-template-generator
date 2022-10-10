import React from "react";
import { createContext } from "react";
import { IsTemplateContext } from "../interfaces";

export const TemplateContext = createContext<any>(null);

export function useTemplateContext(): {
  templateContext: IsTemplateContext;
} {
  return React.useContext(TemplateContext);
}

export function TemplateContextProvider(props: {
  children: React.ReactNode;
}): JSX.Element {
  const { children } = props;
  const [currentTemplateData, setCurrentTemplateData] = React.useState({
    currentStep: 1,
    templateName: "",
    templateOptions: [],
    TemplateComponent: null,
    templateGeneratorFunction: null,
    renderResult:false,
    templateDataList:[],
    result: "",
  });

  const templateContext = (): IsTemplateContext => {
    return { ...currentTemplateData, setCurrentTemplateData,currentTemplateData };
  };

  const value = {
    templateContext: templateContext(),
  };

  return (
    <TemplateContext.Provider value={value}>
      {children}
    </TemplateContext.Provider>
  );
}
