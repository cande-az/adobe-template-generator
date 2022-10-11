// Import New Template
import stepByStepTemplateData from "./instances/stepByStepTemplateData";
import basicPopup from "./instances/basicPopup";
import stepByStepTwo from "./instances/stepByStepTwo";

const templates = (function () {
  return [
    ...[],
    stepByStepTemplateData.selectOption,
    basicPopup.selectOption,
    stepByStepTwo.selectOption,
  ];
})();

export { templates };
