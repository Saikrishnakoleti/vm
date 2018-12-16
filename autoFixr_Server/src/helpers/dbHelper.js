const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/AutoFixr',{ useNewUrlParser: true });			
class DataBaseHelper{
	static async load(schemaObj,collectionName,ids){
		let p =  schemaObj.find(function (err,rules) {
			if (err) return console.error(err);
			return rules;		
		})	
		return await p.exec();
	}
	static async save(myObject,schemaObj){
		console.log("save the data")
		let pendingWrites=myObject.map((obj)=>{
			return {
				updateOne: {
					"filter":{_id:obj['_id']},
			        "update" : obj
				}
			};
		})
		let returnObj=await schemaObj.bulkWrite(pendingWrites);
	}
}
module.exports = DataBaseHelper;
