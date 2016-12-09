angular.
	module('projectDetail').
	component('projectDetail', {
		templateUrl: 'project-detail/project-detail.template.html',

		controller: ['$routeParams', 'Project',
			function ProjectDetailController($routeParams, Project) {
				
				var self = this;
				
				self.project = Project.get({projectId: $routeParams.projectId}, function(project) {
					self.setImage(project.images[0]);
				});
				
				
				self.setImage = function setImage(imageUrl) {
					self.mainImageUrl = imageUrl;
				};

/*
				$http.get('projects/' + $routeParams.projectId + '.json').then(function(response) {
					self.project = response.data;
					
				});
*/
			}
		]
	});