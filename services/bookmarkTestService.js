'use strict';

describe('Service: bookMarkTestService', function () {
  beforeEach(module('polarisApp'));
  var bookMarkService,
    restAPIService,
    $q,
    option,
    sheet,
    filterList,
    bookMarkId,
    constantsService,
    httpbackend,
    args;
  beforeEach(inject(function ($injector) {
    bookMarkService = $injector.get('bookMarkService');
    restAPIService = $injector.get('restAPIService');
    httpbackend = $injector.get('$httpBackend');
    constantsService = $injector.get('constantsService');
    $q = $injector.get('$q');
    option = '';
    bookMarkId = 'polaris';
    sheet = '';
    filterList = '';
    args = '';
    // var bookMark = "https://polaris.dev.deloitteinnovation.space/rest/bookmarks/getbookmark/";
    // $httpBackEnd.when('POST', bookMark).respond({ 'status': 200 });
    spyOn(restAPIService, 'invokeService').and.callFake(function () {
      var deferred = $q.defer();
      deferred.resolve({ 'status': '200' });
      return deferred.promise;
    });
  }));
  it('bookMarkService definition test', inject(function () {
    expect(bookMarkService).not.toBe(undefined);
  }));

  it('bookMarkService fnDeleteBookmark definition test', function () {
    //expect(bookMarkService).not.toBe(undefined);
    bookMarkService.fnDeleteBookmark(bookMarkId);
    expect(restAPIService.invokeService).toHaveBeenCalled();
    httpbackend.whenGET().respond({});
  });

  it('bookMarkService getBookmarkData', inject(function () {
    bookMarkService.getBookmarkData();
    expect(bookMarkService.getBookmarkData).toBeDefined();
  }));

  it('bookMarkService SaveConfig', inject(function () {
    bookMarkService.fnSaveConfig(option);
    expect(bookMarkService.fnSaveConfig).toBeDefined();
  }));

  it('bookMarkService MergeBookmarkFilters', inject(function () {
    bookMarkService.fnMergeBookmarkFilters(sheet, filterList);
    expect(bookMarkService.fnMergeBookmarkFilters).toBeDefined();
  }));

  it('bookMarkService SaveFilter', inject(function () {
    bookMarkService.fnSaveFilter(args);
    expect(bookMarkService.fnSaveFilter).toBeDefined();
  }));

  it('bookMarkService GetFilter', inject(function () {
    bookMarkService.fnGetFilter();
    expect(bookMarkService.fnGetFilter).toBeDefined();
  }));

  it('bookMarkService GetConfig', inject(function () {
    bookMarkService.fnGetConfig();
    expect(bookMarkService.fnGetConfig).toBeDefined();
  }));

});
