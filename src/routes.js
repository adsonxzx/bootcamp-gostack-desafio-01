const express = require('express')
const routes = express.Router()
const projects = require('./projects')

const projectController = require('./controllers/projectController')
const taskController = require('./controllers/taskController')

const checkProjectId = (req, res, next) => {
  const {id} = req.params
  const project = projects.find( project => project.id === parseInt(id))

  if(!project) {
    return res.status(404).send()
  }

  next()
}

// Projects
routes.get('/projects', projectController.show)
routes.post('/projects', projectController.store)
routes.put('/projects/:id', checkProjectId, projectController.update)
routes.delete('/projects/:id', checkProjectId, projectController.destroy)

routes.post('/projects/:id/tasks', taskController.store)

module.exports = routes