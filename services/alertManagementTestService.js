'use strict';

describe('Service: alertManagementTestService', function () {
  beforeEach(module('polarisApp'));
  var alertManagementService,
    isTrue,
    alertItems,
    filterPanelVisible,
    filterPanelOuterDiv;
  beforeEach(inject(function (_alertManagementService_) {
    alertManagementService = _alertManagementService_;
    isTrue = 'true';
    alertItems = '';
    filterPanelVisible = '';
    filterPanelOuterDiv = true;
  }));
  it('alertManagementService definition test', inject(function () {
    expect(alertManagementService).not.toBe(undefined);
  }));

  it('alertManagementService SetAlertVisibility test', inject(function () {
    alertManagementService.setAlertVisible(isTrue)
    expect(alertManagementService.getAlertVisible()).not.toBe(undefined);
  }));

  it('alertManagementService SetParentsAlerts test', inject(function () {
    alertManagementService.setParentAlerts(alertItems)
    expect(alertManagementService.getParentAlerts()).not.toBe(undefined);
  }));
  it('alertManagementService Alerts test', inject(function () {
    expect(alertManagementService.hideAlert()).not.toBe(null);
  }));
  it('alertManagementService Alerts test', inject(function () {
    expect(alertManagementService.showAlert()).not.toBe(null);
  }));
  it('alertManagementService Alerts test', inject(function () {
    expect(alertManagementService.showNotification()).not.toBe(null);
  }));

  it('alertManagementService Alerts test', inject(function () {
    expect(alertManagementService.hideNotification()).not.toBe(null);
  }));

  it('alertManagementService Alerts test', inject(function () {
    expect(alertManagementService.showFilterPanel(filterPanelVisible)).not.toBe(null);
  }));

  it('alertManagementService definition test', inject(function () {
    expect(alertManagementService.hideFilterPanel()).not.toBe(null);
  }));

  it('alertManagementService definition test', inject(function () {
    alertManagementService.hideFilterPanel()
    expect(alertManagementService.hideFilterPanel).toBeDefined();
  }));
});
