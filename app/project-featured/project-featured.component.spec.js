describe('projectFeatured', function() {

  // Load the module that contains the `projectDetail` component before each test
  beforeEach(module('projectFeatured'));

  // Test the controller
  describe('ProjectFeaturedController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('projects/xyz.json').respond({name: 'project xyz'});

      $routeParams.projectId = 'xyz';

      ctrl = $componentController('projectFeatured');
    }));

    it('should fetch the project details', function() {
      expect(ctrl.project).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.project).toEqual({name: 'project xyz'});
    });

  });

});