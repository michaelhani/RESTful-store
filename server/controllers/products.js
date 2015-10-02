var mongoose=require("mongoose");
var product = mongoose.model('product');

module.exports={
		show: function(req,res){
			product.find({}, function(err, results){
				if(err){
					console.log(err);
				}else{
					res.json(results);
				}
			});
		},
		add: function(req,res){
			var newProduct= new product();
			newProduct.name=req.body.name;
			newProduct.image=req.body.image;
			newProduct.desc=req.body.desc;
			newProduct.stock=req.body.stock;
			newProduct.save(function(err){
				if(err){
					console.log(err);
				}else{
					res.json({msg:"success"});
				}
			});
		},
		remove: function(req,res){
			product.remove({_id:req.params.id}, function(err){
				if(err){
					console.log(err);
				}else{
					res.json({msg:"success"});
				}
			});
		}
	};