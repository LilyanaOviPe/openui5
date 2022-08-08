sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"], function (_exports, _LitRenderer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* eslint no-unused-vars: 0 */
  const block0 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<div class="ui5-select-root ui5-input-focusable-element" id="${(0, _LitRenderer.ifDefined)(context._id)}-select" @click="${context._onclick}">${context.selectedOptionIcon ? block1(context, tags, suffix) : undefined}<div class="ui5-select-label-root" data-sap-focus-ref tabindex="${(0, _LitRenderer.ifDefined)(context.tabIndex)}" role="combobox" aria-haspopup="listbox" aria-label="${(0, _LitRenderer.ifDefined)(context.ariaLabelText)}" aria-describedby="${(0, _LitRenderer.ifDefined)(context.valueStateTextId)}" aria-disabled="${(0, _LitRenderer.ifDefined)(context.isDisabled)}" aria-required="${(0, _LitRenderer.ifDefined)(context.required)}" aria-expanded="${(0, _LitRenderer.ifDefined)(context._isPickerOpen)}" aria-roledescription="${(0, _LitRenderer.ifDefined)(context._ariaRoleDescription)}" @keydown="${context._onkeydown}" @keypress="${context._handleKeyboardNavigation}" @keyup="${context._onkeyup}" @focusin="${context._onfocusin}" @focusout="${context._onfocusout}">${(0, _LitRenderer.ifDefined)(context._text)}</div><${(0, _LitRenderer.scopeTag)("ui5-icon", tags, suffix)} name="slim-arrow-down" input-icon ?pressed="${context._iconPressed}"></${(0, _LitRenderer.scopeTag)("ui5-icon", tags, suffix)}>${context.hasValueState ? block2(context, tags, suffix) : undefined}<slot name="formSupport"></slot></div>` : (0, _LitRenderer.html)`<div class="ui5-select-root ui5-input-focusable-element" id="${(0, _LitRenderer.ifDefined)(context._id)}-select" @click="${context._onclick}">${context.selectedOptionIcon ? block1(context, tags, suffix) : undefined}<div class="ui5-select-label-root" data-sap-focus-ref tabindex="${(0, _LitRenderer.ifDefined)(context.tabIndex)}" role="combobox" aria-haspopup="listbox" aria-label="${(0, _LitRenderer.ifDefined)(context.ariaLabelText)}" aria-describedby="${(0, _LitRenderer.ifDefined)(context.valueStateTextId)}" aria-disabled="${(0, _LitRenderer.ifDefined)(context.isDisabled)}" aria-required="${(0, _LitRenderer.ifDefined)(context.required)}" aria-expanded="${(0, _LitRenderer.ifDefined)(context._isPickerOpen)}" aria-roledescription="${(0, _LitRenderer.ifDefined)(context._ariaRoleDescription)}" @keydown="${context._onkeydown}" @keypress="${context._handleKeyboardNavigation}" @keyup="${context._onkeyup}" @focusin="${context._onfocusin}" @focusout="${context._onfocusout}">${(0, _LitRenderer.ifDefined)(context._text)}</div><ui5-icon name="slim-arrow-down" input-icon ?pressed="${context._iconPressed}"></ui5-icon>${context.hasValueState ? block2(context, tags, suffix) : undefined}<slot name="formSupport"></slot></div>`;

  const block1 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<${(0, _LitRenderer.scopeTag)("ui5-icon", tags, suffix)} aria-hidden="true" class="ui5-select-option-icon" name="${(0, _LitRenderer.ifDefined)(context.selectedOptionIcon)}"></${(0, _LitRenderer.scopeTag)("ui5-icon", tags, suffix)}>` : (0, _LitRenderer.html)`<ui5-icon aria-hidden="true" class="ui5-select-option-icon" name="${(0, _LitRenderer.ifDefined)(context.selectedOptionIcon)}"></ui5-icon>`;

  const block2 = (context, tags, suffix) => (0, _LitRenderer.html)`<span id="${(0, _LitRenderer.ifDefined)(context._id)}-valueStateDesc" class="ui5-hidden-text">${(0, _LitRenderer.ifDefined)(context.valueStateText)}</span>`;

  var _default = block0;
  _exports.default = _default;
});