angular.module('app').controller('MaintenanceList', function(MaintenanceService, $scope, $state) {
	$scope.requests = MaintenanceService.getRequests();

	$scope.goTo = function goTo(item){
		$state.go('viewRequest', {id : item.id});
	}
})