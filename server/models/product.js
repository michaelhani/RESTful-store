var mongoose = require('mongoose');
var ProductSchema= new mongoose.Schema({
	name:{type: String, required: true},
	image:{type: String, required: true},
	desc:{type: String, required: true},
	stock:{type: Number, required: true}
});
mongoose.model("product", ProductSchema);