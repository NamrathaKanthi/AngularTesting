'use strict';

describe('Controller: homeTestCtlr', function () {
  // load the controller's module
  beforeEach(module('polarisLogin'));
  beforeEach(module('ui.router'));
  var ctrl, scope, $state, ngDialogInstance, location,window,event;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$state_,$window) {
    scope = $rootScope.$new();
    $state = _$state_;
    window = $window;
    ngDialogInstance = {
      open: jasmine.createSpy('ngDialogInstance.open'),
      dismiss: jasmine.createSpy('modalInstance.dismiss')
    };
    event = {
      key : "Escape"
    }
    spyOn($state, 'go').and.callFake(function () {
      return true;
    });
    window.onbeforeunload = jasmine.createSpy();
    ctrl = $controller('homeController', {
      $scope: scope,
      $state: $state,
      _ngDialog_: ngDialogInstance,
      $window:window
    });
  }));
  it('homeController should be defined', function () {
    expect(ctrl).toBeDefined();
  });
  describe('Test the functions for the definition', function () {
    it('fnGuestSignIn should be defiend', function () {
      expect(scope.fnGuestSignIn).toBeDefined();
    });
    it('fnCarouselEnter should be defiend', function () {
      expect(scope.fnCarouselEnter).toBeDefined();
    });
    it('fnGetUserMessageOnLoad  should be defiend', function () {
      expect(scope.fnGetUserMessageOnLoad).toBeDefined();
    });
    it('isFullScreen   should be defiend', function () {
      expect(scope.isFullScreen).toBeDefined();
    });
    it('openTerm should be defiend', function () {
      expect(scope.openTerm).toBeDefined();
    });
    it('openPrivacy should be defiend', function () {
      expect(scope.openPrivacy).toBeDefined();
    });
  });
  xdescribe('Test the functionalitites of fnGuestSignIn', function () {
    //here index is generated randomly
    it('fnGuestSignIn should redirect to a location', function () {
      location = {
        href: "http://www.website.com?varName=foohttps://polaris.dev.deloitteinnovation.space/app.html?cid=polaris"
      };
      scope.fnGuestSignIn();
      expect(window.location).not.toBeNull();
    });
  });
  describe('Test the functionalitites of fnGetUserMessageOnLoad ', function () {
    //here index is generated randomly
    it('fnGetUserMessageOnLoad should set value for title ', function () {
      scope.fnGetUserMessageOnLoad();
      expect(scope.title).not.toBeNull();
    });
  });

  describe('Test the functionalitites of isFullScreen  ', function () {
    it('isFullScreen  should return true', function () {
      expect(scope.isFullScreen()).toBe(false);
    });
  });

  describe('Test the functionalitites of closeVideo  ', function () {
    it('closeVideo  should return true', function () {
      expect(scope.closeVideo(event)).not.toBe(false);
    });
  });

  describe('Test the functionalitites of fnCarouselLeave  ', function () {
    it('fnCarouselLeave  should return true', function () {
      expect(scope.fnCarouselLeave()).not.toBe(false);
    });
  });

  describe('Test the functionalitites of fnCarouselEnter  ', function () {
    it('fnCarouselEnter  should return true', function () {
      expect(scope.fnCarouselEnter()).not.toBe(false);
    });
  });

   

  describe('Test the functionality of fnOpenVideo   ', function () {
    it('fnOpenVideo   should open a modal pop up', function () {
      ngDialogInstance.open();
      scope.fnOpenVideo();
      expect(scope.isVideoOn).toEqual(true);
      expect(ngDialogInstance.open).toHaveBeenCalled();
    });
  });
  describe('Test the functionality of openCopyright    ', function () {
    it('openCopyright should open a modal pop up', function () {
      ngDialogInstance.open();
      scope.openCopyright();
      expect(ngDialogInstance.open).toHaveBeenCalled();
    });
  });
  describe('Test the functionality of openTerm', function () {
    it('openTerm should open a modal pop up', function () {
      ngDialogInstance.open();
      scope.openTerm();
      expect(ngDialogInstance.open).toHaveBeenCalled();
    });
  });
  describe('Test the functionality of openPrivacy', function () {
    it('openPrivacy should open a modal pop up', function () {
      ngDialogInstance.open();
      scope.openPrivacy();
      expect(ngDialogInstance.open).toHaveBeenCalled();
    });
  });
});
