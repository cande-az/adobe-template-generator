import FormMultiSteps from "../../components/formGenerators/formMultiSteps";
import { IsTemplateGenerator } from "../../interfaces";
import forHTMLRender from "../../utils/forHTMLRender";
import templateGenerator from "../generator";

const data: IsTemplateGenerator = {
  selectOption: {
    name: "Step By Step Style Two",
    value: "stepByStepTwo",
    image: "",
    description: "",
  },
  options: [
    {
      displayName: "Imagen",
      option: "image",
      isEditable: true,
      isRequired: true,
    },
    {
      displayName: "Titulo",
      option: "title",
      isEditable: true,
      isRequired: true,
    },
    {
      displayName: "Orden",
      option: "orden",
      isEditable: false,
      isRequired: true,
    },
    {
      displayName: "Total",
      option: "total",
      isEditable: false,
      isRequired: true,
    },
  ],
  formTemplate: FormMultiSteps,
  templateGenerator: (
    templateDataList: Record<string, string>[],
    options?: any[]
  ) => {
    const finalTemplate = `
    <div
        class="o-steps-slider u-ov-h"
        cols="1/1"
        mart="24 32@sm"
        data-mbox="web-halcon-product-descrip-f9-3"
        data-lazy-component="steps-slider:css-js"
      >
        <div class="o-steps-slider__content" cols="1/1">
          <div class="o-steps-slider__content--slider" flex="jc:ce@sm fd:r@md">
          ${forHTMLRender({
            list: templateDataList,
            options: options,
            html: `<div class="m-step-slider">
            <div class="m-step-slider__container" flex="ai:ce fd:r">
              <div class="m-step-slider__img" cols="5.5/13 13.5/29@sm 8/15@md" marr="1.5/29@sm 1/15@md">
                <div class="m-step-slider__img--content">
                  <img class="lazyload" src="{{image-replace}}" srcset="{{image-replace}}, {{image-replace}} 2x" alt="{{title-replace}}" />
                </div>
              </div>
              <div class="m-step-slider__list" cols="6/13 10/29@sm 5/15@md" marl="1/13 0/31@sm">
                <div class="m-step-slider__item">
                  <div class="m-step-slider__title">
                    <h2 class="allcaps u-color-gray-3" marb="6 4@sm">Paso {{orden-replace}} de {{total-replace}}</h2>
                  </div>
                  <div class="m-step-slider__text">
                    <p class="g-sub-title g-sub-title-m g-sub-title-m--bold">{{title-replace}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>`,
          })}
          </div>
        </div>
      </div>
    `;
    return finalTemplate;
  },
};
const stepByStepTwo = new templateGenerator(data);

export default stepByStepTwo;
