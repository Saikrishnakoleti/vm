const ProjectService = require('../service/projectService');
class ProjectController {
  static async register(app) {
    app.post('/api/project', function (req, res) {
      ProjectService.save(req.body);
      var name = req.body;
      res.send(name);
    });
    app.get('/api/project', async (req, res) => {
      return res.send(await ProjectService.load());
    });
  }
}
module.exports = ProjectController;
