sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/asset-registries/Themes", "sap/ui/webc/common/thirdparty/theming/generated/themes/sap_fiori_3/parameters-bundle.css", "./sap_fiori_3/parameters-bundle.css"], function (_exports, _Themes, _parametersBundle, _parametersBundle2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _parametersBundle = _interopRequireDefault(_parametersBundle);
  _parametersBundle2 = _interopRequireDefault(_parametersBundle2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  (0, _Themes.registerThemePropertiesLoader)("@ui5/webcomponents-theming", "sap_fiori_3", () => _parametersBundle.default);
  (0, _Themes.registerThemePropertiesLoader)("@ui5/webcomponents", "sap_fiori_3", () => _parametersBundle2.default);
  var _default = {
    packageName: "@ui5/webcomponents",
    fileName: "themes/Token.css",
    content: ":host{display:inline-block;background:var(--_ui5_token_background);border:var(--sapButton_BorderWidth) solid var(--sapButton_TokenBorderColor);border-radius:var(--_ui5_token_border_radius);color:var(--_ui5_token_text_color);height:var(--_ui5_token_height);box-sizing:border-box;margin-top:var(--_ui5_token_top_margin);margin-bottom:var(--_ui5_token_bottom_margin);margin-inline-end:var(--_ui5_token_right_margin);position:relative}:host([overflows]){display:none}:host(:not([readonly]):hover){background:var(--_ui5_token_hover_background);border-color:var(--_ui5_token_hover_border_color);box-shadow:var(--sapContent_Interaction_Shadow)}:host([selected]:not([readonly]):not([focused])){color:var(--sapButton_Selected_TextColor);background:var(--sapButton_Selected_Background);border:var(--sapButton_BorderWidth) solid var(--sapButton_Selected_BorderColor)}:host([selected]:not([readonly]):hover){background:var(--_ui5_token_selected_hover_background);border-color:var(--_ui5_token_selected_hover_border_color);box-shadow:var(--sapContent_Interaction_Shadow)}:host([readonly]){background:var(--_ui5_token_readonly_background);color:var(--_ui5_token_readonly_color)}:host([readonly]) .ui5-token--wrapper{padding:0 var(--_ui5_token_readonly_padding)}:host([selected]) .ui5-token--wrapper:focus{outline:var(--_ui5_token_selected_focus_outline)}:host([focused][selected]:not([readonly])){background:var(--sapButton_Selected_Background);color:var(--sapButton_Selected_TextColor);border:var(--_ui5_token_focused_selected_border)}.ui5-token--wrapper{display:flex;align-items:center;height:100%;width:100%;cursor:default;padding-inline-start:var(--_ui5_token_left_padding);box-sizing:border-box;font-size:var(--sapFontSize);font-family:\"72override\",var(--sapFontFamily);user-select:none}.ui5-token--wrapper:focus{outline-offset:var(--_ui5_token_outline_offset);outline:var(--_ui5_token_focus_outline)}.ui5-token--wrapper:focus:after{content:var(--ui5_token_focus_pseudo_element_content);position:absolute;pointer-events:none;z-index:2;border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--_ui5_input_focus_outline_color);border-radius:var(--_ui5_token_focus_outline_border_radius);top:var(--_ui5_token_focus_offset);bottom:var(--_ui5_token_focus_offset);left:var(--_ui5_token_focus_offset);right:var(--_ui5_token_focus_offset)}.ui5-token--text{white-space:nowrap}.ui5-token--icon{display:flex}:host([selected]) .ui5-token--icon>[ui5-icon],:host([selected]) ::slotted([ui5-icon]){color:var(--sapButton_Selected_TextColor)}.ui5-token--icon>[ui5-icon],::slotted([ui5-icon]){color:inherit;cursor:pointer;width:var(--_ui5_token_icon_size);height:var(--_ui5_token_icon_size);padding:var(--_ui5_token_icon_padding);color:var(--sapContent_IconColor)}"
  };
  _exports.default = _default;
});