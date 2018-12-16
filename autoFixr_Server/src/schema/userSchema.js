var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var userSchema= new Schema({
		userName:String,
		password:String,
		hint:String,
		answer:String,
		firstName:String,
		lastName:String,
		active:Boolean
});
module.exports = mongoose.model('user', userSchema,"user");
