// Register `projectList` component with controller and template on the `projectList` module
angular.
	module('projectList').
	component('projectList', {
		templateUrl: 'project-list/project-list.template.html',

		controller: ['Project',
			function ProjectListController(Project) {

			this.projects = Project.query();
			
/*
			var self = this;
			
			$http.get('projects/projects.json').then(function(response) {
				self.projects = response.data;
			});
*/
		}
	]
});
