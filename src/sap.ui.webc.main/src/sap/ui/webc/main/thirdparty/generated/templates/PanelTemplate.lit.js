sap.ui.define(['sap/ui/webc/common/thirdparty/base/renderer/LitRenderer'], function (litRender) { 'use strict';

	const block0 = (context, tags, suffix) => litRender.html`<div class="ui5-panel-root" role="${litRender.ifDefined(context.accRole)}" aria-label="${litRender.ifDefined(context.effectiveAccessibleName)}" dir="${litRender.ifDefined(context.effectiveDir)}"><!-- header: either header or h1 with header text --><div @click="${context._headerClick}" @keydown="${context._headerKeyDown}" @keyup="${context._headerKeyUp}" class="ui5-panel-header" tabindex="${litRender.ifDefined(context.headerTabIndex)}" role="${litRender.ifDefined(context.accInfo.role)}" aria-expanded="${litRender.ifDefined(context.accInfo.ariaExpanded)}" aria-controls="${litRender.ifDefined(context.accInfo.ariaControls)}" aria-labelledby="${litRender.ifDefined(context.accInfo.ariaLabelledby)}">${ !context.fixed ? block1(context, tags, suffix) : undefined }${ context._hasHeader ? block4() : block5(context) }</div><!-- content area --><div class="ui5-panel-content" id="${litRender.ifDefined(context._id)}-content" tabindex="-1" style="${litRender.styleMap(context.styles.content)}" part="content"><slot></slot></div></div>`;
	const block1 = (context, tags, suffix) => litRender.html`<div class="ui5-panel-header-button-root">${ context._hasHeader ? block2(context, tags, suffix) : block3(context, tags, suffix) }</div>`;
	const block2 = (context, tags, suffix) => litRender.html`<${litRender.scopeTag("ui5-button", tags, suffix)} design="Transparent" class="ui5-panel-header-button ${litRender.classMap(context.classes.headerBtn)}" icon="slim-arrow-right" @click="${context._toggleButtonClick}" .accessibilityAttributes=${litRender.ifDefined(context.accInfo.button.accessibilityAttributes)} title="${litRender.ifDefined(context.accInfo.button.title)}" accessible-name="${litRender.ifDefined(context.accInfo.button.ariaLabelButton)}"></${litRender.scopeTag("ui5-button", tags, suffix)}>`;
	const block3 = (context, tags, suffix) => litRender.html`<${litRender.scopeTag("ui5-icon", tags, suffix)} class="ui5-panel-header-button ui5-panel-header-icon ${litRender.classMap(context.classes.headerBtn)}" name="slim-arrow-right"></${litRender.scopeTag("ui5-icon", tags, suffix)}>`;
	const block4 = (context, tags, suffix) => litRender.html`<slot name="header"></slot>`;
	const block5 = (context, tags, suffix) => litRender.html`<div id="${litRender.ifDefined(context._id)}-header-title" role="heading" aria-level="${litRender.ifDefined(context.headerAriaLevel)}" class="ui5-panel-header-title">${litRender.ifDefined(context.headerText)}</div>`;

	return block0;

});
