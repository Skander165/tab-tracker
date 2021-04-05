const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(express.urlencoded({extended: true}));
app.use(morgan('combined'));
app.use(cors());

app.get('/status', (req, res) =>{
    res.send({
        message: 'hello world!'
    })
})

app.listen(process.env.PORT || 8081)