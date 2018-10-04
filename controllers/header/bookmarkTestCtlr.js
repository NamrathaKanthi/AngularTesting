'use strict';

describe('Controller: bookmarkTestCtlr', function () {
  // load the controller's module
  beforeEach(module('polarisApp'));
  var ctrl, scope;
  var store = {
    userInfo: {
      userDetails: {
        email: 'polarisdev@deloitte.com'
      }
    }
  };
  var _localStorage = {}, restAPIService, Constants, $q, state, chartNavigationService, bookMarkService, rootScope;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _restAPIService_, _$q_, _Constants_, _$state_, _chartNavigationService_, _bookMarkService_) {
    rootScope = $rootScope;
    scope = rootScope.$new();
    Constants = _Constants_;
    bookMarkService = _bookMarkService_;
    chartNavigationService = _chartNavigationService_;
    $q = _$q_;
    state = _$state_;
    restAPIService = _restAPIService_;
    _localStorage.userInfo = JSON.stringify(store['userInfo']);
    spyOn(state, 'go').and.callFake(function () {
      return true;
    });
    spyOn(chartNavigationService, 'getHashValueByMenuName').and.callFake(function () {
      return "testChart";
    });
    spyOn(bookMarkService, 'fnDeleteBookmark').and.callFake(function () {
      return true;
    });
    ctrl = $controller('bookmarkController', {
      $scope: scope,
      $rootScope: rootScope,
      $localStorage: _localStorage,
      restAPIService: restAPIService,
      Constants: Constants,
      $state: state,
      chartNavigationService: chartNavigationService,
      bookMarkService: bookMarkService
    });
    scope.bookmark = {
      name: "polaris",
      bookmarkId: 12,
      chartName: "chartpolaris",

    };
    scope.isPrivate = {
      checked: true
    }
  }));
  it('bookmarkController should be defined', function () {
    expect(ctrl).toBeDefined();
  });

  describe('Test the function definition', function () {
    it('bookPublic should be defined', function () {
      expect(scope.bookPublic).toBeDefined();
    });
    it('bookPrivate should be defined', function () {
      expect(scope.bookPrivate).toBeDefined();
    });
    it('fnShowBookmarkModal should be defined', function () {
      expect(scope.fnShowBookmarkModal).toBeDefined();
    });
    it('copyUrl should be defined', function () {
      expect(scope.copyUrl).toBeDefined();
    });
    it('fnBookMarkPageFilters should be defined', function () {
      scope.fnBookMarkPageFilters();
      expect(scope.fnBookMarkPageFilters).toBeDefined();
    });
    it('fnGetBookmarksAvailable should be defined', function () {
      scope.fnGetBookmarksAvailable();
      expect(scope.fnGetBookmarksAvailable).toBeDefined();
    });
    it('fnGetPreview should be defined', function () {
      expect(scope.fnGetPreview).toBeDefined();
    });
    it('triggerDeleteModal should be defined', function () {
      expect(scope.triggerDeleteModal).toBeDefined();
    });
    it('deleteBookmark should be defined', function () {
      scope.deleteBookmark();
      expect(scope.deleteBookmark).toBeDefined();
    });
    it('fnRemoveAllBookmarks should be defined', function () {
      expect(scope.fnRemoveAllBookmarks).toBeDefined();
    })
  });

  describe('Test the functionalities of bookPublic', function () {
    it('bookPublic should toggle "isPrivate.checked" to false and "isPublic.checked" to true', function () {
      scope.isPrivate = { checked: true };
      scope.isPublic = { checked: false };
      scope.bookPublic();
      expect(scope.isPrivate.checked).toEqual(false);
      expect(scope.isPublic.checked).toEqual(true);
    })
  });
  describe('Test the functionalities of bookPrivate', function () {
    it('bookPrivate should toggle "isPrivate.checked" to true and "isPublic.checked" to false', function () {
      scope.isPrivate = { checked: false };
      scope.isPublic = { checked: true };
      scope.bookPrivate();
      expect(scope.isPrivate.checked).toEqual(true);
      expect(scope.isPublic.checked).toEqual(false);
    })
  });

  describe('Test the functionalities of fnShowBookmarkModal', function () {
    it('fnShowBookmarkModal should assign values of input parameters', function () {
      scope.bookmark = {
        bookmarkId: '',
        url: 'not empty',
        name: '',
        chartName: '',
        privateFlag: '',
        state: '',
        userId: '',
        isUrlBookmarked: true,
        isToBefilled: true
      };
      var book = {
        bookmarksId: 'TestId',
        linkName: 'TestlinkName',
        chartName: 'TestchartName',
        privateFlag: true,
        state: 'TestSate',
        userId: 'TestuserId'
      }, index = 'TestIndex';
      scope.fnShowBookmarkModal(book, index);
      expect(scope.index).toEqual('TestIndex');
      expect(scope.book).toEqual(book);
      expect(scope.bookmark.bookmarkId).toEqual('TestId');
      expect(scope.bookmark.url).toEqual('');
      expect(scope.bookmark.name).toEqual('TestlinkName');
      expect(scope.bookmark.chartName).toEqual('TestchartName');
      expect(scope.bookmark.privateFlag).toEqual(true);
      expect(scope.bookmark.state).toEqual('TestSate');
      expect(scope.bookmark.userId).toEqual('TestuserId');
      expect(scope.isPrivate.checked).toEqual(true);
      expect(scope.isPublic.checked).toEqual(false);
      expect(scope.bookmark.isUrlBookmarked).toEqual(false);
      expect(scope.isSaveEnable).toEqual(true);
      expect(scope.disableSaveBtn).toEqual(false);
      expect(scope.bookmark.isToBefilled).toEqual(false);
    })
  });

  describe('Test the functionalities of fnGetPreview', function () {
    it('expect the return value will be images/Chart_001.png for Market Share Spike', function () {
      var alert = {
        metric: 'Market Share Spike'
      };
      expect(scope.fnGetPreview(alert.metric)).toEqual('images/Chart_001.png');
    });
    it('expect the return value will be images/Chart_003.png for Negative ROI Event', function () {
      var alert = {
        metric: 'Negative ROI Event'
      };
      expect(scope.fnGetPreview(alert.metric)).toEqual('images/Chart_003.png');
    });
    it('expect the return value will be images/Chart_002.png for Net Margin Spike', function () {
      var alert = {
        metric: 'Net Margin Spike'
      };
      expect(scope.fnGetPreview(alert.metric)).toEqual('images/Chart_002.png');
    });
    it('expect the return value will be images/planned_spend_actual.png for Promotion Planned Spend Above Actual Spend', function () {
      var alert = {
        metric: 'Promotion Planned Spend Above Actual Spend'
      };
      expect(scope.fnGetPreview(alert.metric)).toEqual('images/planned_spend_actual.png');
    });
    it('expect the return value will be images/revenue_spike.png for Gross Revenue Spike', function () {
      var alert = {
        metric: 'Gross Revenue Spike'
      };
      expect(scope.fnGetPreview(alert.metric)).toEqual('images/revenue_spike.png');
    });
    it('expect the return value will be images/Chart_001.png for any other value (default case)', function () {
      var alert = {
        metric: 'Gross'
      };
      expect(scope.fnGetPreview(alert.metric)).toEqual('images/Chart_001.png');
    });
  });

  xdescribe('Test the functionality of fnGetBookmarksAvailable', function () {
    it('fnGetBookmarksAvailable should call invokeservice', function () {
      Constants.bookmarkService = "domain/";
      var url = "domain/?privateFlag=true";
      var data = { data: ['Test Data'] };
      scope.bookmarkdata = [];
      spyOn(restAPIService, 'invokeService').and.callFake(function (url) {
        var deferred = $q.defer();
        deferred.resolve(data);
        return deferred.promise;
      });
      scope.fnGetBookmarksAvailable();
      expect(scope.dataLoaded).toEqual(false);
      expect(restAPIService.invokeService).toHaveBeenCalled();
      restAPIService.invokeService();
      expect(scope.bookmarkdata).toEqual(['Test Data']);
      expect(scope.dataLoad).toEqual(true);

    })
  });
  describe('Test the functionality of fnNavigateToChart ', function () {
    it('fnNavigateToChart should change state', function () {
      var item = { chartName: "testChart", bookmarksId: "id" };
      scope.fnNavigateToChart(item);
      expect(rootScope.chartName).toEqual("testChart");
      expect(state.go).toHaveBeenCalledWith('dashboard.testChart', Object({ stateID: 'id' }));
    })
  });
  describe('Test the functionality of triggerDeleteModal ', function () {
    it('triggerDeleteModal should assign modalobject to scope.modalobject', function () {
      var obj = { linkName: "testLink" };
      scope.triggerDeleteModal(obj);
      expect(scope.modalObject).toEqual(obj);
      expect(scope.bookmarkToBeDeleted).toEqual("testLink");
    })
  });
  describe('Test the functionality of fnRemoveAllBookmarks ', function () {
    it('fnRemoveAllBookmarks should delete all bookmarks', function () {
      scope.bookmarkdata = ['Test data'];
      scope.fnRemoveAllBookmarks();
      expect(scope.bookmarkdata).toEqual([]);
      expect(bookMarkService.fnDeleteBookmark).toHaveBeenCalled();
    })
  });

});
