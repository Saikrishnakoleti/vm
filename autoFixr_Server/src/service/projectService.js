const DatabaseHelper = require('../helpers/dbHelper');
const projectObj = require('../schema/projectSchema');
class ProjectService {
	static async load(ids){
		return await DatabaseHelper.load(projectObj,projectObj.collection.collectionName,ids);
	}
	static async save(myObject){
		return await DatabaseHelper.save(myObject,projectObj);
	}
}
module.exports = ProjectService;
