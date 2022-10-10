import cleanData from "./cleanData";

const backStep = (currentTemplateData: any, setCurrentTemplateData: any) => {
  if (currentTemplateData.currentStep === 2) {
    console.log("here")
    cleanData(currentTemplateData, setCurrentTemplateData);
    setCurrentTemplateData({ ...currentTemplateData, currentStep: 1 });
  } else {
    setCurrentTemplateData({ ...currentTemplateData, currentStep: currentTemplateData.currentStep -1 });
  }
};

export default backStep;
