const UserService = require('../service/userService');
class UserController {
  static async register(app) {
    app.post('/api/user', function (req, res) {
      UserService.save(req.body);
      var name = req.body;
      res.send(name);
    });
    app.get('/api/user', async (req, res) => {
      return res.send(await UserService.load());
    });
  }
}
module.exports = UserController;
