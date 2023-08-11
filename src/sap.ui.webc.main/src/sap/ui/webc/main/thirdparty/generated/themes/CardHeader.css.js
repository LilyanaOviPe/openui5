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
    fileName: "themes/CardHeader.css",
    content: ".ui5-hidden-text {\n\tposition: absolute;\n\tclip: rect(1px,1px,1px,1px);\n\tuser-select: none;\n\tleft: -1000px; /* ensure the invisible texts are never part of the viewport */\n\ttop: -1000px;\n\tpointer-events: none;\n\tfont-size: 0;\n}\n\n.ui5-card-header {\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: var(--_ui5_card_header_padding);\n\toutline: none;\n}\n\n:host([subtitleText]) .ui5-card-header {\n\talign-items: flex-start;\n}\n\n.ui5-card-header.ui5-card-header-ff:not(.ui5-card-header-hide-focus):focus-within:before {\n\toutline: none;\n\tcontent: \"\";\n\tposition: absolute;\n\tborder: var(--_ui5_card_header_focus_border);\n\tpointer-events: none;\n\ttop: var(--_ui5_card_header_focus_offset);\n\tleft: var(--_ui5_card_header_focus_offset);\n\tright: var(--_ui5_card_header_focus_offset);\n\tbottom: var(--_ui5_card_header_focus_offset);\n\tborder-top-left-radius: var(--_ui5_card_header_focus_radius);\n\tborder-top-right-radius: var(--_ui5_card_header_focus_radius);\n\tborder-bottom-left-radius: var(--_ui5_card_header_focus_bottom_radius);\n\tborder-bottom-right-radius: var(--_ui5_card_header_focus_bottom_radius);\n}\n\n/* cannot be combined with the above style, because :has selector breaks the whole style if FF */\n\n.ui5-card-header:not(.ui5-card-header-ff):not(.ui5-card-header-hide-focus):has(.ui5-card-header-focusable-element:focus-visible):before {\n\toutline: none;\n\tcontent: \"\";\n\tposition: absolute;\n\tborder: var(--_ui5_card_header_focus_border);\n\tpointer-events: none;\n\ttop: var(--_ui5_card_header_focus_offset);\n\tleft: var(--_ui5_card_header_focus_offset);\n\tright: var(--_ui5_card_header_focus_offset);\n\tbottom: var(--_ui5_card_header_focus_offset);\n\tborder-top-left-radius: var(--_ui5_card_header_focus_radius);\n\tborder-top-right-radius: var(--_ui5_card_header_focus_radius);\n\tborder-bottom-left-radius: var(--_ui5_card_header_focus_bottom_radius);\n\tborder-bottom-right-radius: var(--_ui5_card_header_focus_bottom_radius);\n}\n\n.ui5-card-header-focusable-element {\n\toutline: none;\n}\n\n.ui5-card-header-focusable-element {\n\tdisplay: inherit;\n\talign-items: inherit;\n\tflex: 1;\n}\n\n.ui5-card-header.ui5-card-header--interactive:hover {\n\tcursor: pointer;\n\tbackground: var(--_ui5_card_header_hover_bg);\n}\n\n.ui5-card-header.ui5-card-header--active,\n.ui5-card-header.ui5-card-header--interactive:active {\n\tbackground: var(--_ui5_card_header_active_bg);\n}\n\n.ui5-card-header .ui5-card-header-text {\n\tflex: 1;\n\tpointer-events: none;\n}\n\n.ui5-card-header-first-line {\n\tdisplay: flex;\n\tflex-flow: row;\n\tjustify-content: space-between;\n}\n\n.ui5-card-header-status {\n\tflex: none;\n}\n\n.ui5-card-header .ui5-card-header-avatar {\n\theight: 3rem;\n\twidth: 3rem;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin-inline-end: .75rem;\n\tpointer-events: none;\n\talign-self: flex-start;\n}\n\n::slotted([ui5-icon]) {\n\twidth: 1.5rem;\n\theight: 1.5rem;\n\tcolor: var(--sapTile_IconColor);\n}\n\n::slotted(img[slot=\"avatar\"]) {\n\twidth: 100%;\n\theight: 100%;\n\tborder-radius: 50%;\n}\n\n.ui5-card-header .ui5-card-header-status {\n\tdisplay: inline-block;\n\tfont-family: \"72override\", var(--sapFontFamily);\n\tfont-size: var(--sapFontSmallSize);\n\tcolor: var(--sapTile_TextColor);\n\ttext-align: left;\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n\twhite-space: nowrap;\n\tvertical-align: middle;\n\tmargin-inline-start: 1rem;\n\tmargin-block-start: 0.125rem;\n}\n\n.ui5-card-header .ui5-card-header-text .ui5-card-header-title {\n\tfont-family: var(--_ui5_card_header_title_font_family);\n\tfont-size: var(--_ui5_card_header_title_font_size);\n\tfont-weight: var(--_ui5_card_header_title_font_weight);\n\tcolor: var(--sapTile_TitleTextColor);\n\tmax-height: 3.5rem;\n\talign-self: flex-end;\n}\n\n.ui5-card-header .ui5-card-header-text .ui5-card-header-subtitle {\n\tfont-family: \"72override\", var(--sapFontFamily);\n\tfont-size: var(--sapFontSize);\n\tfont-weight: normal;\n\tcolor: var(--sapTile_TextColor);\n\tmargin-top: var(--_ui5_card_header_subtitle_margin_top);\n\tmax-height: 2.1rem;\n}\n\n.ui5-card-header .ui5-card-header-text .ui5-card-header-title,\n.ui5-card-header .ui5-card-header-text .ui5-card-header-subtitle {\n\ttext-align: start;\n\ttext-overflow: ellipsis;\n\twhite-space: normal;\n\tword-wrap: break-word;\n\toverflow: hidden;\n\t-webkit-line-clamp: 2;\n\t-webkit-box-orient: vertical;\n\tdisplay: -webkit-box;\n\tmax-width: 100%;\n}\n\n.ui5-card-header .ui5-card-header-text .ui5-card-header-title {\n\t-webkit-line-clamp: 3;\n}\n\n.ui5-card-header-action {\n\tdisplay: flex;\n\tpadding-inline-start: 1rem;\n\talign-self: flex-start;\n}"
  };
  var _default = styleData;
  _exports.default = _default;
});