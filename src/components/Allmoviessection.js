import Topmovies from "./Topmovies"
import '../components/allmoviesect.css'
import Moviepreview from "./Moviepreview"

const Allmoviessection = () => {
    return (
        <div className="allmovies">
            <Topmovies />
            <Moviepreview />
        </div>
    )
}

export default Allmoviessection