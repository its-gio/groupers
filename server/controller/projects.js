async function createProject(req, res) {
  const { creator, title, description, difficulty, funded, start_time, end_time } = req.body; 
  const db = req.app.get('db');

  try {
    await db.project.create(creator, title, description, difficulty, funded, start_time, end_time);
    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).json(error);
    
  }
}

async function getProject(req, res) {
  const db = req.app.get('db');
  const { project_id } = req.query;
  let gottenProjects;

  try {
    if (project_id) {
      gottenProjects = await db.project.get_project(project_id);
      if (gottenProjects.length === 0) {
        gottenProjects = await db.project.get_projects();
        return res.status(201).json(gottenProjects);
      }
      return res.status(201).json(gottenProjects);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
}

// async function deleteProject(req, res) {
  
// }

// async function editProject(req, res) {
  
// }

module.exports = {
  createProject,
  getProject,
  // deleteProject,
  // editProject
}