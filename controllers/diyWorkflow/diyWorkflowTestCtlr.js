'use strict';

describe('Controller: diyWorkflowTestCtlr', function () {
  // load the controller's module
  beforeEach(module('polarisApp'));
  var ctrl, scope, restAPIService, _localStorage = {};
  var store = {
    userInfo: {
      userDetails: {
        "email": "polaris@deloitte.com"
      }
    }
  };
  // Initialize the controller and a mock scope
  var def, questionObject, qsName, eachquestion, currentModule, renamedModule, keyEvent, renamedQuestion, renamedStory, newModule, newStory, addedModule, currentStory, value, arr, index, deleteQuestionObject, newQuestion, targetStory, currentmodule, eachQuestion, data, isDefault;
  beforeEach(inject(function ($controller, $rootScope, _restAPIService_, $q) {
    scope = $rootScope.$new();
    restAPIService = _restAPIService_;
    $q = $q;
    // LocalStorage mock.
    _localStorage.getItem = jasmine.createSpy('getItem').and.callFake(function (key) {
      return JSON.stringify(store[key]);
    });
    _localStorage.setItem = jasmine.createSpy('setItem').and.callFake(function (key, value) {
      store[key] = value;
    });

    _localStorage.userInfo = JSON.stringify(store['userInfo']);
    _localStorage.$default = jasmine.createSpy('$default').and.callFake(function (value) {
      return value;
    });
    spyOn(restAPIService, 'invokeService').and.callFake(function (url) {
      data = {
        data: [{
          "default": {

          }
        }]
      };
      return $q.when(data);
    });
    ctrl = $controller('diyWorkflowController', {
      $scope: scope,
      restAPIService: restAPIService,
      $localStorage: _localStorage
    });
    qsName = [];
    eachquestion = {
      id: "",
      storyId: 12,
      title: ""
    };
    renamedModule = {

    };
    newModule = {};
    keyEvent = {
      keyCode: 0
    };
    newQuestion = {
      trim: function () {
        return {
          toLowerCase: function () {
            return '';
          }
        }
      }
    }
    addedModule = "";
    scope.newStory = {
      trim: function () {
        return {
          toLowerCase: function () {
            return '';
          }
        }
      }
    }
    scope.currentModule = {
      title: "",
      storyList: {
        eachStory: {
          title: {
            trim: function () {
              return '';
            }
          }
        }
      },
      data: {
        data: ["default"]
      },
      default: '',
      roles: ["polaris", "polaris"]
    };
    questionObject = {
      title: {
        trim: function () {
          return '';
        }
      },
      mouseOver: true,
      id: ''
    };
    scope.deleteQuestionObject = {
      id: 12,
      title: ""
    }
    currentStory = '';
    value = '';
    renamedStory = {};
    arr = [];
    index = '';
    scope.targetStory = {
      id: 12,
      questionList: []
    };
    currentmodule = {
      title: '',
      roles: ["polaris", "polaris"]
    };
    scope.eachQuestion = {
      id: 12
    };
    scope.currentStory = {
      trim: function () {
        return '';
      }
    };
    data = {
      data: [{
        "default": {

        }
      }]
    };
    scope.isDefault = "";
  }));
  it('diyWorkflowController should be defined', function () {
    expect(ctrl).toBeDefined();
  });
  describe('Test the function definitions', function () {
    it('deleteUserModule should be defined', function () {
      scope.deleteUserModule();
      expect(scope.deleteUserModule).not.toBe(undefined);
    });
    it('delModule should be defined', function () {
      //scope.delModule();
      expect(scope.delModule).toBeDefined();
    });
    it('delStory should be defined', function () {
      scope.delStory();
      expect(restAPIService.invokeService).toHaveBeenCalled();
      expect(scope.delStory).toBeDefined();
    });
    it('deleteQuestion should be defined', function () {
      scope.deleteQuestion(questionObject);
      expect(scope.deleteQuestion).not.toBe(undefined);
    });
    it('delQuestion should be defined', function () {
      scope.delQuestion();
      expect(restAPIService.invokeService).toHaveBeenCalled();
      expect(scope.delQuestion).toBeDefined();
    });
    it('resetnewModuleName should be defined', function () {
      scope.resetnewModuleName();
      expect(scope.resetnewModuleName).toBeDefined();
    });
    it('resetnewStoryName should be defined', function () {
      scope.resetnewStoryName();
      expect(scope.resetnewStoryName).toBeDefined();
    });
    it('addModule should be defined', function () {
      scope.addModule(newModule);
      expect(scope.addModule).toBeDefined();
    });
    it('resetnewQuestionName  should be defined', function () {
      scope.resetnewQuestionName();
      expect(scope.resetnewQuestionName).toBeDefined();
    });
    it('addStory should be defined', function () {
      scope.addStory(newStory);
      expect(scope.addStory).toBeDefined();
    });
    it('addQuestion should be defined', function () {
      scope.addQuestion(newQuestion);
      expect(scope.addQuestion).toBeDefined();
    });
    it('getData should be defined', function () {
      scope.getData(addedModule);
      expect(restAPIService.invokeService).toHaveBeenCalled();
      expect(scope.getData).toBeDefined();
    });
    it('getModuleStories should be defined', function () {
      scope.getModuleStories(currentmodule);
      //expect(restAPIService.invokeService).toHaveBeenCalled();
      expect(scope.getModuleStories).toBeDefined();
    });
    it('getStoryQuestion should be defined', function () {
      scope.getStoryQuestion(currentStory);
      expect(scope.getStoryQuestion).toBeDefined();
    });
    it('moduleFilter should be defined', function () {
      expect(scope.moduleFilter).toBeDefined();
    });

    it('hoverOutModule  should be defined', function () {
      scope.hoverOutModule();
      expect(scope.hoverOutModule).not.toBe(undefined);
      scope.isDefault != "";
      scope.editQues = false;
      expect(scope.editQues).toBe(false);
    });
  });

  describe('Test the resetnewModuleName functionalities', function () {
    it('resetnewModuleName should empty the newModule.name', function () {
      scope.newModule.name = 'something';
      scope.resetnewModuleName();
      expect(scope.newModule.name).toEqual('');
    });
  });

  describe('Test the resetnewStoryName  functionalities', function () {
    it('resetnewStoryName should empty the newStory.name', function () {
      scope.newStory.name = 'something';
      scope.resetnewStoryName();
      expect(scope.newStory.name).toEqual('');
    });
  });

  describe('Test the resetnewQuestionName functionalities', function () {
    it('resetnewQuestionName should empty the newQuestion.name', function () {
      scope.newQuestion.name = 'something';
      scope.resetnewQuestionName();
      expect(scope.newQuestion.name).toEqual('');
    });
  });

  describe('Test the moduleFilter functionalities', function () {
    it('moduleFilter should return MF if name is  "module filter" ', function () {
      var name = "module filter";
      expect(scope.moduleFilter(name)).toEqual('MF');
    });
    it('moduleFilter should return MO if name is " modulefilter"', function () {
      var name = " modulefilter";
      expect(scope.moduleFilter(name)).toEqual('MO');
    });
    it('moduleFilter should return M if name is " m"', function () {
      var name = " m";
      expect(scope.moduleFilter(name)).toEqual('M');
    });
  });

  describe('Test the functionalities of delModule', function () {
    it('delModule will call restAPIService.invokeService', function () {
      scope.delModule();
      expect(restAPIService.invokeService).toHaveBeenCalled();
      expect(scope.delModule).toBeDefined();
    })
  });

  it('checkInput function definition', function () {
    scope.checkInput(qsName);
    expect(scope.checkInput).toBeDefined();
  });

  it('initBookmark function definition', function () {
    scope.initBookmark();
    expect(restAPIService.invokeService).toHaveBeenCalled();
    expect(scope.checkInput).toBeDefined();
  });

  it('addBookmark function definition', function () {
    scope.addBookmark(eachquestion);
    expect(restAPIService.invokeService).toHaveBeenCalled();
    expect(scope.addBookmark).toBeDefined();
  });

  it('saveAddedBookmark function definition', function () {
    scope.saveAddedBookmark();
    expect(restAPIService.invokeService).toHaveBeenCalled();
    expect(scope.saveAddedBookmark).toBeDefined();
  });

  it('loadSelectedModule function definition', function () {
    scope.loadSelectedModule(currentModule);
    expect(restAPIService.invokeService).toHaveBeenCalled();
    expect(scope.loadSelectedModule).toBeDefined();
  });

  it('loadSelectedStory function definition', function () {
    scope.loadSelectedStory();
    expect(scope.loadSelectedStory).toBeDefined();
  });

  it('loadSelectedStory function definition', function () {
    scope.loadSelectedStory();
    expect(scope.currentModule.storyList.eachStory.title.trim()).toBeDefined(scope.renamedStory);
  });

  it('renameModule function definition', function () {
    scope.renameModule(renamedModule, keyEvent);
    expect(scope.renameModule).toBeDefined();
  });

  it('renameQuestion function definition', function () {
    scope.renameQuestion(questionObject, renamedQuestion, keyEvent);
    scope.renamedQuestion = true;
    expect(questionObject.mouseOver).toEqual(false);
    expect(scope.renameQuestion).toBeDefined();
  });

  it('renameStory function definition', function () {
    scope.renameStory(renamedStory, keyEvent);
    expect(scope.renameStory).toBeDefined();
  });

  it('deleteUserModule function definition', function () {
    //scope.deleteUserModule();
    expect(scope.deleteUserModule).toBeDefined();
  });

  it('deleteQuestion function definition', function () {
    scope.deleteQuestion(questionObject);
    expect(scope.deleteQuestion).toBeDefined();
  });

  it('disableEdit function definition', function () {
    scope.disableEdit();
    expect(scope.disableEdit).toBeDefined();
  });

  it('editStory function definition', function () {
    scope.editStory();
    expect(scope.editStory).toBeDefined();
    scope.isDefault != "";
    scope.editQues = false;
    expect(scope.editQues).toBe(false);
  });

  it('hoverOnStory function definition', function () {
    scope.hoverOnStory();
    expect(scope.hoverOnStory).toBeDefined();
    scope.isDefault != "";
    scope.editQues = false;
    expect(scope.editQues).toBe(false);
  });

  it('editModule function definition', function () {
    scope.editModule();
    expect(scope.editModule).toBeDefined();
  });

  it('hoverOnModule function definition', function () {
    scope.hoverOnModule();
    expect(scope.hoverOnModule).toBeDefined();
  });

  it('hoverOutQuestion function definition', function () {
    scope.hoverOutQuestion();
    expect(scope.hoverOutQuestion).toBeDefined();
  });

  it('hoverOutStory function definition', function () {
    scope.hoverOutStory();
    expect(scope.hoverOutStory).toBeDefined();
  });

  it('hoverCLick function definition', function () {
    scope.hoverCLick(value);
    expect(scope.hoverCLick).toBeDefined();
  });

  it('hoverCLickEdit function definition', function () {
    scope.hoverCLickEdit(value);
    expect(scope.hoverCLickEdit).toBeDefined();
  });

  it('editQuestion function definition', function () {
    scope.editQuestion(questionObject);
    expect(scope.editQuestion).toBeDefined();
  });

  it('hoverOutAllQuestion function definition', function () {
    scope.hoverOutAllQuestion();
    expect(scope.hoverOutAllQuestion).toBeDefined();
  });

  it('hoverOnQuestion function definition', function () {
    scope.hoverOnQuestion(eachquestion);
    expect(scope.hoverOnQuestion).toBeDefined();
  });

  it('trueLen function definition', function () {
    scope.trueLen(arr);
    expect(scope.trueLen).toBeDefined();
  });

  it('clearAll function definition', function () {
    scope.clearAll();
    expect(scope.clearAll).toBeDefined();
  });

  it('delRole function definition', function () {
    scope.delRole(index);
    expect(scope.delRole).toBeDefined();
  });

  it('openAssigneeDropdown function definition', function () {
    scope.openAssigneeDropdown();
    expect(scope.openAssigneeDropdown).toBeDefined();
  });

  it('closeAssigneeDropdown function definition', function () {
    scope.closeAssigneeDropdown();
    expect(scope.closeAssigneeDropdown).toBeDefined();
  });

  it('showCurrentRolesForAModule function definition', function () {
    scope.showCurrentRolesForAModule();
    expect(scope.showCurrentRolesForAModule).toBeDefined();
  });

  it('updateRoleObjectInCurrentModule function definition', function () {
    scope.updateRoleObjectInCurrentModule();
    expect(scope.updateRoleObjectInCurrentModule).toBeDefined();
  });

  it('updateRolesForModule function definition', function () {
    scope.updateRolesForModule();
    expect(scope.updateRolesForModule).toBeDefined();
  });

  it('updateCheckedRoleObject function definition', function () {
    scope.updateCheckedRoleObject();
    expect(scope.updateCheckedRoleObject).toBeDefined();
  });
});
