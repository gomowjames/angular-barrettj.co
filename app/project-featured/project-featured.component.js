angular.
	module('projectFeatured').
	component('projectFeatured', {
		templateUrl: 'project-featured/project-featured.template.html',

		controller: ['$http',
			function ProjectFeaturedController($http) {

				var self = this;

				self.setImage = function setImage(imageUrl) {
					self.mainImageUrl = imageUrl;
				};
									
				$http.get('project-featured/project-featured.json').then(function(response) {
					self.project = response.data;
 					self.setImage(self.project.images[0]);
				});
			}
		]
	});