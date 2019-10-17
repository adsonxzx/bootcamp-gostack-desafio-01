let projects = require('../projects')

module.exports = {
  show(req, res) {
    res.send(projects)
  },

  store(req, res) {
    projects.push(req.body)
    res.send(projects)
  },

  update(req, res) {
    const { id } = req.params
    const { title } = req.body

    projects.forEach((project, index) => {
      if (project.id === parseInt(id)) {
        projects[index] = { ...projects[index], title }
        return res.send(projects[index])
      }
    })

    return res.status(404).send({error: "Error ao alterar projeto"})
  },

  destroy(req, res) {
    const {id} = req.params

    projects = projects.filter((project, index) => project.id != parseInt(id))

    res.send(projects)
  }
}