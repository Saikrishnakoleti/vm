const RuleService = require('../service/ruleService');
class RuleController {
  static async register(app) {
    app.post('/api/rule', function (req, res) {
      RuleService.save(req.body);
      var name = req.body;
      res.send(name);
    });
    app.get('/api/rule', async (req, res) => {
      return res.send(await RuleService.load());
    });
  }
}
module.exports = RuleController;
