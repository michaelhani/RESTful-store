var mongoose=require("mongoose");
var customer = mongoose.model('customer');

module.exports={
		show: function(req,res){
			customer.find({}, function(err, results){
				if(err){
					console.log(err);
				}else{
					res.json(results);
				}
			});
		},
		add: function(req,res){
			var newcustomer = new customer();
			newcustomer.name=req.body.name;
			newcustomer.date=req.body.date;
			newcustomer.save(function(err){
				if(err){
					res.json({msg:"failure"});
				}else{
					res.json({msg:"success"});
				}
			});
		},
		remove: function(req,res){
			customer.remove({_id:req.params.id}, function(err){
				if(err){
					console.log(err);
				}else{
					res.json({msg:"success"});
				}
			});
		}
	};