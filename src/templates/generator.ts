import { IsTemplateGenerator } from "../interfaces/index";

class templateGenerator implements IsTemplateGenerator {
  options: string[];
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
    this.options = options;
    this.formTemplate = formTemplate;
    this.templateGenerator = templateGenerator;
  }
}

export default templateGenerator;
