const express = require('express')
const nunjucks = require('nunjucks')

const server = express()


server.use(express.static('../front-end/public'))

server.set('view engine', 'njk')

nunjucks.configure('../front-end/views', {
    express: server,
    autoescape: false,
    noCache: true
})
server.get('/', (req, res) => {
    return res.render('index')

})
server.get('/sobre', (req, res) => {
    return res.render('sobre')

})
server.get('/receitas', (req, res) => {
    return res.render('receitas')


})

server.listen(3000, () => {
    console.log('server is running')
})