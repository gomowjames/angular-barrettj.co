describe('projectDetail', function() {

  // Load the module that contains the `projectDetail` component before each test
  beforeEach(module('projectDetail'));

  // Test the controller
  describe('ProjectDetailController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('projects/xyz.json').respond({name: 'project xyz'});

      $routeParams.projectId = 'xyz';

      ctrl = $componentController('projectDetail');
    }));

    it('should fetch the project details', function() {
      expect(ctrl.project).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.project).toEqual({name: 'project xyz'});
    });

  });

});