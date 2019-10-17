let projects = require('../projects')

module.exports = {
  store(req, res){
    const {title} = req.body
    const {id} = req.params

    projects.forEach((project, index) => {
      if(project.id === parseInt(id)) {
        let tasks = projects[index].tasks
        tasks.push(title)
        projects[index] = { ...projects[index], tasks}

        return res.send(projects[index])
      }
    })

    res.status(500).send()
  }
}