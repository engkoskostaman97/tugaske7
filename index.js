const express = require('express')

const app = express()
const port = 8000

app.set('view engine', 'hbs') // set view engine hbs
app.use('/assets', express.static(__dirname + '/assets')) // path folder assets
app.use(express.urlencoded({ extended: false }))

app.get('/', function (request, response) {
    response.render('index')
})

app.get('/contact', function (request, response) {
    response.render('contact')
})

let isLogin = true

app.get('/blog', function (request, response) {
    response.render('blog', { isLogin })
})

app.get('/blog-detail/:id', function (request, response) {
    let id = request.params.id
    console.log(id);

    response.render('blog-detail', {
        id,
        title: 'Selamat Datang',
        content: 'lorem ipsum',
        author: 'engkos kostaman',
        postAt: '17 Agustus 2022'
    })
})

app.get('/add-blog', function (request, response) {
    response.render('add-blog')
})

app.post('/add-blog', function (request, response) {
    console.log(request.body);
    let title = request.body.inputTitle
    let stardate = request.body.input - stardate
    let enddate = request.body.input - enddate
    let content = request.body.inputContent
    let react = request.body.react
    let node = request.body.node
    let nextjs = request.body.nextjs
    let typescript = request.body.typescript
    let image = request.body.inputImage


    console.log(title);
    console.log(stardate);
    console.log(enddate);
    console.log(content);
    console.log(react);
    console.log(node);
    console.log(nextjs);
    console.log(typescript);
    console.log(image);




    response.redirect('/blog')
})

app.listen(port, function () {
    console.log(`server running on port ${port}`);
})