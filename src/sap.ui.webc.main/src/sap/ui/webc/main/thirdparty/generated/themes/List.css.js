sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/asset-registries/Themes", "sap/ui/webc/common/thirdparty/theming/generated/themes/sap_fiori_3/parameters-bundle.css", "./sap_fiori_3/parameters-bundle.css"], function (_exports, _Themes, _parametersBundle, _parametersBundle2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _parametersBundle = _interopRequireDefault(_parametersBundle);
  _parametersBundle2 = _interopRequireDefault(_parametersBundle2);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  (0, _Themes.registerThemePropertiesLoader)("@ui5/webcomponents-theming", "sap_fiori_3", async () => _parametersBundle.default);
  (0, _Themes.registerThemePropertiesLoader)("@ui5/webcomponents", "sap_fiori_3", async () => _parametersBundle2.default);
  const styleData = {
    packageName: "@ui5/webcomponents",
    fileName: "themes/List.css",
    content: ".ui5-hidden-text {\n\tposition: absolute;\n\tclip: rect(1px,1px,1px,1px);\n\tuser-select: none;\n\tleft: -1000px; /* ensure the invisible texts are never part of the viewport */\n\ttop: -1000px;\n\tpointer-events: none;\n\tfont-size: 0;\n}\n[growing-button] {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: var(--_ui5_load_more_padding);\n\tborder-top: 1px solid var(--sapList_BorderColor);\n\tborder-bottom: var(--_ui5_load_more_border-bottom);\n\tbox-sizing: border-box;\n\tcursor: pointer;\n\toutline: none;\n}\n[growing-button-inner] {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-direction: column;\n\tmin-height: var(--_ui5_load_more_text_height);\n\twidth: 100%;\n\tcolor: var(--sapButton_TextColor);\n\tbackground-color: var(--sapList_Background);\n\tborder: var(--_ui5_load_more_border);\n\tborder-radius: var(--_ui5_load_more_border_radius);\n\tbox-sizing: border-box;\n}\n[growing-button-inner]:focus {\n\toutline: var(--_ui5_load_more_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);\n\toutline-offset: -0.125rem;\n\tborder-color: transparent;\n}\n[growing-button-inner]:hover {\n\tbackground-color: var(--sapList_Hover_Background);\n}\n[growing-button-inner]:active,\n[growing-button-inner][active] {\n\tbackground-color: var(--sapList_Active_Background);\n\tborder-color: var(--sapList_Active_Background);\n}\n[growing-button-inner]:active > *,\n[growing-button-inner][active] > * {\n\tcolor: var(--sapList_Active_TextColor);\n}\n[growing-button-text],\n[growing-button-subtext] {\n\twidth: 100%;\n\ttext-align: center;\n\tfont-family: \"72override\", var(--sapFontFamily);\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tbox-sizing: border-box;\n}\n[growing-button-text] {\n\theight: var(--_ui5_load_more_text_height);\n\tpadding: 0.875rem 1rem 0 1rem;\n\tfont-size: var(--_ui5_load_more_text_font_size);\n\tfont-weight: bold;\n}\n[growing-button-subtext] {\n\tfont-size: var(--sapFontSize);\n\tpadding: var(--_ui5_load_more_desc_padding);\n}\n:host(:not([hidden])) {\n\tdisplay: block;\n\tmax-width: 100%;\n\twidth: 100%;\n\t-webkit-tap-highlight-color: transparent;\n}\n:host([indent]) .ui5-list-root {\n\tpadding: 2rem;\n}\n:host([separators=\"None\"]) .ui5-list-nodata {\n\tborder-bottom: 0;\n}\n:host([busy]) {\n\topacity: 0.72;\n}\n:host([busy]) .ui5-list-busy-row {\n\tposition: absolute;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\ttop: 0;\n\toutline: none;\n}\n:host([busy]) .ui5-list-busy-ind {\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tz-index: 1;\n}\n.ui5-list-root {\n\twidth: 100%;\n\theight: 100%;\n\tposition: relative;\n\tbox-sizing: border-box;\n}\n.ui5-list-scroll-container {\n\toverflow: auto;\n\theight: 100%;\n}\n.ui5-list-ul {\n\tlist-style-type: none;\n\tpadding: 0;\n\tmargin: 0;\n}\n.ui5-list-ul:focus {\n\toutline: none;\n}\n.ui5-list-focusarea {\n\tposition: fixed; /* keep it in the visible viewport, so that IE does not scroll on focus */\n}\n.ui5-list-header {\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tbox-sizing: border-box;\n\tfont-size: var(--sapFontHeader4Size); \n\tfont-family: \"72override\", var(--sapFontFamily);\n\tcolor: var(--sapGroup_TitleTextColor);\n\theight: 3rem;\n\tline-height: 3rem;\n\tpadding: 0 1rem;\n\tbackground-color: var(--sapGroup_TitleBackground);\n\tborder-bottom: 1px solid var(--sapGroup_TitleBorderColor);\n}\n.ui5-list-footer {\n\theight: 2rem;\n\tbox-sizing: border-box;\n\t-webkit-text-size-adjust: none;\t/* To improve readability Mobile Safari automatically increases the size of small text so let's disable this */\n\tfont-size: var(--sapFontSize);\n\tfont-family: \"72override\", var(--sapFontFamily);\n\tline-height: 2rem;\n\tbackground-color: var(--sapList_FooterBackground);\n\tcolor: var(--ui5_list_footer_text_color);\n\tpadding: 0 1rem;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n}\n.ui5-list-nodata {\n\tlist-style-type: none;\n\tdisplay: -webkit-box;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\talign-items: center;\n\t-webkit-box-pack: center;\n\tjustify-content: center;\n\tcolor: var(--sapTextColor);\n\tbackground-color: var(--sapList_Background);\n\tborder-bottom: 1px solid var(--sapList_BorderColor);\n\tpadding: 0 1rem !important;\n\theight: var(--_ui5_list_no_data_height);\n\tfont-size: var(--_ui5_list_no_data_font_size);\n\tfont-family: \"72override\", var(--sapFontFamily);\n}\n.ui5-list-nodata-text {\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n}"
  };
  var _default = styleData;
  _exports.default = _default;
});