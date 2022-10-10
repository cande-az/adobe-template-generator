export interface IsTemplateContext {
  currentStep: number;
  templateOptions: IsOptionsTemplate[];
  templateOptionsNames: string[];
  TemplateComponent: (() => JSX.Element | null) | null;
  templateGeneratorFunction: ((list: any, options?: any[]) => string) | null;
  templateDataList: Record<string, string | number>[];
  renderResult: boolean;
  result: string;
  setCurrentTemplateData: (a: any) => void;
  currentTemplateData: IsCurrentTemplateData;
}

export interface IsCurrentTemplateData {
  currentStep: number;
  templateOptions: IsOptionsTemplate[];
  templateOptionsNames: string[];
  TemplateComponent: (() => JSX.Element | null) | null;
  templateGeneratorFunction: ((list: any, options?: any[]) => string) | null;
  templateDataList: Record<string, string | number>[];
  renderResult: boolean;
  result: string;
}

export interface IsOptionsTemplate {
  displayName: string;
  option: string;
  isEditable: boolean;
  isRequired: boolean;
}
export interface IsTemplateGenerator {
  options: IsOptionsTemplate[];
  optionsNames?: string[];
  selectOption: {
    name: string;
    value: string;
    image: string;
    description: string;
  };
  formTemplate: null | ((arg0: Object) => JSX.Element);
  templateGenerator: ((list: any, options?: any[]) => string) | null;
}
