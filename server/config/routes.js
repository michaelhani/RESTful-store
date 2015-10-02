var customers = require('../controllers/customers.js');
var orders = require('../controllers/orders.js');
var products = require('../controllers/products.js');

module.exports=function(app){
	// Begin customer routes
	app.get("/customers", function(req,res){
		customers.show(req,res);
	});
	app.get("/customers/new", function(req,res){
		console.log("show form for new customer");  //TODO add in missing RESTful routes
	});
	app.post("/customers", function(req,res){
		customers.add(req, res);
	});
	app.delete("/customers/:id", function(req,res){
		customers.remove(req,res);
	});
	app.get("/customers/:id", function(req,res){
		console.log("show single customer"); //TODO add in missing RESTful routes
	});
	app.get("/customers/:id/new", function(req,res){
		console.log("show update form single customer");
	});
	app.patch("/customers/:id", function(req,res){
		console.log("update single customer"); //TODO add in missing RESTful routes
	});

	// Begin order routes
	app.get("/orders", function(req,res){
		orders.show(req,res);
	});
	app.get("/orders/new", function(req,res){
		console.log("show form for new order");  //TODO add in missing RESTful routes
	});
	app.post("/orders", function(req,res){
		orders.add(req, res);
	});
	app.delete("/orders/:id", function(req,res){
		orders.remove(req,res);
	});
	app.get("/orders/:id", function(req,res){
		console.log("show single order"); //TODO add in missing RESTful routes
	});
	app.get("/orders/:id/new", function(req,res){
		console.log("show update form single order");
	});
	app.patch("/orders/:id", function(req,res){
		console.log("update single order"); //TODO add in missing RESTful routes
	});

	// Begin product routes
	app.get("/products", function(req,res){
		products.show(req,res);
	});
	app.get("/products/new", function(req,res){
		console.log("show form for new product");  //TODO add in missing RESTful routes
	});
	app.post("/products", function(req,res){
		products.add(req, res);
	});
	app.delete("/products/:id", function(req,res){
		products.remove(req,res);
	});
	app.get("/products/:id", function(req,res){
		console.log("show single product"); //TODO add in missing RESTful routes
	});
	app.get("/products/:id/new", function(req,res){
		console.log("show update form single product");
	});
	app.patch("/products/:id", function(req,res){
		console.log("update single product"); //TODO add in missing RESTful routes
	});
};