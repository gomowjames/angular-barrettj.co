'use strict';

angular.
	module('projectDetail').
	component('projectDetail', {
		templateUrl: 'project-detail/project-detail.template.html',
		controller: ['$http', '$routeParams',
			function ProjectDetailController($http, $routeParams) {
				var self = this;

				self.setImage = function setImage(imageUrl) {
					self.mainImageUrl = imageUrl;
				};
				
				$http.get('projects/' + $routeParams.projectId + '.json').then(function(response) {
					self.project = response.data;
					self.setImage(self.project.images[0]);
				});
			}
		]
	});