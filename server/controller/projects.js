const Stripe = require("stripe");
require("dotenv").config();

async function createProject(req, res) {
  const { creator, title, description, difficulty, funded, start_time, end_time } = req.body; 
  const db = req.app.get('db');

  try {
    const projects = await db.project.create(creator, title, description, difficulty, funded, start_time, end_time);
    return res.status(200).json(projects);
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
  gottenProjects = await db.project.get_projects();
  return res.status(201).json(gottenProjects);
}

// async function deleteProject(req, res) {
  
// }

// async function editProject(req, res) {
  
// }

async function postPayment(req, res) {
  const { id, amount } = req.body;
  const stripe = new Stripe(process.env.STRIPE_PRIVATE);

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'USD',
      payment_method: id,
      confirm: true
    })

    res.status(200).json({ status: true })
  } catch (error) {
    console.log(error);
    res.status(400).json({ error, status: false })
  }
}

module.exports = {
  createProject,
  getProject,
  // deleteProject,
  // editProject,
  postPayment
}