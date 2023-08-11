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
    fileName: "themes/TextArea.css",
    content: ":host {\n\tvertical-align: middle;\n}\n.ui5-hidden-text {\n\tposition: absolute;\n\tclip: rect(1px,1px,1px,1px);\n\tuser-select: none;\n\tleft: -1000px; /* ensure the invisible texts are never part of the viewport */\n\ttop: -1000px;\n\tpointer-events: none;\n\tfont-size: 0;\n}\n:host(:not([hidden])) {\n\tdisplay: inline-block;\n}\n:host {\n\twidth: 100%;\n\tmin-width: 6rem;\n\tcolor: var(--sapField_TextColor);\n\tmin-height: var(--__ui5_textarea_min_height);\n\tfont-size: var(--sapFontSize);\n\tfont-family: \"72override\", var(--sapFontFamily);\n\tfont-style: normal;\n\tbox-sizing: border-box;\n\tline-height: var(--_ui5_textarea_line_height);\n\tmargin: var(--_ui5_textarea_margin);\n}\n:host([value-state][disabled]) .ui5-textarea-wrapper,\n:host(:not([value-state]):not([readonly]):not([focused])) .ui5-textarea-wrapper,\n:host([value-state=\"None\"]:not([readonly]):not([disabled]):not([focused])) .ui5-textarea-wrapper {\n\tbackground: var(--sapField_BackgroundStyle);\n\tbackground-color: var(--sapField_Background);\n}\n:host(:not([value-state]):not([readonly]):not([disabled]):hover) .ui5-textarea-wrapper,\n:host([value-state=\"None\"]:not([readonly]):not([disabled]):hover) .ui5-textarea-wrapper {\n\tbackground: var(--sapField_Hover_BackgroundStyle);\n\tbackground-color: var(--sapField_Hover_Background);\n\tborder: var(--_ui5_textarea_hover_border);\n}\n:host(:not([value-state]):not([readonly]):not([disabled]):not([focused]):hover) .ui5-textarea-wrapper,\n:host([value-state=\"None\"]:not([readonly]):not([disabled]):not([focused]):hover) .ui5-textarea-wrapper {\n\tbox-shadow: var(--sapField_Hover_Shadow);\n}\n.ui5-textarea-root {\n\twidth: 100%;\n\theight: inherit;\n\tmin-height: var(--__ui5_textarea_min_height);\n\tdisplay: inline-flex;\n\tvertical-align: top;\n\toutline: none;\n\tbox-sizing: border-box;\n\tborder-radius: inherit;\n\tborder-color: inherit;\n\tposition: relative;\n\toutline: none;\n}\n.ui5-textarea-wrapper {\n\tposition: relative;\n\tbox-sizing: border-box;\n\twidth: 100%;\n\tborder-bottom: none;\n\tdisplay: flex;\n\theight: 100%;\n\tbackground-color: var(--sapField_Background);\n\tborder-color: var(--sapField_BorderColor);\n\tborder-radius: var(--sapField_BorderCornerRadius);\n\tborder-width: var(--sapField_BorderWidth);\n\tborder-style: var(--sapField_BorderStyle);\n\toutline: none;\n}\n:host([disabled]) .ui5-textarea-wrapper {\n\topacity: var(--_ui5_textarea_disabled_opacity);\n\tcursor: default;\n\tpointer-events: none;\n}\n:host(:not([readonly])) .ui5-textarea-wrapper {\n\tbox-shadow: var(--sapField_Shadow);\n}\n:host([value-state]) .ui5-textarea-wrapper {\n\tborder-color: inherit;\n}\n:host([focused]) .ui5-textarea-wrapper {\n\tbackground-color: var(--sapField_Focus_Background);\n\tbackground-image: none;\n\tbox-shadow: none;\n}\n:host([focused]) .ui5-textarea-wrapper::after {\n\tcontent: var(--_ui5_textarea_focus_pseudo_element_content);\n\tposition: absolute;\n\tpointer-events: none;\n\tz-index: 2;\n\tborder: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--_ui5_textarea_focus_outline_color);\n\tborder-radius: var(--_ui5_textarea_focus_border_radius);\n\ttop: var(--_ui5_textarea_focus_offset);\n\tbottom: var(--_ui5_textarea_focus_offset);\n\tleft: var(--_ui5_textarea_focus_offset);\n\tright: var(--_ui5_textarea_focus_offset);\n}\n:host([focused][readonly]) .ui5-textarea-wrapper::after {\n\ttop: var(--_ui5_textarea_readonly_focus_offset);\n\tbottom: var(--_ui5_textarea_readonly_focus_offset);\n\tleft: var(--_ui5_textarea_readonly_focus_offset);\n\tright: var(--_ui5_textarea_readonly_focus_offset);\n}\n:host([focused][value-state=\"Error\"]:not([disabled])) .ui5-textarea-wrapper::after,\n:host([focused][value-state=\"Warning\"]:not([disabled])) .ui5-textarea-wrapper::after,\n:host([focused][value-state=\"Information\"]:not([disabled])) .ui5-textarea-wrapper::after {\n\ttop: var(--_ui5_textarea_value_state_focus_offset);\n\tbottom: var(--_ui5_textarea_value_state_focus_offset);\n\tleft: var(--_ui5_textarea_value_state_focus_offset);\n\tright: var(--_ui5_textarea_value_state_focus_offset);\n}\n.ui5-textarea-inner {\n\tborder: none;\n\tbox-sizing: border-box;\n\twidth: 100%;\n\tmargin: 0;\n\tpadding: var(--_ui5_textarea_padding_top) var(--_ui5_textarea_padding_right_and_left) var(--_ui5_textarea_padding_bottom);\n\tcolor: inherit;\n\tfont-size: inherit;\n\tfont-family: inherit;\n\tfont-style: inherit;\n\t-webkit-appearance: none;\n\t-moz-appearance: textfield;\n\toverflow: auto;\n\tresize: none;\n\tline-height: inherit;\n\tletter-spacing: inherit;\n\tword-spacing: inherit;\n\tbackground: transparent;\n\toutline: none;\n}\n:host([growing]) .ui5-textarea-inner {\n\tbox-sizing: border-box;\n\theight: 100%;\n  \tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n}\n.ui5-textarea-mirror {\n\tbox-sizing: border-box;\n\tline-height: var(--_ui5_textarea_line_height);\n\tvisibility: hidden;\n\twidth: 100%;\n\tmax-height: 94vh;\n\tmin-height: calc((var(--_textarea_rows) * var(--_ui5_textarea_line_height)) * var(--sapFontSize) + var(--_ui5_textarea_padding_top) + var(--_ui5_textarea_padding_bottom));\n\tword-break: break-all;\n\tpadding-top: var(--_ui5_textarea_padding_top);\n\tpadding-bottom: var(--_ui5_textarea_padding_bottom);\n\tfont-size: var(--sapFontSize);\n\tfont-family: \"72override\", var(--sapFontFamily);\n\twhite-space: pre-wrap;\n}\n:host([style*=\"height\"]) .ui5-textarea-root,\n:host([growing][style*=\"height\"]) .ui5-textarea-wrapper {\n\theight: inherit;\n\tmin-height: var(--__ui5_textarea_min_height);\n}\n:host([rows]) .ui5-textarea-inner, :host([rows]) .ui5-textarea-mirror {\n\tmin-height: calc((var(--_textarea_rows) * var(--_ui5_textarea_line_height)) * var(--sapFontSize) + var(--_ui5_textarea_padding_top) + var(--_ui5_textarea_padding_bottom));\n}\n/* If the 'rows' property is not set it defaults to 2 in the native TextArea element */\n:host:not([rows]) .ui5-textarea-inner {\n\tmin-height: calc(2 * var(--_ui5_textarea_line_height) * var(--sapFontSize) + var(--_ui5_textarea_padding_top) + var(--_ui5_textarea_padding_bottom));\n}\n:host([growing]):not([growing-max-lines]) .ui5-textarea-inner {\n\tmax-height: 100%;\n}\n:host([growing-max-lines]) .ui5-textarea-mirror {\n\tmax-height: calc((var(--_textarea_growing_max_lines) * var(--_ui5_textarea_line_height)) * var(--sapFontSize)  + var(--_ui5_textarea_padding_top) + var(--_ui5_textarea_padding_bottom));\n}\n:host([rows=\"1\"]) .ui5-textarea-inner {\n\tmin-height: calc(var(--_ui5_textarea_line_height) * var(--sapFontSize)  + var(--_ui5_textarea_padding_top) + var(--_ui5_textarea_padding_bottom));\n}\n:host([growing-max-lines=\"1\"]) .ui5-textarea-inner, :host([growing-max-lines=\"1\"]) .ui5-textarea-mirror {\n\tmax-height: calc(var(--_ui5_textarea_line_height) * var(--sapFontSize)  + var(--_ui5_textarea_padding_top) + var(--_ui5_textarea_padding_bottom));\n\tmin-height: calc(var(--_ui5_textarea_line_height) * var(--sapFontSize)  + var(--_ui5_textarea_padding_top) + var(--_ui5_textarea_padding_bottom));\n}\n:host([rows=\"1\"][growing-max-lines]) .ui5-textarea-inner, :host([rows=\"1\"][growing-max-lines]) .ui5-textarea-mirror {\n\tmin-height: calc(var(--_ui5_textarea_line_height) * var(--sapFontSize)  + var(--_ui5_textarea_padding_top) + var(--_ui5_textarea_padding_bottom));\n\tmax-height: calc((var(--_textarea_growing_max_lines) * var(--_ui5_textarea_line_height)) * var(--sapFontSize)  + var(--_ui5_textarea_padding_top) + var(--_ui5_textarea_padding_bottom));\n}\n:host([rows=\"1\"][value-state=\"Error\"]:not([readonly]):not([disabled])) .ui5-textarea-inner,\n:host([rows=\"1\"][value-state=\"Warning\"]:not([readonly]):not([disabled])) .ui5-textarea-inner {\n\theight: calc(var(--_ui5_textarea_line_height) * var(--sapFontSize) + var(--_ui5_textarea_padding_top_error_warning) + var(--_ui5_textarea_padding_bottom_error_warning));\n\tmin-height: calc(var(--_ui5_textarea_line_height) * var(--sapFontSize) + var(--_ui5_textarea_padding_top_error_warning) + var(--_ui5_textarea_padding_bottom_error_warning));\n}\n:host([value-state=\"Error\"]) .ui5-textarea-mirror,\n:host([value-state=\"Warning\"]) .ui5-textarea-mirror {\n\tpadding-top: var(--_ui5_textarea_padding_top_error_warning);\n\tpadding-bottom: var(--_ui5_textarea_padding_bottom_error_warning);\n\tmin-height: calc(var(--_textarea_rows) * var(--_ui5_textarea_line_height) * var(--sapFontSize)  + var(--_ui5_textarea_padding_top_error_warning) + var(--_ui5_textarea_padding_bottom_error_warning));\n}\n:host([growing-max-lines=\"1\"][value-state=\"Error\"]) .ui5-textarea-inner, :host([growing-max-lines=\"1\"][value-state=\"Error\"]) .ui5-textarea-mirror\n:host([growing-max-lines=\"1\"][value-state=\"Warning\"]) .ui5-textarea-inner, :host([growing-max-lines=\"1\"][value-state=\"Warning\"]) .ui5-textarea-mirror {\n\tmax-height: var(--_ui5_textarea_line_height) * var(--sapFontSize) + var(--_ui5_textarea_padding_top_error_warning) + var(--_ui5_textarea_padding_bottom_error_warning);\n\tmin-height: var(--_ui5_textarea_line_height) * var(--sapFontSize) + var(--_ui5_textarea_padding_top_error_warning) + var(--_ui5_textarea_padding_bottom_error_warning);\n}\n:host([value-state=\"Information\"]) .ui5-textarea-mirror {\n\tpadding-top: var(--_ui5_textarea_padding_top_information);\n\tpadding-bottom: var(--_ui5_textarea_padding_bottom_information);\n\tmin-height: calc(var(--_textarea_rows) * var(--_ui5_textarea_line_height) * var(--sapFontSize)  + var(--_ui5_textarea_padding_top_information) + var(--_ui5_textarea_padding_bottom_information));\n}\n:host([rows=\"1\"][value-state=\"Information\"]:not([readonly]):not([disabled])) .ui5-textarea-inner {\n\theight: calc(var(--_ui5_textarea_line_height) * var(--sapFontSize)  + var(--_ui5_textarea_padding_top_information) + var(--_ui5_textarea_padding_bottom_information));\n\tmin-height: calc(var(--_ui5_textarea_line_height) * var(--sapFontSize)  + var(--_ui5_textarea_padding_top_information) + var(--_ui5_textarea_padding_bottom_information));\n}\n:host([growing-max-lines=\"1\"][value-state=\"Information\"]) .ui5-textarea-inner, :host([growing-max-lines=\"1\"][value-state=\"Information\"]) .ui5-textarea-mirror {\n\tmax-height: var(--_ui5_textarea_line_height) * var(--sapFontSize) + var(--_ui5_textarea_padding_top__ui5_textarea_padding_top_information) + var(--_ui5_textarea_padding_bottom__ui5_textarea_padding_top_information);\n\tmin-height: var(--_ui5_textarea_line_height) * var(--sapFontSize) + var(--_ui5_textarea_padding_top_error_warning) + var(--_ui5_textarea_padding_bottom_information);\n}\n:host([readonly]) {\n\tborder-color: var(--sapField_ReadOnly_BorderColor);\n}\n:host([readonly]) .ui5-textarea-inner {\n\tpadding: var(--_ui5_textarea_padding_top_readonly) var(--_ui5_textarea_padding_right_and_left_readonly) var(--_ui5_textarea_padding_bottom_readonly);\n}\n:host([readonly]) .ui5-textarea-root .ui5-textarea-wrapper {\n\tbackground-color: var(--sapField_ReadOnly_Background);\n\tborder-color: var(--sapField_ReadOnly_BorderColor);\n\tborder-style: var(--_ui5_textarea_readonly_border_style);\n}\n:host([show-exceeded-text]) .ui5-textarea-root {\n\tflex-direction: column;\n}\n.ui5-textarea-inner::-webkit-input-placeholder {\n\t/* Chrome/Opera/Safari */\n\tfont-weight: normal;\n\tfont-style: var(--_ui5_textarea_placeholder_font_style);\n\tcolor: var(--sapField_PlaceholderTextColor);\n}\n.ui5-textarea-inner::-moz-placeholder {\n\t/* Firefox 19+ */\n\tfont-weight: normal;\n\tfont-style: var(--_ui5_textarea_placeholder_font_style);\n\tcolor: var(--sapField_PlaceholderTextColor);\n}\n.ui5-textarea-inner:-moz-placeholder {\n\t/* Firefox 18- */\n\tfont-weight: normal;\n\tfont-style: var(--_ui5_textarea_placeholder_font_style);\n\tcolor: var(--sapField_PlaceholderTextColor);\n}\n:host([value-state=\"Error\"]) .ui5-textarea-inner::-webkit-input-placeholder {\n\t/* Chrome/Opera/Safari */\n\tfont-weight: var(--_ui5_textarea_value_state_error_warning_placeholder_font_weight);\n\tfont-style: var(--_ui5_textarea_error_placeholder_font_style);\n\tcolor: var(--_ui5_textarea_error_placeholder_color);\n}\n:host([value-state=\"Error\"]) .ui5-textarea-inner::-moz-placeholder {\n\t/* Firefox 19+ */\n\tfont-weight: var(--_ui5_textarea_value_state_error_warning_placeholder_font_weight);\n\tfont-style: var(--_ui5_textarea_error_placeholder_font_style);\n\tcolor: var(--_ui5_textarea_error_placeholder_color);\n}\n:host([value-state=\"Warning\"]) .ui5-textarea-inner::-moz-placeholder {\n\t/* Firefox 19+ */\n\tfont-weight: var(--_ui5_textarea_value_state_error_warning_placeholder_font_weight);\n\tfont-style: var(--_ui5_textarea_error_placeholder_font_style);\n\tcolor: var(--sapField_PlaceholderTextColor);\n}\n:host([value-state=\"Warning\"]) .ui5-textarea-inner::-webkit-input-placeholder {\n\tfont-weight: var(--_ui5_textarea_value_state_error_warning_placeholder_font_weight);\n\tfont-style: var(--_ui5_textarea_error_placeholder_font_style);\n\tcolor: var(--sapField_PlaceholderTextColor);\n}\n:host([value-state=\"Error\"]:not([readonly]):not([disabled])) .ui5-textarea-wrapper {\n\tbackground: var(--sapField_InvalidBackgroundStyle);\n\tbackground-color: var(--sapField_InvalidBackground);\n\tborder-color: var(--sapField_InvalidColor);\n\tbox-shadow: var(--sapField_InvalidShadow);\n}\n:host([value-state=\"Error\"][focused]:not([readonly]):not([disabled])) .ui5-textarea-wrapper {\n\tbackground-color: var(--_ui5_textarea_focused_value_state_error_background);\n\tborder-color: var(--sapField_InvalidColor);\n}\n:host([value-state=\"Error\"][focused]:not([readonly]):not([disabled])) .ui5-textarea-wrapper:after {\n\tborder-color: var(--_ui5_textarea_focused_value_state_error_focus_outline_color);\n}\n:host([value-state=\"Error\"]:not([readonly]):not([focused]):not([disabled]):hover) .ui5-textarea-wrapper {\n\tbackground-color: var(--_ui5_textarea_error_hover_background_color);\n\tbox-shadow: var(--sapField_Hover_InvalidShadow);\n}\n:host([value-state=\"Error\"]:not([readonly]):not([disabled])) .ui5-textarea-inner,\n:host([value-state=\"Warning\"]:not([readonly]):not([disabled])) .ui5-textarea-inner {\n\tfont-style: var(--_ui5_textarea_error_warning_font_style);\n\tfont-weight: var(--_ui5_textarea_error_warning_font_weight);\n\tpadding: var(--_ui5_textarea_padding_top_error_warning) var(--_ui5_textarea_padding_right_and_left_error_warning) var(--_ui5_textarea_padding_bottom_error_warning);\n}\n:host([value-state=\"Error\"]:not([readonly]):not([disabled])) .ui5-textarea-wrapper,\n:host([value-state=\"Warning\"]:not([readonly]):not([disabled])) .ui5-textarea-wrapper {\n\tborder-style: var(--_ui5_textarea_error_warning_border_style);\n\tborder-width: var(--_ui5_textarea_state_border_width);\n}\n:host([value-state=\"Error\"]:not([readonly]):not([disabled])) .ui5-textarea-inner,\n:host([value-state=\"Warning\"]:not([readonly]):not([disabled])) .ui5-textarea-inner,\n:host([value-state=\"Information\"]:not([readonly]):not([disabled])) .ui5-textarea-inner {\n\tborder-style: none;\n}\n:host([value-state=\"Warning\"]:not([readonly]):not([disabled])) .ui5-textarea-wrapper {\n\tbackground: var(--sapField_WarningBackgroundStyle);\n\tbackground-color: var(--sapField_WarningBackground);\n\tborder-color: var(--sapField_WarningColor);\n\tbox-shadow: var(--sapField_WarningShadow);\n}\n:host([value-state=\"Warning\"][focused]:not([readonly])) .ui5-textarea-wrapper {\n\tbackground-color: var(--_ui5_textarea_focused_value_state_warning_background);\n\tborder-color: var(--sapField_WarningColor);\n}\n:host([value-state=\"Warning\"][focused]:not([readonly])) .ui5-textarea-wrapper:after {\n\tborder-color: var(--_ui5_textarea_focused_value_state_warning_focus_outline_color);\n}\n:host([value-state=\"Warning\"]:not([readonly]):not([disabled]):not([focused]):hover) .ui5-textarea-wrapper {\n\tbackground-color: var(--sapField_Hover_Background);\n\tbox-shadow: var(--sapField_Hover_WarningShadow);\n}\n:host([value-state=\"Success\"]:not([readonly]):not([disabled])) .ui5-textarea-wrapper {\n\tbackground: var(--sapField_SuccessBackgroundStyle);\n\tbackground-color: var(--sapField_SuccessBackground);\n\tborder-color: var(--sapField_SuccessColor);\n\tborder-width: var(--sapField_BorderWidth);\n\tbox-shadow: var(--sapField_SuccessShadow);\n}\n:host([value-state=\"Success\"][focused]:not([readonly])) .ui5-textarea-wrapper {\n\tbackground-color: var(--_ui5_textarea_focused_value_state_success_background);\n\tborder-color: var(--sapField_SuccessColor);\n}\n:host([value-state=\"Success\"][focused]:not([readonly])) .ui5-textarea-wrapper:after {\n\tborder-color: var(--_ui5_textarea_focused_value_state_success_focus_outline_color);\n}\n:host([value-state=\"Success\"]:not([readonly]):not([disabled]):not([focused]):hover) .ui5-textarea-wrapper {\n\tbackground-color: var(--sapField_Hover_Background);\n\tbox-shadow: var(--sapField_Hover_SuccessShadow);\n}\n:host([value-state][value-state=\"Success\"]) .ui5-textarea-inner {\n\tborder-radius: var(--sapField_BorderCornerRadius);\n}\n:host([value-state=\"Information\"]:not([readonly]):not([disabled])) .ui5-textarea-inner {\n\tpadding: var(--_ui5_textarea_padding_top_information) var(--_ui5_textarea_padding_right_and_left_information) var(--_ui5_textarea_padding_bottom_information);\n}\n:host([value-state=\"Information\"]:not([readonly]):not([disabled])) .ui5-textarea-wrapper {\n\tbackground: var(--sapField_InformationBackgroundStyle);\n\tbackground-color: var(--sapField_InformationBackground);\n\tborder-color: var(--sapField_InformationColor);\n\tbox-shadow: var(--sapField_InformationShadow);\n}\n:host([value-state=\"Information\"][focused]:not([readonly])) .ui5-textarea-wrapper {\n\tbackground-color: var(--_ui5_textarea_focused_value_state_information_background);\n\tborder-color: var(--sapField_InformationColor);\n}\n:host([value-state=\"Information\"]:not([readonly]):not([disabled])) .ui5-textarea-wrapper {\n\tborder-width: var(--_ui5_textarea_information_border_width);\n\tborder-style: var(--_ui5_textarea_error_warning_border_style);\n}\n:host([value-state=\"Information\"]:not([readonly]):not([disabled]):not([focused]):hover) .ui5-textarea-wrapper {\n\tbackground-color: var(--sapField_Hover_Background);\n\tbox-shadow: var(--sapField_Hover_InformationShadow);\n}\n.ui5-textarea-exceeded-text {\n\talign-self: flex-end;\n\tpadding: 0.125rem 0.125rem 0.5rem;\n\tcolor: var(--sapContent_LabelColor);\n\tfont-family: \"72override\", var(--sapFontFamily);\n\tfont-size: var(--sapFontSmallSize);\n}\n:host([readonly]) .ui5-textarea-exceeded-text, :host([disabled]) .ui5-textarea-exceeded-text {\n\tdisplay: none;\n}\n:host :not(.ui5-content-native-scrollbars) ::-webkit-scrollbar {\n\tbackground: var(--sapField_BackgroundStyle);\n\tbackground-color: var(--sapScrollBar_TrackColor);\n\tborder-top-right-radius: var(--sapField_BorderCornerRadius);\n\tborder-bottom-right-radius: var(--sapField_BorderCornerRadius);\n}\n:host([value-state=\"Error\"]) :not(.ui5-content-native-scrollbars) ::-webkit-scrollbar {\n\tbackground: var(--sapField_InvalidBackgroundStyle);\n\tbackground-color: var(--sapScrollBar_TrackColor);\n}\n:host([value-state=\"Warning\"]) :not(.ui5-content-native-scrollbars) ::-webkit-scrollbar {\n\tbackground: var(--sapField_WarningBackgroundStyle);\n\tbackground-color: var(--sapScrollBar_TrackColor);\n}\n:host([value-state=\"Information\"]) :not(.ui5-content-native-scrollbars) ::-webkit-scrollbar {\n\tbackground: var(--sapField_InformationBackgroundStyle);\n\tbackground-color: var(--sapScrollBar_TrackColor);\n}\n:host([value-state=\"Success\"]) :not(.ui5-content-native-scrollbars) ::-webkit-scrollbar {\n\tbackground: var(--sapField_SuccessBackgroundStyle);\n\tbackground-color: var(--sapScrollBar_TrackColor);\n}\n:host([focused]) :not(.ui5-content-native-scrollbars) ::-webkit-scrollbar {\n\tbackground-image: none;\n}\n"
  };
  var _default = styleData;
  _exports.default = _default;
});