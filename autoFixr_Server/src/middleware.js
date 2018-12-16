var bodyParser = require("body-parser");
/**
 * Initialize middleware
 */
class Middleware {
  static async run(app) { 
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");   
      next();
    }); 
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
  }
}  
module.exports = Middleware
