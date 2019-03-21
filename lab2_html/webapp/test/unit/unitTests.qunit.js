/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ro/unitbv/cc/lab2_html/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});