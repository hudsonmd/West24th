angular.module('app').controller('MaintenanceRequest', function(MaintenanceService, $stateParams, $scope) {
	$scope.request = MaintenanceService.getRequest($stateParams.id);

	$scope.toggleStatus = function toggleStatus() {
		var newStatus = "Closed";
		if($scope.request.status == "Closed") {
			newStatus = "Open";
		}
		MaintenanceService.toggleRequestStatus($scope.request.id, newStatus);
		$scope.request = MaintenanceService.getRequest($stateParams.id);
	}
})