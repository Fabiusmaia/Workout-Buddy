import {useEffect} from 'react'
import { UseWorkoutsContext } from '../hooks/UseWorkoutsContext'

import Workoutdetails from '../components/Workoutdetails'
import Workoutform from '../components/Workoutform'
function Home(){
    const {workouts, dispatch} =  UseWorkoutsContext()
        useEffect(()=> { 
        const fetchWorkouts = async () => {
            const response = await fetch("/api/workouts")
            const json = await response.json()
            if(response.ok){
                dispatch({type:"SET_WORKOUT", payload: json})
            }
        }
        fetchWorkouts()
    },[])
return(
<div className='home'>
    <div className='workouts'>
        {workouts && workouts.map((workout) => (
          <Workoutdetails key={workout._id} workout={workout} />
        ))}
    </div>
    <Workoutform />

</div>
)
}

export default Home