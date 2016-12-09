angular.
	module('projectApp')
		.controller('pageslideCtrl',['$scope', function($scope) {
			$scope.checked = false;
			$scope.size = '1000px';
	 
			$scope.toggle = function() {
				$scope.checked = !$scope.checked;
	 		};
		}]);