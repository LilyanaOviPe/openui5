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
    fileName: "themes/Switch.css",
    content: ".ui5-hidden-text {\n\tposition: absolute;\n\tclip: rect(1px,1px,1px,1px);\n\tuser-select: none;\n\tleft: -1000px; /* ensure the invisible texts are never part of the viewport */\n\ttop: -1000px;\n\tpointer-events: none;\n\tfont-size: 0;\n}\n:host {\n\t-webkit-tap-highlight-color: rgba(0,0,0,0);\n}\n:host(:not([hidden])) {\n\tdisplay: inline-block;\n}\n.ui5-switch-root {\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\twidth: var(--_ui5_switch_width);\n\theight: var(--_ui5_switch_height);\n\tmin-width: var(--_ui5_switch_min_width);\n\tcursor: pointer;\n\toutline: none;\n\tborder-radius: var(--_ui5-switch-root-border-radius);\n}\n.ui5-switch-root:not(.ui5-switch--no-label):not(.ui5-switch--semantic) {\n\twidth: var(--_ui5_switch_with_label_width);\n\theight: var(--_ui5_switch_height);\n}\n.ui5-switch-root.ui5-switch--no-label {\n\tmin-width: var(--_ui5_switch_width);\n}\n.ui5-switch-inner {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\theight: 100%;\n\twidth: 100%;\n\tmin-width: inherit;\n\toverflow: hidden;\n\tpointer-events: none;\n\twill-change: transform;\n}\n:host([checked]) .ui5-switch-inner {\n\tborder-radius: 6.25rem;\n\tbox-shadow: var(--_ui5-switch-root-box-shadow);\n}\n.ui5-switch-track {\n\tdisplay: flex;\n\talign-items: center;\n\theight: var(--_ui5_switch_track_height);\n\twidth: var(--_ui5_switch_track_width);\n\tborder: var(--_ui5-switch-track-border);\n\tborder-radius: var(--_ui5_switch_track_border_radius);\n\tbox-sizing: border-box;\n\ttransition: var(--_ui5_switch_track_transition);\n}\n.ui5-switch-root:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-track {\n\theight: var(--_ui5_switch_track_with_label_height);\n\twidth: var(--_ui5_switch_track_with_label_width);\n}\n.ui5-switch-slider {\n\tposition: relative;\n\theight: var(--_ui5_switch_height);\n\twidth: 100%;\n\ttransition: transform 0.1s ease-in;\n\ttransform-origin: top left;\n}\n.ui5-switch-slider > *:not(.ui5-switch-handle) {\n\tdisplay: var(--_ui5-switch-slider-texts-display);\n}\n.ui5-switch-handle {\n\tposition: absolute;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: var(--_ui5_switch_handle_width);\n\theight: var(--_ui5_switch_handle_height);\n\tborder: var(--_ui5_switch_handle_border);\n\tborder-radius: var(--_ui5_switch_handle_border_radius);\n\tbox-sizing: border-box;\n}\n.ui5-switch-root:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-handle {\n\theight: var(--_ui5_switch_handle_with_label_height);\n\twidth: var(--_ui5_switch_handle_with_label_width);\n}\n.ui5-switch-handle-icon {\n\tdisplay: var(--_ui5-switch-handle-icon-display);\n\ttransition: var(--_ui5_switch_track_transition);\n}\n:host([checked]) .ui5-switch-handle-icon {\n\tcolor: var(--_ui5-switch_track-on-background)\n}\n.ui5-switch-text {\n\tdisplay: flex;\n\tjustify-content: center;\n\tposition: absolute;\n\tz-index: var(--_ui5_switch_text_z_index);\n\tmin-width: var(--_ui5_switch_text_min_width);\n\tfont-size: var(--_ui5_switch_text_font_size);\n\tfont-family: var(--_ui5-switch-text_font_family);\n\ttext-transform: uppercase;\n\ttext-align: center;\n\twhite-space: nowrap;\n\tuser-select: none;\n\t-webkit-user-select: none;\n}\n.ui5-switch-handle,\n.ui5-switch-text {\n\tleft: var(--_ui5_switch_handle_left);\n\ttop: 50%;\n\ttransform: translateY(-50%);\n}\n/* switch focused */\n.ui5-switch-desktop.ui5-switch-root:focus::after {\n\tcontent: \"\";\n\tposition: absolute;\n\tleft: var(--_ui5_switch_root_outline_left);\n\tright: var(--_ui5_switch_root_outline_right);\n\ttop: var(--_ui5_switch_root_outline_top);\n\tbottom: var(--_ui5_switch_root_outline_bottom);\n\tborder: var(--_ui5_switch_focus_outline);\n\tborder-radius: var(--_ui5_switch_root_after_boreder_radius);\n\tpointer-events: none;\n\ttransition: var(--_ui5_switch_track_transition);\n\toutline: var(--_ui5_switch_root_after_outline);\n}\n/* switch hidden input */\n.ui5-switch-root .ui5-switch-input {\n\tposition: absolute;\n\tleft: 0;\n\twidth: 0;\n\theight: 0;\n\tmargin: 0;\n\tvisibility: hidden;\n\t-webkit-appearance: none;\n}\n/* switch disabled */\n.ui5-switch-root.ui5-switch--disabled {\n\topacity: var(--_ui5_switch_disabled_opacity);\n\tcursor: default;\n}\n.ui5-switch-root.ui5-switch--checked .ui5-switch-text--off {\n\tvisibility: var(--_ui5_switch_text_hidden);\n}\n.ui5-switch-root:not(.ui5-switch--checked) .ui5-switch-text--on {\n\tvisibility: var(--_ui5_switch_text_hidden);\n}\n.ui5-switch-root.ui5-switch--checked .ui5-switch-text--on {\n\tleft: var(--_ui5_switch_text_active_left);\n}\n.ui5-switch-root:not(.ui5-switch--checked) .ui5-switch-text--off {\n\tleft: var(--_ui5_switch_text_inactive_left);\n\tright: var(--_ui5_switch_text_inactive_right)\n}\n/* handle */\n.ui5-switch-root.ui5-switch--checked .ui5-switch-handle {\n\tbackground: var(--_ui5_switch_handle_active_background_color);\n\tborder-color: var(--_ui5_switch_handle_active_border_color);\n}\n.ui5-switch-root:not(.ui5-switch--checked) .ui5-switch-handle {\n\tbackground: var(--_ui5_switch_handle_inactive_background_color);\n\tborder-color: var(--_ui5_switch_handle_inactive_border_color);\n}\n.ui5-switch-desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle {\n\tbackground: var(--_ui5_switch_handle_hover_active_background_color);\n\tborder-color: var(--_ui5_switch_handle_hover_active_border_color);\n}\n.ui5-switch-desktop.ui5-switch-root:not(.ui5-switch--disabled):not(.ui5-switch--checked):hover .ui5-switch-handle {\n\tbackground: var(--_ui5_switch_handle_hover_inactive_background_color);\n\tborder-color: var(--_ui5_switch_handle_hover_inactive_border_color);\n}\n/* handle semantic */\n.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked .ui5-switch-handle {\n\tbackground: var(--_ui5_switch_handle_semantic_accept_background_color);\n\tborder-color: var(--_ui5_switch_handle_semantic_accept_border_color);\n}\n.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--checked) .ui5-switch-handle {\n\tbackground: var(--_ui5_switch_handle_semantic_reject_background_color);\n\tborder-color: var(--_ui5_switch_handle_semantic_reject_border_color);\n}\n.ui5-switch-desktop.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle {\n\tbackground: var(--_ui5_switch_handle_semantic_hover_accept_background_color);\n\tborder-color: var(--_ui5_switch_handle_semantic_hover_accept_border_color);\n}\n.ui5-switch-desktop.ui5-switch--semantic.ui5-switch-root:not(.ui5-switch--checked):not(.ui5-switch--disabled):hover .ui5-switch-handle {\n\tbackground: var(--_ui5_switch_handle_semantic_hover_reject_background_color);\n\tborder-color: var(--_ui5_switch_handle_semantic_hover_reject_border_color);\n}\n/* track */\n.ui5-switch-root.ui5-switch--checked .ui5-switch-track {\n\tbackground: var(--_ui5_switch_track_active_background_color);\n\tborder-color: var(--_ui5_switch_track_active_border_color);\n}\n.ui5-switch-root:not(.ui5-switch--checked) .ui5-switch-track {\n\tbackground: var(--_ui5_switch_track_inactive_background_color);\n\tborder-color: var(--_ui5_switch_track_inactive_border_color);\n}\n.ui5-switch-desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-track {\n\tbackground: var(--_ui5_switch_track_hover_active_background_color);\n\tborder-color: var(--_ui5_switch_track_hover_active_border_color);\n}\n.ui5-switch-desktop.ui5-switch-root:not(.ui5-switch--checked):not(.ui5-switch--disabled):hover .ui5-switch-track {\n\tbackground: var(--_ui5_switch_track_hover_inactive_background_color);\n\tborder-color: var(--_ui5_switch_track_hover_inactive_border_color);\n}\n/* track semantic*/\n.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked .ui5-switch-track {\n\tbackground: var(--_ui5_switch_track_semantic_accept_background_color);\n\tborder-color: var(--_ui5_switch_track_semantic_accept_border_color);\n}\n.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--checked) .ui5-switch-track {\n\tbackground: var(--_ui5_switch_track_semantic_reject_background_color);\n\tborder-color: var(--_ui5_switch_track_semantic_reject_border_color);\n}\n.ui5-switch-desktop.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-track {\n\tbackground: var(--_ui5_switch_track_semantic_hover_accept_background_color);\n\tborder-color: var(--_ui5_switch_track_semantic_hover_accept_border_color);\n}\n.ui5-switch-desktop.ui5-switch--semantic.ui5-switch-root:not(.ui5-switch--checked):not(.ui5-switch--disabled):hover .ui5-switch-track {\n\tbackground: var(--_ui5_switch_track_semantic_hover_reject_background_color);\n\tborder-color: var(--_ui5_switch_track_semantic_hover_reject_border_color);\n}\n.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-slider {\n\t/* Move slider to oposite end, taking into account the handle as an offset. */\n\t/* Note: translate(calc()) does not work in IE11 */\n\ttransform: var(--_ui5_switch_transform_with_label);\n}\n.ui5-switch-root.ui5-switch--checked .ui5-switch-slider {\n\t/* Move slider to oposite end, taking into account the handle as an offset. */\n\t/* Note: translate(calc()) does not work in IE11 */\n\ttransform: var(--_ui5_switch_transform);\n}\n/* switch semantic icon and type noLabel icon in horizon theme */\n.ui5-switch-text .ui5-switch-text--on .ui5-switch-no-label-icon,\n.ui5-switch-root.ui5-switch--semantic .ui5-switch-text,\n.ui5-switch-root.ui5-switch--no-label .ui5-switch-text {\n\tdisplay: flex;\n\tjustify-content: center;\n\n}\n.ui5-switch--no-label .ui5-switch-no-label-icon-on,\n.ui5-switch--no-label .ui5-switch-no-label-icon-off {\n\twidth: var(--_ui5_switch_icon_width);\n\theight: var(--_ui5_switch_icon_height);\n\tdisplay: var(--_ui5_switch_track_icon_display);\n}\n.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-on,\n.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-off {\n\twidth: var(--_ui5_switch_icon_width);\n\theight: var(--_ui5_switch_icon_height)\n}\n.ui5-switch-root .ui5-switch-text {\n\tfont-family: var(--_ui5_switch_text_font_family);\n\tfont-size: var(--_ui5_switch_text_font_size);\n\twidth: var(--_ui5_switch_text_width);\n}\n.ui5-switch-root:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-text {\n\tfont-family: var(--_ui5_switch_text_with_label_font_family);\n\tfont-size: var(--_ui5_switch_text_with_label_font_size);\n\twidth: var(--_ui5_switch_text_with_label_width);\n}\n/* switch active effects */\n/* active & off */\n:host([active]) .ui5-switch-desktop.ui5-switch-root:not(.ui5-switch--disabled) .ui5-switch-track {\n\tbackground: var( --_ui5-switch_track-off-active-background);\n}\n/* active & on */\n:host([active]) .ui5-switch-desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-track {\n\tbackground: var(--_ui5-switch_track-on-active-background);\n}\n.ui5-switch-desktop.ui5-switch-root:not(.ui5-switch--disabled):hover .ui5-switch-handle {\n\tbox-shadow: var(--_ui5_switch_handle_off_hover_box_shadow);\n}\n/* switch on hover, when switched on */\n.ui5-switch-desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle {\n\tbox-shadow: var(--_ui5_switch_handle_on_hover_box_shadow);\n}\n/* semantic switch on hover, when switched off */\n.ui5-switch-desktop.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--disabled):hover .ui5-switch-handle {\n\tbox-shadow: var(--_ui5_switch_handle_semantic_off_hover_box_shadow);\n}\n/* semantic switch on hover, when switched on */\n.ui5-switch-desktop.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle {\n\tbox-shadow: var(--_ui5_switch_handle_semantic_on_hover_box_shadow);\n}\n/* Text */\n.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-on,\n.ui5-switch-root.ui5-switch--semantic .ui5-switch-text--on {\n\tcolor: var(--_ui5_switch_text_semantic_accept_color);\n}\n.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-off,\n.ui5-switch-root.ui5-switch--semantic .ui5-switch-text--off {\n\tcolor: var(--_ui5_switch_text_semantic_reject_color);\n}\n.ui5-switch-root .ui5-switch-text--on {\n\tcolor: var(--_ui5_switch_text_active_color);\n\toverflow: var(--_ui5_switch_text_overflow);\n\ttext-overflow: ellipsis;\n}\n.ui5-switch-root .ui5-switch-text--off {\n\tcolor: var(--_ui5_switch_text_inactive_color);\n\toverflow: var(--_ui5_switch_text_overflow);\n\ttext-overflow: ellipsis;\n}\n.ui5-switch-root .ui5-switch-no-label-icon-on,\n.ui5-switch-root .ui5-switch-icon-on {\n\tcolor: var(--_ui5_switch_text_active_color);\n}\n.ui5-switch-root .ui5-switch-no-label-icon-off,\n.ui5-switch-root .ui5-switch-icon-off {\n\tcolor: var(--_ui5_switch_text_inactive_color);\n}\n/* RTL */\n[dir=\"rtl\"].ui5-switch-root.ui5-switch--checked:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-slider {\n\ttransform: var(--_ui5_switch_rtl_transform_with_label);\n}\n[dir=\"rtl\"].ui5-switch-root.ui5-switch--checked .ui5-switch-slider {\n\ttransform: var(--_ui5_switch_rtl_transform);\n}\n[dir=\"rtl\"].ui5-switch-root .ui5-switch-handle {\n\tleft: auto;\n\tright: var(--_ui5_switch_handle_left);\n}\n[dir=\"rtl\"].ui5-switch-root .ui5-switch-text--on {\n\tright: var(--_ui5_switch_text_active_left);\n\tleft: var(--_ui5_switch_text_active_right);\n}\n[dir=\"rtl\"].ui5-switch-root .ui5-switch-text--off {\n\tright: var(--_ui5_switch_text_inactive_left);\n\tleft: var(--_ui5_switch_text_inactive_right);\n}\n"
  };
  var _default = styleData;
  _exports.default = _default;
});