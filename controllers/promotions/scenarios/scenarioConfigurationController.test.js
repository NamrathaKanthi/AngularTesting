'use strict';

describe('Controller: scenarioConfigurationController', function () {
    // load the controller's module
    beforeEach(module('polarisApp'));
    var ctrl, scope, configList;
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('scenarioConfigurationController', {
            $scope: scope
        });
        configList = [{
            isCollapsed: true,
            name: " Y-Axis",
            selected: "Sales",
            type: "list",
            AxisValues: [{ title: 'Sales' }]
        }];
    }));
    it('scenarioConfigurationController should be defined', function () {
        expect(ctrl).toBeDefined();
    });

    it('scenarioConfigurationController configList should be defined', function () {
        expect(ctrl.configList).toBeDefined();
    });

});
