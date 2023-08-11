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
    fileName: "themes/RadioButton.css",
    content: ".ui5-hidden-text {\n\tposition: absolute;\n\tclip: rect(1px,1px,1px,1px);\n\tuser-select: none;\n\tleft: -1000px; /* ensure the invisible texts are never part of the viewport */\n\ttop: -1000px;\n\tpointer-events: none;\n\tfont-size: 0;\n}\n\n:host(:not([hidden])) {\n\tdisplay: inline-block;\n}\n\n:host {\n\tmin-width: var(--_ui5_radio_button_min_width);\n\tmax-width: 100%;\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n\tcolor: var(--_ui5_radio_button_color);\n\tborder-radius: var(--_ui5_radio_button_border_radius);\n\ttransition: var(--_ui5_radio_button_transition);\n}\n\n:host(:not([disabled])) .ui5-radio-root {\n\tcursor: pointer;\n}\n\n/* checked */\n\n:host([checked]) {\n\tcolor: var(--_ui5_radio_button_checked_fill);\n}\n\n:host([checked]) .ui5-radio-svg-inner {\n\tfill: var(--_ui5_radio_button_inner_ring_color);\n}\n\n:host([checked]) .ui5-radio-svg-outer {\n\tstroke: var(--_ui5_radio_button_outer_ring_color);\n}\n\n/* disabled */\n\n:host([disabled]) .ui5-radio-root {\n\tcolor: var(--_ui5_radio_button_color);\n\topacity: var(--sapContent_DisabledOpacity);\n}\n\n:host([disabled][checked]) .ui5-radio-svg-outer {\n\tstroke: var(--_ui5_radio_button_color);\n}\n\n/* focused */\n\n:host(:not([disabled])) .ui5-radio-root:focus-visible:before {\n\tcontent: \"\";\n\tdisplay: var(--_ui5_radio_button_focus_outline);\n\tposition: absolute;\n\ttop: var(--_ui5_radio_button_focus_dist);\n\tbottom: var(--_ui5_radio_button_focus_dist);\n\tleft: var(--_ui5_radio_button_focus_dist);\n\tright: var(--_ui5_radio_button_focus_dist);\n\tpointer-events: none;\n\tborder: var(--_ui5_radio_button_border_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);\n\tborder-radius: var(--_ui5_radio_button_border_radius);\n}\n\n/* horizon readonly focus */\n\n:host(:not([disabled])[readonly]) .ui5-radio-root:focus-visible:before {\n\tborder: var(--_ui5_radio_button_border_width) var(--_ui5_radio_button_border_readonly_focus_style) var(--sapContent_FocusColor);\n}\n\n:host(:not([disabled])) .ui5-radio-root:focus-visible {\n\tborder-radius: var(--_ui5_radio_button_border_radius);\n\tborder: var(--_ui5_radio_button_focus_border);\n}\n\n/* hovered */\n\n:host(:not([disabled]):hover) {\n\tbackground: var(--_ui5_radio_button_hover_background);\n\tbox-shadow: var(--_ui5_radio_button_hover_shadow);\n}\n\n/* hovered and value-state */\n\n:host(:not([value-state=\"Error\"]):not([value-state=\"Warning\"]):not([value-state=\"Success\"]):not([value-state=\"Information\"])) .ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer {\n\tstroke: var(--_ui5_radio_button_outer_ring_hover_color);\n}\n\n:host(:not([value-state=\"Error\"]):not([value-state=\"Warning\"]):not([value-state=\"Success\"]):not([value-state=\"Information\"])) .ui5-radio-root:hover .ui5-radio-inner--hoverable {\n\tfilter: drop-shadow(var(--_ui5_radio_button_outer_ring_hover_shadow));\n}\n\n:host(:not([value-state=\"Error\"]):not([value-state=\"Warning\"]):not([value-state=\"Success\"]):not([value-state=\"Information\"])[checked]) .ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer {\n\tstroke: var(--_ui5_radio_button_outer_ring_checked_hover_color);\n}\n\n.ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer,\n:host([checked]) .ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer {\n\tfill: var(--_ui5_radio_button_hover_fill);\n}\n\n/* active, checked */\n\n:host([active][checked]:not([value-state]):not([disabled]):not([readonly])) .ui5-radio-svg-outer {\n\tstroke: var(--_ui5_radio_button_outer_ring_checked_hover_color);\n}\n\n/* active, not checked */\n\n:host([active]:not([checked]):not([value-state]):not([disabled]):not([readonly])) .ui5-radio-svg-outer {\n\tstroke: var(--_ui5_radio_button_outer_ring_active_color);\n}\n\n/* with label */\n\n:host([text]) .ui5-radio-root:focus-visible:before {\n\tinset-inline: var(--_ui5_radio_button_focus_dist) 0;\n}\n\n:host([text]) .ui5-radio-inner {\n\tpadding: var(--_ui5_radio_button_outer_ring_padding_with_label);\n}\n\n/* readonly */\n\n:host([checked][readonly]) .ui5-radio-svg-inner {\n\tfill: var(--sapContent_NonInteractiveIconColor);\n}\n\n:host([readonly]) .ui5-radio-root .ui5-radio-svg-outer {\n\tfill: var(--sapField_ReadOnly_Background);\n\tstroke: var(--sapField_ReadOnly_BorderColor);\n\tstroke-dasharray: var(--_ui5_radio_button_read_only_border_type);\n\tstroke-width: var(--_ui5_radio_button_read_only_border_width);\n}\n\n/* value states */\n\n:host([value-state=\"Error\"]) .ui5-radio-svg-outer,\n:host([value-state=\"Warning\"]) .ui5-radio-svg-outer {\n\tstroke-width: var(--sapField_InvalidBorderWidth);\n}\n\n:host([value-state=\"Information\"]) .ui5-radio-svg-outer {\n\tstroke-width: var(--_ui5_radio_button_information_border_width);\n}\n\n/* Error state */\n\n:host([value-state=\"Error\"][checked]) .ui5-radio-svg-inner {\n\tfill: var(--_ui5_radio_button_checked_error_fill);\n}\n\n:host([value-state=\"Error\"]) .ui5-radio-svg-outer,\n:host([value-state=\"Error\"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer {\n\tstroke: var(--sapField_InvalidColor);\n\tfill: var(--sapField_InvalidBackground);\n}\n\n:host([value-state=\"Error\"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer {\n\tfill: var(--_ui5_radio_button_hover_fill_error);\n}\n\n:host([value-state=\"Error\"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable {\n\tfilter: drop-shadow(var(--_ui5_radio_button_outer_ring_hover_shadow_error));\n}\n\n/* Warning state */\n\n:host([value-state=\"Warning\"][checked]) .ui5-radio-svg-inner {\n\tfill: var(--_ui5_radio_button_checked_warning_fill);\n}\n\n:host([value-state=\"Warning\"]) .ui5-radio-svg-outer,\n:host([value-state=\"Warning\"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer {\n\tstroke: var(--sapField_WarningColor);\n\tfill: var(--sapField_WarningBackground);\n}\n\n:host([value-state=\"Warning\"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer {\n\tfill: var(--_ui5_radio_button_hover_fill_warning);\n}\n\n:host([value-state=\"Warning\"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable {\n\tfilter: drop-shadow(var(--_ui5_radio_button_outer_ring_hover_shadow_warning));\n}\n\n/* Success state */\n\n:host([value-state=\"Success\"][checked]) .ui5-radio-svg-inner {\n\tfill: var(--_ui5_radio_button_checked_success_fill);\n}\n\n:host([value-state=\"Success\"]) .ui5-radio-svg-outer,\n:host([value-state=\"Success\"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer {\n\tstroke: var(--sapField_SuccessColor);\n\tfill: var(--sapField_SuccessBackground);\n}\n\n:host([value-state=\"Success\"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer {\n\tfill: var(--_ui5_radio_button_hover_fill_success);\n}\n\n:host([value-state=\"Success\"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable {\n\tfilter: drop-shadow(var(--_ui5_radio_button_outer_ring_hover_shadow_success));\n}\n\n/* Information state */\n\n:host([value-state=\"Information\"][checked]) .ui5-radio-svg-inner {\n\tfill: var(--_ui5_radio_button_checked_information_fill);\n}\n\n:host([value-state=\"Information\"]) .ui5-radio-svg-outer,\n:host([value-state=\"Information\"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer {\n\tstroke: var(--sapField_InformationColor);\n\tfill: var(--sapField_InformationBackground);\n}\n\n:host([value-state=\"Information\"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer {\n\tfill: var(--_ui5_radio_button_hover_fill_information);\n}\n\n:host([value-state=\"Information\"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable {\n\tfilter: drop-shadow(var(--_ui5_radio_button_outer_ring_hover_shadow_information));\n}\n\n:host([value-state=\"Error\"]) .ui5-radio-root,\n:host([value-state=\"Warning\"]) .ui5-radio-root,\n:host([value-state=\"Information\"]) .ui5-radio-root {\n\tstroke-dasharray: var(--_ui5_radio_button_warning_error_border_dash);\n}\n\n.ui5-radio-root {\n\theight: var(--_ui5_radio_button_height);\n\tposition: relative;\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n\toutline: none;\n\tmax-width: 100%;\n\twidth: var(--_ui5_radio_button_inner_width);\n\tbox-sizing: border-box;\n\tborder: var(--_ui5_radio_button_border);\n\tborder-radius: var(--_ui5_radio_button_border_radius);\n\ttransition: var(--_ui5_radio_button_transition);\n}\n\n/* Inner */\n\n.ui5-radio-inner {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: var(--_ui5_radio_button_outer_ring_padding);\n\tflex-shrink: 0;\n\theight: var(--_ui5_radio_button_inner_size);\n\tfont-size: 1rem; /* override font size of the message dialog */\n\tpointer-events: none;\n\tvertical-align: top;\n}\n\n.ui5-radio-inner {\n\toutline: none;\n}\n\n.ui5-radio-inner input {\n\t-webkit-appearance: none;\n\tvisibility: hidden;\n\twidth: 0;\n\tleft: 0;\n\tposition: absolute;\n\tfont-size: inherit;\n\tmargin: 0; /* FF puts margin */\n}\n\n/* Label */\n\n[ui5-label].ui5-radio-label {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding-inline-end: var(--_ui5_radio_button_label_offset);\n\tvertical-align: top;\n\tmax-width: 100%;\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n\tpointer-events: none;\n\tcolor: var(--_ui5_radio_button_label_color);\n}\n\n:host([wrapping-type=\"Normal\"][text]) .ui5-radio-root {\n\theight: auto;\n}\n\n:host([wrapping-type=\"Normal\"][text]) [ui5-label].ui5-radio-label {\n\tpadding: var(--_ui5_radio_button_label_side_padding) 0;\n\toverflow-wrap: break-word;\n}\n\n/* SVG */\n\n.ui5-radio-svg {\n\theight: var(--_ui5_radio_button_svg_size);\n\twidth: var(--_ui5_radio_button_svg_size);\n\toverflow: visible;\n\tpointer-events: none;\n}\n\n.ui5-radio-svg-outer {\n\tfill: var(--_ui5_radio_button_outer_ring_bg);\n\tstroke: currentColor;\n\tstroke-width: var(--_ui5_radio_button_outer_ring_width);\n}\n\n.ui5-radio-svg-inner {\n\tfill: none;\n\tr: var(--_ui5_radio_button_inner_ring_radius);\n}\n\n.ui5-radio-svg-outer,\n.ui5-radio-svg-inner {\n\tflex-shrink: 0;\n}\n\n/* ListItem Context */\n\n:host(.ui5-li-singlesel-radiobtn) .ui5-radio-root .ui5-radio-inner .ui5-radio-svg-outer {\n\tfill: var(--sapList_Background);\n}\n"
  };
  var _default = styleData;
  _exports.default = _default;
});