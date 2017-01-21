angular.module('app').service('MaintenanceService', function() {
	
	var mockRequests = [];

	for(i = 0; i<36; ++i) {
		mockRequests.push({status : "Open", id : 'abc'+i, dateTime : new Date().toLocaleString(), apartment : i, building : "A", firstName : i+"Matthew"+i, lastName : i+"Hudson", email : "matthew_mock@email.cool", homePhone : "(555)-555-5555", mobilePhone : "7777777777", message : i+"This is a generic maintenance request message"+i})
	}

	this.getRequests = function getRequests() {
		return mockRequests; 
	}
	
	this.getRequest = function getRequest(id) {
		var requests = this.getRequests();
		for(var i = 0; i<=requests.length; ++i) {
			if(requests[i].id == id)
				return requests[i];
		}

		return {id : "NotFound"};
	}

	this.toggleRequestStatus = function toggleRequestStatus(id, newStatus) {
		var requests = mockRequests;
		var requestNum = -1;
		for(var i = 0; i<=requests.length; ++i) {
			if(requests[i].id == id) {
				requestNum = i;
				i = requests.length;
			}
		}		
		if(requestNum==-1) {
			console.log("error in toggleRequestStatus : id not found");
		} else {
			requests[requestNum].status = newStatus;
		}
	}

	return this;
});