import FormMultiSteps from "../../components/formGenerators/formMultiSteps";

import { IsTemplateGenerator } from "../../interfaces";
import forHTMLRender from "../../utils/forHTMLRender";
import templateGenerator from "../generator";

const data: IsTemplateGenerator = {
  selectOption: {
    name: "Plantilla Paso a Paso",
    value: "stepByStepTemplateData",
    image:"image-1",
    description:"Explicacion paso a paso para crear una guia de usuario"
  },
  options: [{
    displayName: "Titulo",
    option: "titulo",
    isEditable: true,
    isRequired: true,
  },
  {
    displayName: "Descripcion",
    option: "descripcion",
    isEditable: true,
    isRequired: true,
  },
  {
    displayName: "Imagen 1x",
    option: "image",
    isEditable: true,
    isRequired: true,
  },{
    displayName: "Imagen 2x",
    option: "image2x",
    isEditable: true,
    isRequired: true,
  },{
    displayName: "Orden",
    option: "orden",
    isEditable: false,
    isRequired: true,
  },{
    displayName: "Active",
    option: "active",
    isEditable: false,
    isRequired: true,
  }],
  formTemplate: FormMultiSteps,
  templateGenerator: (
    templateDataList: Record<string, string>[],
    options?: any[]
  ) => {
    const finalTemplate = `    <div id="stepByStepTemplateData">
    <div class="a-html-content__wrapper">
      <div
        class="o-3d-steps-slider"
        data-theme="portrait"
        flex="fd:co jc:ce"
        data-lazy-component="3d-steps-slider:css-js"
      >
        <div cols="1/1" flex="fd:cor ai:ce">
          <div class="m-steps-slider m-steps-slider--landscape" cols="12/13 21/23@sm 12/15@md" mart="44 40@sm 52@md">
${forHTMLRender({
  list: templateDataList,
  options: options,
  html: ` <div class="a-step-slide {{active-replace}}" data-ref="{{orden-replace}}">
<img
class="a-step-slide__image"
srcset="{{image-replace}}, {{image2x-replace}} 2x"
src="{{image-replace}}"
alt="{{titulo-replace}}"
cols="1/1"
/>
</div>`,
})}
          </div>

          <div flex="fd:co ai:ce jc:ce@sm jc:fs@md" cols="1/1 19/23@sm 11/15@md">
            <div class="m-steps-circles-buttons" flex="ai:ce jc:sb" mxw="188 277@sm" cols="1/1 11/15@sm 7/9@md">
            ${forHTMLRender({
              list: templateDataList,
              options: options,
              html: `<a class="a-step-circle-button {{active-replace}}" flex="ai:ce jc:ce" data-step="{{orden-replace}}">
              <div class="a-step-circle-button__element" flex="ai:ce jc:ce">
                <span class="a-step-circle-button__label">{{orden-replace}}</span>
              </div>
            </a>`,
            })}
            </div>
            <div
              class="m-htmls-contents m-htmls-contents--opacity-effect u-text-center u-text-center-xs"
              data-effect="opacity"
              cols="1/1"
              mart="20 14@sm 20@md"
            >
            ${forHTMLRender({
              list: templateDataList,
              options: options,
              html: `  <div
              class="a-html-content {{active-replace}} a-html-content--ani-display-none"
              id="a0{{orden-replace}}"
              data-href="{{orden-replace}}"
              data-type="ani-display-none"
              pad="0-1/15 0-0@sm"
            >
              <div class="a-html-content__wrapper">
                <h3
                  class="g-sub-title g-sub-title-m u-allcaps u-text-light u-cutt-text u-cutt-text-1"
                  title="Paso {{orden-replace}}"
                >
                  Paso {{orden-replace}}
                </h3>
                <h4
                  class="g-sub-title g-sub-title-m u-text-medium u-cutt-text u-cutt-text-1"
                  mart="12"
                  title="{{titulo-replace}}"
                >
                  {{titulo-replace}}
                </h4>
                <p class="g-paragraph g-paragraph-m u-cutt-text u-cutt-text-4" mart="12" title="{{descripcion-replace}}">
                  {{descripcion-replace}}
                </p>
              </div>
            </div>`,
            })}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    return finalTemplate;
  },
};
const stepByStepTemplateData = new templateGenerator(data);

export default stepByStepTemplateData;
