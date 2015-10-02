app.controller('customersController', function($scope, customerFactory){
	var that = this;
	$scope.errors={};
	this.getCustomers=function(){
		$scope.customers=[];
		customerFactory.getCustomers(function(data){
			$scope.customers=data;
		});
	};
	this.addCustomer= function(){
		for (var i = 0; i < $scope.customers.length; i++) {
			if($scope.customers[i].name===$scope.newCustomer.name){
				$scope.errors.message="That name already exists";
				return false;
			}else{
				$scope.errors={};
			}
		}
		$scope.newCustomer.date= new Date();
		customerFactory.addCustomer($scope.newCustomer, function(){
			that.getCustomers();
		});
		$scope.newCustomer={};
		};
	this.removeCustomer=function(customer){
		customerFactory.removeCustomer(customer, function(){
			that.getCustomers();
		});
	};
	this.getCustomers();
});