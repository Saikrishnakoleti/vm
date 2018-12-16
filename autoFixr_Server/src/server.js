const express = require('express');
const app = express();
const Middleware = require("./middleware");
const RuleController = require("./controllers/ruleController");
const UserController = require("./controllers/userController");
const ProjectController = require("./controllers/projectController");

class Application {
  static async registerControllers() {
    await RuleController.register(app);
    await UserController.register(app);
    await ProjectController.register(app);
  }
  static async run() {
    await Middleware.run(app)
    await this.registerControllers();
    app.listen(+process.env.APP_PORT, ()=>{console.log("server started")});
  }
}
Application.run();
