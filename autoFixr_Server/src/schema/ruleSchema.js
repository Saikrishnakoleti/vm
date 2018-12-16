var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var rulesSchema= new Schema({
			language:String,
			name:String,
			text:String,
			selected:Boolean
		});
module.exports = mongoose.model('rules', rulesSchema,"rules");
