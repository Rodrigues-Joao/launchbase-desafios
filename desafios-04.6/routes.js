const express = require('express')
const routes = express.Router()

const teachers = require('./teachers')

routes.get('/', (req, res) => {

    return res.redirect('/teachers')

})
routes.get('/teachers', teachers.index)
routes.get('/teachers/create', (req, res) => {

    return res.render('teachers/create')

})
routes.get('/teachers/:id/edit', teachers.edit)
routes.get('/students', (req, res) => {

    return res.render('students/index')

})

routes.get('/teachers/:id', teachers.show)
routes.post('/teachers', teachers.post)

routes.put("/teachers", teachers.put)
routes.delete("/teachers", teachers.delete)
module.exports = routes