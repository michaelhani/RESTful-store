var mongoose = require('mongoose');
var OrderSchema= new mongoose.Schema({
	customer:{type: String, required: true},
	product:{type: String, required: true},
	quantity:{type: Number, required: true},
	date: Date
});
mongoose.model("order", OrderSchema);