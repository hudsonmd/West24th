angular.module('app').service('MaintenanceService', function() {
	
	var mockRequests = [];
	var garbage = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	for(i = 0; i<36; ++i) {
		mockRequests.push({status : "Open", id : 'abc'+i, dateTime : new Date(i*4000000+30*10000000), apartment : i, building : "A", firstName : i+"Matthew"+i, lastName : i+"Hudson", email : "matthew_mock@email.cool", homePhone : "(555)-555-5555", mobilePhone : "7777777777", message : i+"This is a generic maintenance request message"+i+garbage})
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