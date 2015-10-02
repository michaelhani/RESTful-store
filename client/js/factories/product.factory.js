app.factory("productFactory", function($http){
	var that = this;
	var factory={};
	factory.getProducts = function(callback){
		$http.get('/products').then(function(products){
			callback(products.data);
		});
	};
	factory.addProduct= function(newProduct, callback){
		$http.post('/products', newProduct).then(function(products){
			callback();
		});
	};
	factory.removeProduct=function(product, callback){
		$http.delete("/products/"+product._id).then(function(response){
			callback();
		});
	};
	return factory;
});