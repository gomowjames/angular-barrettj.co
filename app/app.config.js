angular.
	module('projectApp').
	config(['$locationProvider', '$routeProvider',
		function config($locationProvider, $routeProvider) {
			$locationProvider.hashPrefix('!');
			$locationProvider.html5Mode(true);
			
			$routeProvider.
				when('/', {
					template: '<project-featured></project-featured><project-list></project-list>'
				}).
				otherwise('/');
		}
	]);