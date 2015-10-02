var mongoose = require('mongoose');
var CustomerSchema= new mongoose.Schema({
	name:{type: String, required: true, unique:true},
	date: Date
});
mongoose.model("customer", CustomerSchema);