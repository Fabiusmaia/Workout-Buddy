const Workout = require("../models/Workout")
const mongoose = require("mongoose")

const createWorkout = async (req, res) => {
    const{title, load, reps} = req.body
    console.log(req.body)
    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch(error){
       res.status(500).json({error: error.message})
    }
}
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

const getSingleWorkout = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout."})
    }
    const workout = await Workout.findById(id);
    res.status(200).json(workout)
}

const deleteWorkout = async (req,res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout."})
    }
    const workout = await Workout.findOneAndDelete({_id: id})
    if(!workout){
        return res.status(404).json({error: "No such workout."})
    }
    res.status(200).json( { workout } )
}

const updateWorkout = async (req,res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout."})
    } const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if(!workout){
        return res.status(404).json({error: "No such workout."})
    }
    res.status(200).json(workout)
}
module.exports = {
createWorkout,
getWorkouts,
getSingleWorkout,
deleteWorkout,
updateWorkout
}