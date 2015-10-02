app.factory("customerFactory", function($http){
	var that = this;
	var factory={};
	factory.getCustomers = function(callback){
		$http.get('/customers').then(function(customers){
			callback(customers.data);
		});
	};
	factory.addCustomer= function(newCustomer, callback){
		$http.post('/customers', newCustomer).then(function(customers){
			callback();
		});
	};
	factory.removeCustomer=function(customer, callback){
		$http.delete("/customers/"+customer._id).then(function(response){
			callback();
		});
	};
	return factory;
});