//express application
import express from 'express';//script imports the express module

//configuration
const configs = {port: 3000};

//express initialization
const app = express(); //create an instance named app

//home page route
//this routing function is defined to handle HTTP GET requests to the root / path
app.get('/', (req, res) => {res.send("<h1>Hello I'm Rony</h1>");});
//another route
app.get('/about-us', (req, res) => {res.send(`About us page`)})

//serve static assets
app.use(express.static('static'));
//log every request to the terminal
app.use((req, res, next) =>{console.log(req.url);
    next();
})
//start server
app.listen(configs.port, ()=> {console.log(`Server is running at port ${configs.port}`);});