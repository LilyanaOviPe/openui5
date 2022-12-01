/*global QUnit */
sap.ui.define([
	"sap/ui/events/F6Navigation",
	"sap/ui/core/Core",
	"sap/ui/core/mvc/XMLView",
	"sap/ui/events/KeyCodes",
	"sap/ui/qunit/QUnitUtils",
	"sap/ui/qunit/utils/createAndAppendDiv"
], function(F6Navigation, Core, XMLView, KeyCodes, QUnitUtils, createAndAppendDiv) {
	"use strict";

	// Test setup

	/* Custom WebComponent definition */
	var TestComponent = function() {
		var oComponentInstance = Reflect.construct(HTMLElement, [], TestComponent);

		if (!oComponentInstance.shadowRoot) {
			oComponentInstance.attachShadow({
				mode: 'open',
				delegatesFocus: true
			});
		}
		return oComponentInstance;
	};

	TestComponent.prototype = Object.create(HTMLElement.prototype);

	TestComponent.prototype.connectedCallback = function () {
		this.render();
	};

	TestComponent.prototype.attributeChangedCallback = function () {
		this.render();
	};

	TestComponent.prototype.render = function () {
		this.shadowRoot.innerHTML = '<slot name="FirstSlot" data-sap-ui-fastnavgroup="true"></slot>' +
		'<slot name="SecondSlot" data-sap-ui-fastnavgroup="true"></slot>';
	};

	window.customElements.define("test-component", TestComponent);

	/* Create DOM node for test */
	createAndAppendDiv("content");

	/* Helper functions and variables */
	var bForward, oView;
	var fnHandleF6GroupNavigation = F6Navigation.handleF6GroupNavigation;

	function triggerTestEvent(sTarget, bForward) {
		QUnitUtils.triggerKeydown(sTarget, KeyCodes.F6, !bForward);
	}

	function getActiveElement(oRoot) {
		if (oRoot.activeElement && oRoot.activeElement.shadowRoot) {
			return getActiveElement(oRoot.activeElement.shadowRoot);
		}

		return oRoot.activeElement;
	}

	function assertElementAttributes(oElement, oExpectedAttributes) {
		var aElementAttributes, aExpectedAttributes;
		var bAttributeMissing = false;
		var compareElementAttribute = function (oExpectedAttributeValue) {
			return aElementAttributes.indexOf(oExpectedAttributeValue) === -1;
		};
		for (var sAttributeKey in oExpectedAttributes) {
			if (oExpectedAttributes.hasOwnProperty(sAttributeKey)) {
				aElementAttributes = oElement.getAttribute(sAttributeKey) && oElement.getAttribute(sAttributeKey).trim().split(" ") || [];
				if (sAttributeKey === "id") {
					// In case of ID use either the own element ID if available or use the ID of the owning Web Component
					aElementAttributes.push(oElement.getRootNode().host && oElement.getRootNode().host.getAttribute(sAttributeKey));
				}
				aExpectedAttributes = oExpectedAttributes[sAttributeKey].trim().split(" ");
				bAttributeMissing = aExpectedAttributes.some(compareElementAttribute);
				if (bAttributeMissing) {
					break;
				}
			}
		}
		return !bAttributeMissing;
	}

	QUnit.module("Fast Navigation with Web Components", {
		before: function () {
			// Enhance the Navigation Handler to use the test scope only (not the QUnit related DOM) and the target of the event instead of the activeElement
			// to be more focus independent (-> More test stability)
			F6Navigation.handleF6GroupNavigation = function(oEvent, oSettings) {
				oSettings = oSettings ? oSettings : {};
				if (!oSettings.scope) {
					oSettings.scope = document.getElementById("content");
				}
				fnHandleF6GroupNavigation(oEvent, oSettings);
			};
			oView = XMLView.create({
				id: "xmlView",
				viewName: "sap.ui.fastnav.view.FastNavigation"
			}).then(function (oView) {
				oView.placeAt("content");
				Core.applyChanges();
				return oView;
			});
			return oView;
		},
		after: function () {
			F6Navigation.handleF6GroupNavigation = fnHandleF6GroupNavigation;
		}
	});

	function testFastNavigation(aExpectedElements, bForward) {
		QUnit.test("F6Navigation with Web Components (bForward: " + !!bForward + ")", function(assert) {
			var executeTest = function(oAcc, oExpectedElement) {
				var oActiveElement;
				return oAcc.then(function () {
					oActiveElement = oActiveElement || document.activeElement;
					// Need the activeElement on document level (not within shadowRoot)
					// in order to also trigger control events (sapskipforward/sapskipback)
					triggerTestEvent(document.activeElement, bForward);

					return Promise.resolve().then(function () {
						var sPreviousId = oActiveElement.getRootNode().host ? oActiveElement.getRootNode().host.id : oActiveElement.id;
						oActiveElement = getActiveElement(document);
						var sCurrentId = oActiveElement.getRootNode().host ? oActiveElement.getRootNode().host.id : oActiveElement.id;
						assert.ok(assertElementAttributes(oActiveElement, oExpectedElement), "F6Nav from '" + sPreviousId + "' to '" + sCurrentId + "'");
					});
				});
			};
			return oView.then(function (oView) {
				// Set the focus to the last element in the list
				oView.byId(aExpectedElements[aExpectedElements.length - 1].id).focus();
				return aExpectedElements.reduce(executeTest, Promise.resolve());
			});
		});
	}

	do {
		// Define array with expected elements in the order
		// they will be focused on F6 forward navigation
		var aExpectedElements = [{
			"id": "xmlView--button1",
			"class": "ui5-button-root"
		},
		{
			"id": "xmlView--Panel1",
			"class": "ui5-panel-header"
		},
		{
			"id": "xmlView--ListItem1",
			"class": " ui5-li-root ui5-li--focusable ui5-custom-li-root "
		},
		{
			"id": "xmlView--Div1"
		},
		{
			"id": "xmlView--Div2"
		},
		{
			"id": "xmlView--Input1",
			"class": "ui5-input-inner"
		},
		{
			"id": "xmlView--Input3",
			"class": "ui5-input-inner"
		}];

		if (!bForward) {
			// In case of F6 back navigation sort the array
			// in opposite order
			aExpectedElements.sort(function() { return -1; });
		}

		testFastNavigation(aExpectedElements, bForward);
		bForward = !bForward;
	} while (bForward);

	QUnit.start();

});
