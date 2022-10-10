export interface IsTemplateContext {
  currentStep: number;
  templateName: string;
  templateOptions: string[];
  TemplateComponent: (() => JSX.Element | null) | null;
  templateGeneratorFunction:  ((list: any, options?: any[]) => string) | null;
  templateDataList: Record<string, string>[];
  renderResult: boolean;
  result: string;
  setCurrentTemplateData: (a: any) => void;
  currentTemplateData: {
    currentStep: number;
    templateName: string;
    templateOptions: string[];
    TemplateComponent: (() => JSX.Element | null) | null;
    templateGeneratorFunction: ((list: any, options?: any[]) => string) | null;
    templateDataList: Record<string, string>[];
    renderResult: boolean;
    result: string;
  };
}

export interface IsTemplateGenerator {
  options: string[];
  selectOption: { name: string; value: string };
  formTemplate: null | ((arg0: Object) => JSX.Element);
  templateGenerator: ((list: any, options?: any[]) => string) | null;
}
