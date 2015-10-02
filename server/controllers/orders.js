var mongoose=require("mongoose");
var order = mongoose.model('order');

module.exports={
		show: function(req,res){
			order.find({}, function(err, results){
				if(err){
					console.log(err);
				}else{
					res.json(results);
				}
			});
		},
		add: function(req,res){
			var newOrder= new order();
			newOrder.customer=req.body.customer;
			newOrder.product=req.body.product;
			newOrder.quantity=req.body.quantity;
			newOrder.date=req.body.date;
			newOrder.save(function(err){
				if(err){
					console.log(err);
				}else{
					res.json({msg:"success"});
				}
			});
		},
		remove: function(req,res){
			order.remove({_id:req.params.id}, function(err){
				if(err){
					console.log(err);
				}else{
					res.json({msg:"success"});
				}
			});
		}
	};