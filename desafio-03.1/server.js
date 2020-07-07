const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server
})
server.get('/', (req, res) => {
    return res.render('content')

})
server.get('/sobre', (req, res) => {
    return res.render('about')

})

server.use((req, res) => {
    res.status(404).render("not-found");
});

server.listen(3001, () => {
    console.log('server desafio running')
})