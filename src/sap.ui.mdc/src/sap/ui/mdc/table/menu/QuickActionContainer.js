/*!
 * ${copyright}
 */
sap.ui.define([
	"../TableSettings",
	"../ResponsiveTableType",
	"sap/m/table/columnmenu/QuickActionContainer",
	"sap/m/table/columnmenu/QuickAction",
	"sap/m/table/columnmenu/QuickSort",
	"sap/m/table/columnmenu/QuickSortItem",
	"sap/m/table/columnmenu/QuickGroup",
	"sap/m/table/columnmenu/QuickGroupItem",
	"sap/m/table/columnmenu/QuickTotal",
	"sap/m/table/columnmenu/QuickTotalItem",
	"sap/m/Button",
	"sap/ui/core/Core",
	"sap/ui/core/library"
], function(
	TableSettings,
	ResponsiveTableType,
	QuickActionContainerBase,
	QuickAction,
	QuickSort,
	QuickSortItem,
	QuickGroup,
	QuickGroupItem,
	QuickTotal,
	QuickTotalItem,
	Button,
	Core,
	CoreLibrary
) {
	"use strict";

	var QuickActionContainer = QuickActionContainerBase.extend("sap.ui.mdc.table.menu.QuickActionContainer", {
		metadata: {
			library: "sap.ui.mdc",
			associations: {
				table: {type: "sap.ui.mdc.Table"},
				column: {type: "sap.ui.mdc.table.Column"}
			}
		}
	});

	QuickActionContainer.prototype.initializeQuickActions = function() {
		var oTable = this.getTable();
		var oColumn = this.getColumn();
		var oPropertyHelper = oTable.getPropertyHelper();
		var pCreateContent = Promise.resolve();

		this.destroyQuickActions(); // TODO: More efficient update would be good

		if (oTable.isSortingEnabled()) {
			var aSortableProperties = oPropertyHelper.getProperty(oColumn.getDataProperty()).getSortableProperties();
			var aSortedProperties = oTable._getSortedProperties();

			if (aSortableProperties.length > 0) {
				this.addQuickAction(new QuickSort({
					items: aSortableProperties.map(function(oProperty) {
						var sSortOrder = CoreLibrary.SortOrder.None;
						var mSortCondition = aSortedProperties.find(function(oSortedProperty) {
							return oSortedProperty.name === oProperty.name;
						});

						if (mSortCondition) {
							sSortOrder = mSortCondition.descending ? CoreLibrary.SortOrder.Descending : CoreLibrary.SortOrder.Ascending;
						}
						return new QuickSortItem({
							key: oProperty.name,
							label: oProperty.label,
							sortOrder: sSortOrder
						});
					}),
					change: function(oEvent) {
						var oItem = oEvent.getParameter("item");
						TableSettings.createSort(oTable, oItem.getKey(), oItem.getSortOrder(), true);
					}
				}));
			}
		}

		if (oTable.isGroupingEnabled()) {
			var aGroupableProperties = oPropertyHelper.getProperty(oColumn.getDataProperty()).getGroupableProperties();
			var aGroupedProperties = oTable._getGroupedProperties();

			if (aGroupableProperties.length > 0) {
				this.addQuickAction(new QuickGroup({
					items: aGroupableProperties.map(function(oProperty) {
						var bGrouped = aGroupedProperties.some(function(oGroupedProperty) {
							return oGroupedProperty.name === oProperty.name;
						});

						return new QuickGroupItem({
							key: oProperty.name,
							label: oProperty.label,
							grouped: bGrouped
						});
					}),
					change: function(oEvent) {
						var oItem = oEvent.getParameter("item");
						TableSettings.createGroup(oTable, oItem.getKey());
					}
				}));
			}
		}

		if (oTable.isAggregationEnabled()) {
			var aAggregatableProperties = oPropertyHelper.getProperty(oColumn.getDataProperty()).getAggregatableProperties();
			var oAggregatedProperty = oTable._getAggregatedProperties();

			if (aAggregatableProperties.length > 0) {
				this.addQuickAction(new QuickTotal({
					items: aAggregatableProperties.map(function(oProperty) {
						return new QuickTotalItem({
							key: oProperty.name,
							label: oProperty.label,
							totaled: oAggregatedProperty.hasOwnProperty(oProperty.name)
						});
					}),
					change: function(oEvent) {
						var oItem = oEvent.getParameter("item");
						TableSettings.createAggregation(oTable, oItem.getKey());
					}
				}));
			}
		}

		var bResizeButton = window.matchMedia("(hover:none)").matches && oTable._bMobileTable && oTable.getEnableColumnResize();
		if (bResizeButton) {
			var oColumnResize = ResponsiveTableType.startColumnResize(oTable._oTable, oTable._oTable.getColumns()[oTable.indexOfColumn(oColumn)], this.getMenu());
			this.addQuickAction(oColumnResize);
		}
		return pCreateContent;
	};

	QuickActionContainer.prototype.hasQuickActions = function() {
		return this.getEffectiveQuickActions().length > 0;
	};

	QuickActionContainer.prototype.getTable = function() {
		return Core.byId(this.getAssociation("table"));
	};

	QuickActionContainer.prototype.getColumn = function() {
		return Core.byId(this.getAssociation("column"));
	};

	return QuickActionContainer;
});