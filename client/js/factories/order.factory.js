app.factory("orderFactory", function($http){
	factory={};
	factory.getOrders = function(callback){
		$http.get('/orders').then(function(orders){
			callback(orders.data);
		});
	};
	factory.addOrder= function(newOrder, callback){
		$http.post('/orders', newOrder).then(function(orders){
			callback(orders.data);
		});
	};
	factory.removeOrder=function(order, callback){
		$http.delete("/orders/"+order._id).then(function(response){
			callback();
		});
	};
	return factory;
});