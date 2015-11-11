var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	.when('/orders', {
		controller: "ordersController as orderCtrl",
		templateUrl: '/partials/orders.partial.html'
	})
	.when('/customers', {
		controller: "customersController as custCtrl",
		templateUrl: '/partials/customers.partial.html'
	})
	.when('/products', {
		controller: "productsController as productsCtrl",
		templateUrl: '/partials/products.partial.html'
	})
	.otherwise('/');
});

app.filter('capitalize', function() {
  return function(input, scope) {
    if (input!=null)
    input = input.toLowerCase();
    return input.substring(0,1).toUpperCase()+input.substring(1);
  }
});