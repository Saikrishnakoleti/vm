const DatabaseHelper = require('../helpers/dbHelper');
const userObj = require('../schema/userSchema');
class UserService {
	static async load(ids){
		return await DatabaseHelper.load(userObj,userObj.collection.collectionName,ids);
	}
	static async save(myObject){
		return await DatabaseHelper.save(myObject,userObj);
	}
}
module.exports = UserService;
