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
    fileName: "themes/DateRangePicker.css",
    content: ":host(:not([hidden])) {\n\tdisplay: inline-block;\n}\n\n:host {\n\tmin-width: 15rem;\n\tcolor: var(--sapField_TextColor);\n\tbackground-color: var(--sapField_Background);\n}\n\n:host .ui5-date-picker-input {\n\twidth: 100%;\n\tmin-width:inherit;\n\tcolor: inherit;\n\tbackground-color: inherit;\n}"
  };
  var _default = styleData;
  _exports.default = _default;
});