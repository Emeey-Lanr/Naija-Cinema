import { FaCameraRetro, FaSearch } from 'react-icons/fa'
import '../components/Header.css'
const Header = () => {

    return (
        <div className='header'>
            <div className="icon">
                <h1>N</h1>
                <div className='iconlink'><FaCameraRetro /></div>
            </div>
            <div>
                <ul>
                    <li><a href="ll">Tv Show</a></li>
                    <li><a href="ll">Yollywood</a></li>
                    <li><a href="ll">Igbwood</a></li>
                    <li><a href="ll">Kannywood</a></li>
                    <li><a href="ll">Nollywood</a></li>
                    <li><a href="ll">About Us</a></li>
                </ul>
            </div>
            <div>
                <button><FaSearch /></button>
            </div>
        </div >
    )
}

export default Header