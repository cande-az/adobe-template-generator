// Import New Template
import stepByStepTemplateData from "./instances/stepByStepTemplateData";
import basicPopup from "./instances/basicPopup"

const templates = (function () {
  return [...[], stepByStepTemplateData.selectOption, basicPopup.selectOption];
})();

export { templates };