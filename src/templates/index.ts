// Import New Template
import stepByStepTemplateData from "./instances/stepByStepTemplateData";
import basicPopup from "./instances/basicPopup";
import stepByStepTwo from "./instances/stepByStepTwo";
import bannerTemplate from "./instances/bannerTemplate";

const templates = (function () {
  return [
    ...[],
    stepByStepTemplateData.selectOption,
    basicPopup.selectOption,
    stepByStepTwo.selectOption,
    bannerTemplate.selectOption
  ];
})();

export { templates };
