const express = require("express")
const app = express();
const mongoose = require("mongoose")
require('dotenv').config();
const workoutRoutes = require("./routes/workout")
mongoose.connect(process.env.MONG_URI)
.then(() =>{
    app.listen((process.env.PORT), () => {
        console.log("listening on port " + process.env.PORT)
    })
}).catch(error => {console.log(error)})
app.use(express.json())
app.use((req, res, next) => {
console.log(req.method, req.path)
    next()
})

app.use('/api/workouts',workoutRoutes)
