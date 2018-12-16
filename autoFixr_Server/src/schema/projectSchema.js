var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var projectSchema= new Schema({
		name:String,
		description:String,
		repository:String,
		language:String,
		active:Boolean
});
module.exports = mongoose.model('project', projectSchema,"project");
