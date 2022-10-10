import { IsTemplateGenerator } from "../../interfaces";
import templateGenerator from "../generator";

const data: IsTemplateGenerator = {
  selectOption: {
    name: "Display name on list",
    value: "the name of this file",
  },
  options: ["name for replace"],
  formTemplate: null, // Component that use the options list to render form information
  templateGenerator: (templateDataList: Record<string, string>[]) => {
    const finalTemplate = ``;
    return finalTemplate;
  },
};
const demo = new templateGenerator(data);

export default demo;
