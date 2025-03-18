const express = require('express')
const app = express()
const port = 4000

app.use(express.json());
require('./DBConn/conn')


const GymRoutes =require('./Routes/gym')

app.use('/auth',GymRoutes)




app.listen(port, () => console.log(`Example app listening on port ${port}! sucessfully`))