var config = window.__karma__.config,
	ui5config = (config && config.openui5) || {},
	mockserverConfig = ui5config.mockserver || {};

//workaround for crossroads/mockserver issue
(function() {
	var original;
	if (typeof module !== "undefined") {
	    original = module;
	    module = undefined;
	}
	jQuery.sap.require("sap.ui.core.util.MockServer");
	if (typeof original !== "undefined") {
	    module = original;
	    original = undefined;
	}
})();

mockserverConfig.config = mockserverConfig.config ||{};

sap.ui.core.util.MockServer.config(mockserverConfig.config);

var oMockServer = new sap.ui.core.util.MockServer({
	rootUri: mockserverConfig.rootUri
});
oMockServer.simulate(mockserverConfig.metadataURL, mockserverConfig.mockdataSettings);
oMockServer.start();
