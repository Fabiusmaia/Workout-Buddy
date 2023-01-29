const express = require("express");
const router = express.Router();
const Workout = require("../models/Workout.js")
const {
    createWorkout,
    getWorkouts,
getSingleWorkout,
deleteWorkout,
updateWorkout} = require("../controllers/workoutControllers")

router.get('/', getWorkouts)
router.get('/:id', getSingleWorkout)
router.post('/', createWorkout) 
router.delete('/:id', deleteWorkout)
router.patch('/:id', updateWorkout)
module.exports = router;