const DatabaseHelper = require('../helpers/dbHelper');
const schemaObj = require('../schema/ruleSchema');
class RuleService{
	static async load(ids){
		return await DatabaseHelper.load(schemaObj,schemaObj.collection.collectionName,ids);
	}
	static async save(myObject){
		return await DatabaseHelper.save(myObject,schemaObj);
	}
}
module.exports = RuleService;
