import { IsTemplateGenerator } from "../interfaces/index";

class templateGenerator implements IsTemplateGenerator {
  options: {
    displayName: string;
    option: string;
    isEditable: boolean;
    isRequired: boolean;
  }[];
  optionsNames?: string[];
  selectOption: { name: string; value: string };
  formTemplate: ((arg0: Object) => JSX.Element) | null;
  templateGenerator: ((list: any, options?: any[]) => string) | null;
  constructor({
    selectOption,
    options,
    formTemplate,
    templateGenerator,
  }: IsTemplateGenerator) {
    this.selectOption = selectOption;
    this.optionsNames = options.map((option) => option.option);
    this.options = options;
    this.formTemplate = formTemplate;
    this.templateGenerator = templateGenerator;
  }
}

export default templateGenerator;
