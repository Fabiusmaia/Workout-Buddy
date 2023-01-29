import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <header>
            <h1></h1>
            <div className="container">
            <Link to="/"><h1>Workout Buddy</h1>
            </Link>
            </div>
            </header>
    )
}

export default Navbar