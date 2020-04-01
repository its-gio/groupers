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

// async function getProject(req, res) {
  
// }

// async function deleteProject(req, res) {
  
// }

// async function editProject(req, res) {
  
// }

module.exports = {
  createProject,
  // getProject,
  // deleteProject,
  // editProject
}