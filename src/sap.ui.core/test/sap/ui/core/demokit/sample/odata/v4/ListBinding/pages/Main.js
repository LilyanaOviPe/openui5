/*!
 * ${copyright}
 */
sap.ui.define([
	"sap/ui/core/sample/common/Helper",
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press",
	"sap/ui/test/matchers/Properties"
], function (Helper, Opa5, Press, Properties) {
	"use strict";
	var sViewName = "sap.ui.core.sample.odata.v4.ListBinding.Main";

	Opa5.createPageObjects({
		onTheMainPage : {
			actions : {
				refreshEmployees : function () {
					return this.waitFor({
						actions : new Press(),
						controlType : "sap.m.Button",
						id : "refreshEmployees",
						viewName : sViewName
					});
				},
				selectFirstEmployee : function () {
					return this.waitFor({
						controlType : "sap.m.Text",
						id : /--Employee_ID/,
						success : function (aControls) {
							aControls[0].$().tap();
							Opa5.assert.ok(true, "First Employee selected");
						},
						viewName : sViewName
					});
				}
			},
			assertions : {
				checkEmployeeEquipmentInRow : function (iRow, sEquipmentName) {
					var that = this;
					return that.waitFor({
						controlType : "sap.m.Input",
						id : /employeeEquipment/,
						matchers : function (oControl) {
							return oControl.getBindingContext().getIndex() === iRow;
						},
						success : function (aControls) {
							var oInput = aControls[0];
							Opa5.assert.strictEqual(oInput.getValue(), sEquipmentName, "Equipment "
							+ "name of row " + iRow + " as expected \"" + sEquipmentName + "\"");
						},
						viewName : sViewName
					});
				},
				checkEmployeeNameInRow : function (iRow, sEmployeeName) {
					return this.waitFor({
						controlType : "sap.m.Input",
						id : /employeeName/,
						matchers : function (oControl) {
							return oControl.getBindingContext().getIndex() === iRow;
						},
						success : function (aControls) {
							var oInput = aControls[0];
							Opa5.assert.strictEqual(oInput.getValue(), sEmployeeName, "Name of row "
								+ iRow + " as expected \"" + sEmployeeName + "\"");
						},
						viewName : sViewName
					});
				},
				checkProductImageInRow : function (iRow, sUrl) {
					return this.waitFor({
						controlType : "sap.m.Image",
						matchers : function (oControl) {
							return oControl.getBindingContext().getIndex() === iRow;
						},
						success : function (aControls) {
							var oImage = aControls[0];

							Opa5.assert.strictEqual(oImage.getSrc(),
								sUrl[0] === "/"
								? sUrl
								: oImage.getBinding("src").getModel().sServiceUrl + sUrl,
								"URL of equipment image in row " + iRow + " as expected \"" + sUrl
								+ "\"");
						},
						viewName : sViewName,
						visible : false // only visible with realOData=true
					});
				},
				checkTeamIDInForm : function (sTeamID) {
					return this.waitFor({
						controlType : "sap.m.Text",
						id : "Team_Id",
						matchers : new Properties({text : sTeamID}),
						success : function (oText) {
							Opa5.assert.ok(true, "Team ID " + sTeamID + " found");
						},
						viewName : sViewName
					});
				}
			}
		}
	});
});