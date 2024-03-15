const express = require('express')
const cors = require('cors')
const dbconnect = require('./dbconnect')
const dotenv = require('dotenv')
const path = require('path')
const app = express()
app.use(cors())
app.use(express.json())
const subscriberReg = require('./routes/subscriberReg')
app.use('/api/subscribers/', subscriberReg)
dotenv.config();
const port = process.env.PORT || 6000

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static('../frontend/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
    })
}



app.listen(port, () => console.log(`Node JS Server started at port ${port}!`))
