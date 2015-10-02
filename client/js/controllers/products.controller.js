app.controller("productsController", function($scope, productFactory){
	var that = this;
	this.getProducts=function(){
		$scope.products=[];
		productFactory.getProducts(function(data){
			$scope.products=data;
		});
	};
	this.addProduct= function(){
		this.newProduct.date= new Date();
		productFactory.addProduct(this.newProduct, function(){
			that.getProducts();
		});
		this.newProduct={};
	};
	this.removeProduct=function(product){
		productFactory.removeProduct(product, function(){
			that.getProducts();
		});
	};
	this.getProducts();
});