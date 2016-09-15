describe('projectList', function() {
	
	beforeEach(module('projectList'));
	
	describe('controller', function() {
		var $httpBackend, ctrl;
	
		beforeEach(inject(function($componentController, _$httpBackend_) {
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('projects/projects.json').respond([{type: 'Website Design & Build, Branding'}]);
				
			ctrl = $componentController('projectList');
		}));
	
		it('should create a `projects` model with 1 project fetched with `$http`', function() {

		expect(ctrl.projects).toBeUndefined();
		
		$httpBackend.flush();
		expect(ctrl.projects).toEqual([{type: 'Website Design & Build, Branding'}]);
	
		});
	
	});
	
});