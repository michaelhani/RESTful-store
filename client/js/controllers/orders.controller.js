app.controller('ordersController', function($scope, orderFactory){
	var that = this;
	this.getOrders=function(){
		$scope.orders=[];
		orderFactory.getOrders(function(data){
			$scope.orders=data;
		});
	};
	this.addOrder= function(){
		this.newOrder.date= new Date();
		orderFactory.addOrder(this.newOrder, function(){
			that.getOrders();
		});
		this.newOrder={};
	};
	this.removeOrder=function(order){
		orderFactory.removeOrder(order, function(){
			that.getOrders();
		});
	};
	this.getOrders();
});