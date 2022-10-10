/* eslint-disable react-hooks/exhaustive-deps */
import { IsTemplateGenerator } from "../../interfaces";
import templateGenerator from "../generator";
import FormBasicOptions from "../../components/formGenerators/formBasicOptions";
import simpleHTMLRender from "../../utils/simpleHTMLRender";

const data: IsTemplateGenerator = {
  selectOption: { name: "Basic Popup", value: "basicPopup", image:"", description:"" },
  options: [
    {
      displayName: "Titulo",
      option: "title",
      isEditable: true,
      isRequired: true,
    },
    {
      displayName: "Contenido / Descripción",
      option: "content",
      isEditable: true,
      isRequired: true,
    },
    {
      displayName: "Url",
      option: "link",
      isEditable: true,
      isRequired: true,
    },
    {
      displayName: "Texto Url",
      option: "linkLabel",
      isEditable: true,
      isRequired: true,
    },
    {
      displayName: "Imagen Escritorio 1X",
      option: "imgDesktop1x",
      isEditable: true,
      isRequired: true,
    },
    {
      displayName: "Imagen Escritorio 2X",
      option: "imgDesktop2x",
      isEditable: true,
      isRequired: true,
    },
    {
      displayName: "Imagen Tablet 1X",
      option: "imgTablet1x",
      isEditable: true,
      isRequired: true,
    },
    {
      displayName: "Imagen Tablet 2X",
      option: "imgTablet2x",
      isEditable: true,
      isRequired: true,
    },
    {
      displayName: "Imagen Mobil 1X",
      option: "imgMobile1x",
      isEditable: true,
      isRequired: true,
    },
    {
      displayName: "Imagen Mobil 2X",
      option: "imgMobile2x",
      isEditable: true,
      isRequired: true,
    },
  ],
  formTemplate: FormBasicOptions,
  templateGenerator: (templateDataList: Record<string, string>[]) => {
    const finalTemplate = `    <!-- Variable para Trackear Ejecuciones del Popup -->
        <script>
            adobe.target.trackEvent({ mbox: 'NOMBRE_TRACK' });
        </script>
    
        <!-- Estilos del Popup -->
        <style>
            /* Mobile 320px - 480px */
            .overlayPopup {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: rgba(0, 0, 0, 0.5);
                z-index: 20;
            }
    
            .popupTarget {
                z-index: 100;
            }
    
            .popupTarget * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                border: none;
                width: 100%;
                z-index: 20;
            }
    
            .popupTarget__wrapper {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                max-width: 240px;
                background: #fff;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            }
    
            .popupTarget__header {
                background: #021d5f;
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: relative;
            }
    
            .popupTarget__close {
                position: absolute;
                top: 8px;
                right: 8px;
                width: 16px;
                height: 16px;
                z-index: 100;
            }
    
            .popupTarget__close::before,
            .popupTarget__close::after {
                content: '';
                display: block;
                background: #021d5f;
                margin-bottom: 4px;
                border-radius: 2px;
                width: 16px;
                height: 4px;
                position: absolute;
                left: 50%;
                top: 0;
                cursor: pointer;
            }
    
            .popupTarget__close::before {
                transform: rotate(45deg) translate(-1px, 10px);
            }
    
            .popupTarget__close::after {
                transform: rotate(-45deg) translate(-10px, -1px);
            }
    
            .popupTarget__body {
                width: 100%;
                padding: 15px 18px;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
    
            .popupTarget__title {
                width: 100%;
                color: #0f191e;
                font-family: Geometria;
                font-weight: 500;
                letter-spacing: -1px;
                text-align: center;
                font-size: 16px;
                line-height: 22px;
                margin: 0 0 5px 0;
            }
    
            .popupTarget__content {
                color: #0f191e;
                font-family: Montserrat;
                text-align: center;
                align-content: center;
                letter-spacing: unset;
                width: unset;
                font-size: 11px;
                margin: 0 0 12px 0;
                line-height: 17px;
            }
    
            .popupTarget__content strong {
                font-weight: 600;
            }
    
            .popupTarget__btn {
                width: 100%;
                color: #ffffff;
                font-family: Geometria;
                font-size: 15px;
                font-weight: 500;
                letter-spacing: 0.09px;
                line-height: 18px;
                text-align: center;
                text-decoration: none;
                line-height: 40px;
                border-radius: 4px;
                background-color: #05be50;
                display: block;
            }
    
            /* Galaxy Fold 0px - 319px */
            @media (max-width: 319px) {
                .popupTarget__title {
                    font-size: 16px;
                }
            }
    
            /* Tablet 481px - 767px */
            @media (min-width: 481px) {
                .popupTarget__wrapper {
                    max-width: 305px;
                }
    
                .popupTarget__body {
                    padding: 23px 24px;
                }
    
                .popupTarget__title {
                    font-size: 19px;
                    margin-bottom: 10px;
                    line-height: 24px;
                }
    
                .popupTarget__content {
                    font-size: 12px;
                    margin-bottom: 15px;
                    line-height: 21px;
                }
    
                .popupTarget__btn {
                    font-size: 15px;
                }
            }
    
            /* Laptops (Small Screens) 768px a 1024px */
            @media (min-width: 768px) {
                .popupTarget__wrapper {
                    max-width: 340px;
                }
    
                .popupTarget__body {
                    padding: 20px 0 24px;
                }
    
                .popupTarget__title {
                    font-size: 22px;
                    line-height: 28px;
                    width: 96%;
                    margin-bottom: 10px;
                }
    
                .popupTarget__content {
                    width: 86%;
                    margin-bottom: 18px;
                    font-size: 14px;
                    line-height: 23px;
                }
    
                .popupTarget__btn {
                    font-size: 18px;
                    width: 90%;
                    line-height: 50px;
                }
            }
        </style>
    
        <!-- Script para construir el Popup en Adobe Target -->
        <script>
            'use strict';
    
            var today = new Date();
            var monthCode = today.getFullYear().toString() + (today.getMonth() + 1).toString().padStart(2, '0');
    
            var infoPopup = {
                // 'MONTH_CODE': {
                //     title: '',
                //     content: '',
                //     link: {
                //         url: '',
                //         text: '',
                //     },
                //     images: {
                //         imgDesktop1x: '',
                //         imgDesktop2x: '',
                //         imgTablet1x: '',
                //         imgTablet2x: '',
                //         imgMobile1x: '',
                //         imgMobile2x: '',
                //     }
                // },
                '202210': {
                    title: "${simpleHTMLRender("title", templateDataList[0])}",
                    content: "${simpleHTMLRender(
                      "content",
                      templateDataList[0]
                    )}",
                    link: {
                        url:"${simpleHTMLRender("link", templateDataList[0])}",
                        text: "${simpleHTMLRender(
                          "linkLabel",
                          templateDataList[0]
                        )}"
                    },
                    images: {
                        imgDesktop1x:"${simpleHTMLRender(
                          "imgDesktop1x",
                          templateDataList[0]
                        )}" ,
                        imgDesktop2x:"${simpleHTMLRender(
                          "imgDesktop2x",
                          templateDataList[0]
                        )}",
                        imgTablet1x:"${simpleHTMLRender(
                          "imgTablet1x",
                          templateDataList[0]
                        )}" ,
                        imgTablet2x:"${simpleHTMLRender(
                          "imgTablet2x",
                          templateDataList[0]
                        )}" ,
                        imgMobile1x: "${simpleHTMLRender(
                          "imgMobile1x",
                          templateDataList[0]
                        )}",
                        imgMobile2x: "${simpleHTMLRender(
                          "imgMobile2x",
                          templateDataList[0]
                        )}"
                    }
                }
            };
    
            var infoPopupToday = {
                title: infoPopup[monthCode].title,
                content: infoPopup[monthCode].content,
                link: {
                    url: infoPopup[monthCode].link.url,
                    text: infoPopup[monthCode].link.text
                },
                images: {
                    imgDesktop1x: infoPopup[monthCode].images.imgDesktop1x,
                    imgDesktop2x: infoPopup[monthCode].images.imgDesktop2x,
                    imgTablet1x: infoPopup[monthCode].images.imgTablet1x,
                    imgTablet2x: infoPopup[monthCode].images.imgTablet2x,
                    imgMobile1x: infoPopup[monthCode].images.imgMobile1x,
                    imgMobile2x: infoPopup[monthCode].images.imgMobile2x
                }
            };
    
            function popupInTarget() {
                var popupContainer = document.createElement('div');
                popupContainer.classList.add('popupTarget');
                popupContainer.id = 'popup-target'; //Elegir un Nombre
                popupContainer.innerHTML ='\n                <div class='popupTarget__wrapper'>\n                    <div class='popupTarget__header'>\n                        <div class='popupTarget__close'></div>\n                        <picture>\n                            <source srcset ='" +
                infoPopupToday.images.imgDesktop1x +
                " 1x, " +
                infoPopupToday.images.imgDesktop1x +
                " 2x' media='(min-width: 768px)'>\n                            <source srcset ='" +
                infoPopupToday.images.imgTablet1x +
                " 1x, " +
                infoPopupToday.images.imgTablet2x +
                " 2x' media='(min-width: 480px)'>\n                            <img srcset='" +
                infoPopupToday.images.imgMobile1x +
                " 1x, " +
                infoPopupToday.images.imgMobile2x +
                " 2x' alt='Popup Image'/>\n                        </picture>\n                    </div>\n                    <div class='popupTarget__body'>\n                        <div class='popupTarget__title'>" +
                infoPopupToday.title +
                "</div>\n                        <div class='popupTarget__content'>" +
                infoPopupToday.content +
                "</div>\n                        <a class='popupTarget__btn' href='" +
                infoPopupToday.link.url +
                "'>" +
                infoPopupToday.link.text +
                "</a>\n                    </div>\n                </div>';
                var close = popupContainer.querySelector('.popupTarget__close');
                close.addEventListener('click', closePopupTarget);
    
                var overlay = overlayPopupTarget();
                overlay.addEventListener('click', closePopupTarget);
                document.body.appendChild(overlay);
                document.body.appendChild(popupContainer);
            }
    
            function overlayPopupTarget() {
                var overlayPopup = document.createElement('div');
                overlayPopup.id = 'overlay-popup-target';
                overlayPopup.classList.add('overlayPopup');
                overlayPopup.classList.add('animate__fadeOut');
                return overlayPopup;
            }
    
            function closePopupTarget(e) {
                e.preventDefault();
                e.stopPropagation();
                var popupDelete = document.querySelector('#popup-target'); //Elegir otro nombre
                var overlay = document.querySelector('#overlay-popup-target');
                popupDelete.remove();
                overlay.remove();
            }
    
            popupInTarget();
        </script>`;
    return finalTemplate;
  },
};

const basicPopup = new templateGenerator(data);

export default basicPopup;
