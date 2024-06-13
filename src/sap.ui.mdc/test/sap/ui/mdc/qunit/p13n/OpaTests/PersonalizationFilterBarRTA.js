sap.ui.define([
	'sap/ui/test/Opa5',
	'sap/ui/test/opaQunit',
	'test-resources/sap/ui/mdc/qunit/p13n/OpaTests/utility/Arrangement',
	'test-resources/sap/ui/mdc/qunit/p13n/OpaTests/utility/Util',
	'test-resources/sap/ui/mdc/qunit/p13n/OpaTests/utility/Action',
	'test-resources/sap/ui/mdc/qunit/p13n/OpaTests/utility/Assertion',
	'sap/ui/Device'
], function (Opa5, opaTest, Arrangement, TestUtil, Action, Assertion, Device) {
	'use strict';

	if (window.blanket) {
		//window.blanket.options("sap-ui-cover-only", "sap/ui/mdc");
		window.blanket.options("sap-ui-cover-never", "sap/viz");
	}

	Opa5.extendConfig({
		arrangements: new Arrangement(),
		actions: new Action(),
		assertions: new Assertion(),
		viewNamespace: "view.",
		autoWait: true
	});


	// ----------------------------------------------------------------
	// initialize application
	// ----------------------------------------------------------------
	opaTest("When I start the 'appUnderTestTable' app, the table should appear and contain some columns", function (Given, When, Then) {
		//insert application
		Given.iStartMyAppInAFrame('test-resources/sap/ui/mdc/qunit/p13n/OpaTests/appUnderTestTable/TableOpaApp.html');
		Given.enableAndDeleteLrepLocalStorage();
		When.iLookAtTheScreen();

		//check icons
		Then.iShouldSeeButtonWithIcon(Arrangement.P13nDialog.Settings.Icon);
		Then.iShouldSeeButtonWithIcon(Arrangement.P13nDialog.Sort.Icon);

		Then.theVariantManagementIsDirty(false);
	});

	// ----------------------------------------------------------------
	// start and enable RTA
	// ----------------------------------------------------------------
	opaTest("When I enable key user adaptation, the App should change into 'RTA' mode", function(Given, When, Then){
		When.iPressButtonWithText("Start RTA");
		Then.iShouldSeeRTABar();
	});

	// ----------------------------------------------------------------
	// open RTA settings
	// ----------------------------------------------------------------
	opaTest("When I press on the FilterBar, the settings context menu opens", function (Given, When, Then) {
		When.iClickOnOverlayForControl("sap.ui.mdc.FilterBar");
		Then.iShouldSeeRTAPopoverWithActions(2);
	});

	// ----------------------------------------------------------------
	// open Personalization dialog
	// ----------------------------------------------------------------
	opaTest("When I press on RTA settings icon the personalization dialog appears", function (Given, When, Then) {
		When.iClickOnRtaSetting("sap-icon://key-user-settings");
		When.iChangeAdaptFiltersView("group");
		Then.iShouldSeeP13nFilterItem("cityOfOrigin_city", 2);
		Then.iShouldSeeP13nFilterItem("Country", 3);
	});

	// ----------------------------------------------------------------
	// open Personalization dialog
	// ----------------------------------------------------------------
	opaTest("When I select rows and change values in the personalization dialog, the changes are reflected after confirmation", function (Given, When, Then) {
		When.iSelectColumn("Country", null, undefined, true, true);
		When.iSelectColumn("cityOfOrigin_city",null, undefined, true, true);
		When.iEnterTextInFilterDialog("Founding Year", "1989");
		When.iPressButtonWithText("OK");
		Then.thePersonalizationDialogShouldBeClosed();
		Then.iShouldSeeVisibleFiltersInOrderInFilterBar(["Name", "Founding Year", "artistUUID", "Breakout Year", "cityOfOrigin_city", "Country"]);
		Then.iShouldSeeConditionValuesInFilterBar(["1989"], "foundingYear");
		When.iExitRtaMode();
		Then.iTeardownMyAppFrame();
	});
});
