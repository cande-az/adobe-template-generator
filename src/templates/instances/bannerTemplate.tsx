import FormBasicOptions from "components/formGenerators/formBasicOptions";
import simpleHTMLRender from "utils/simpleHTMLRender";
import { IsTemplateGenerator } from "../../interfaces";
import templateGenerator from "../generator";

const data: IsTemplateGenerator = {
  selectOption: {
    name: "Plantilla Banner",
    value: "bannerTemplate",
    image: "",
    description: "",
  },
  options: [
    {
      displayName: "Mensaje",
      option: "mensaje",
      isEditable: true,
      isRequired: true,
    },
    {
      displayName: "Url",
      option: "url",
      isEditable: true,
      isRequired: true,
    },
  ],
  formTemplate: FormBasicOptions,
  templateGenerator: (
    templateDataList: Record<string, string>[],
    options?: any[]
  ) => {
    const finalTemplate = `
    <script>
    'use strict';

    var objBannerColor = {
        'Azul': '#0039A6',
        'Verde': '#05BE50',
        'Celeste': '#64B4E6'
    };

    var objBannerFontColor = {
        'Negro': '#000000',
        'Blanco': '#FFFFFF'
    };

    function bannerCreator() {
        var bannerCSS = '\n                .bannerStyle {\n                    background-color: ' + objBannerColor['Celeste'] + ';\n                    text-align: center;\n                    font-size: 18px;\n                    font-family: Geometria, sans-serif;\n                    cursor: pointer;\n                    color: ' + objBannerFontColor['Blanco'] + ';\n                    z-index: 015;\n                    width: 100%;\n                    padding: 12px 0;\n                    position: sticky;\n                    top: 55px;\n                }\n                @media(max-width:767px){\n                    .bannerStyle {\n                        font-size: 16px;\n                    }\n                }\n            ';

        var styleBanner = document.createElement('style');
        styleBanner.innerHTML = bannerCSS;
        document.head.appendChild(styleBanner);

        var menuBar = document.querySelector('.o-wrapper-header'); //Tomar en cuenta que clase usa el Header la página

        var banner = document.createElement('div');
        banner.setAttribute('id', 'banner-per');
        banner.className = 'bannerStyle';

        banner.innerHTML = "${simpleHTMLRender("mensaje", templateDataList[0])}"; //Editar Mensaje del Banner

        menuBar.parentNode.insertBefore(banner, menuBar.nextSibling);

        var bannerReal = document.getElementById('banner-per');
        bannerReal.addEventListener("click", function () {
            return window.open("${simpleHTMLRender("url", templateDataList[0])}");
        }); //Editar Enlace del Banner
    };

    bannerCreator();
</script>
    `;
    return finalTemplate;
  },
};
const bannerTemplate = new templateGenerator(data);

export default bannerTemplate;
