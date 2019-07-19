const express = require('express');

const Projects = require('./router-model');

const router = express.Router();

router.post('/', async (req, res) => {
  const data = req.body;
  try {
    const newProject = await Projects.addProject(data);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({
      message: 'Server error 1',
    });
  }
});

router.post('/:id/actions', async (req, res) => {
  const data = req.body;
  try {
    const newAction = await Projects.addAction(data);
    res.status(201).json(newAction);
  } catch (error) {
    res.status(500).json({
      message: 'Server error 2',
    });
  }
});

router.get('/:id', async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const project = await Projects.getProjectById(id);
    const projectActions = await Projects.getProjectActions(id);

    res.status(200).json({ ...project, actions: [projectActions] });
  } catch (error) {
    res.status(500).json({
      message: 'Server error 3',
    });
  }
});

module.exports = router;