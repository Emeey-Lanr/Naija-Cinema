import { FaCameraRetro, FaSearch, FaToggleOff, FaTimes } from 'react-icons/fa'
import '../components/Header.css'
import { useState } from 'react'
let m = 0
const Header = () => {
    const borderb = {
        borderBottom: "2px solid #42be42",
    }
    const bordern = {
        borderBottom: "none",
    }
    const [link1, setLink1] = useState(false)
    const [link2, setLink2] = useState(false)
    const [link3, setLink3] = useState(false)
    const [link4, setLink4] = useState(false)
    const [link5, setLink5] = useState(false)
    const [link6, setLink6] = useState(false)
    const [bodybar, setbodybar] = useState(false)

    const showlink1 = (check) => {
        setLink1(true)
        setLink2(false)
        setLink3(false)
        setLink4(false)
        setLink5(false)
        setLink6(false)
    }
    const showlink2 = () => {
        setLink1(false)
        setLink2(true)
        setLink3(false)
        setLink4(false)
        setLink5(false)
        setLink6(false)
    }
    const showlink3 = () => {
        setLink1(false)
        setLink2(false)
        setLink3(true)
        setLink4(false)
        setLink5(false)
        setLink6(false)
    }
    const showlink4 = () => {
        setLink1(false)
        setLink2(false)
        setLink3(false)
        setLink4(true)
        setLink5(false)
        setLink6(false)
    }
    const showlink5 = () => {
        setLink1(false)
        setLink2(false)
        setLink3(false)
        setLink4(false)
        setLink5(true)
        setLink6(false)
    }
    const showlink6 = () => {
        setLink1(false)
        setLink2(false)
        setLink3(false)
        setLink4(false)
        setLink5(false)
        setLink6(true)
    }
    const setbar = () => {
        setbodybar(true)
    }
    const remove = () => {
        setbodybar(false)
    }

    return (
        <div className='header'>
            <div className="icon">
                <h1>NC</h1>
                <div className='iconlink'><FaCameraRetro /></div>
            </div>
            <div className='links'>
                <ul>
                    <li onMouseMove={showlink1} className="link1" style={link1 ? borderb : bordern} ><a href="ll"> Tv Show</a></li>
                    <li onMouseMove={showlink2} style={link2 ? borderb : bordern}><a href="ll" className='link1'>Yollywood</a></li>
                    <li onMouseMove={showlink3} style={link3 ? borderb : bordern}><a href="ll" className='link1'>Igbwood</a></li>
                    <li onMouseMove={showlink4} style={link4 ? borderb : bordern}><a href="ll" className='link1'>Kannywood</a></li>
                    <li onMouseMove={showlink5} style={link5 ? borderb : bordern}><a href="ll" className='link1'>Nollywood</a></li>
                    <li onMouseMove={showlink6} style={link6 ? borderb : bordern}><a href="ll" className='link1'>About Us</a></li>
                </ul>
            </div>
            <div className='btn'>
                <button><FaSearch /></button>
            </div>
            <div className='toogleoff'>
                <button onClick={() => setbar()}><FaToggleOff /></button>
            </div>
            {bodybar &&
                <div className='nav'>
                    <div className='remove'><button onClick={() => remove()}><FaTimes /></button></div>
                    <div className='navcontent'>
                        <div className=''>
                            <div className='bb'>
                                <button ><FaSearch /></button>
                            </div>
                            <div className='sect1'>
                                <p><a href=''>Tv shows</a></p>
                            </div>
                            <div className='sect2'>
                                <p><a href=''>Yollywood</a></p>
                            </div>
                            <div className='sect3'>
                                <p><a href=''>Igbwood</a></p>
                            </div>
                            <div className='sect4'>
                                <p><a href=''>Nollywood</a></p>
                            </div>
                            <div className='sect5'>
                                <p><a href=''>About Us</a></p>
                            </div>
                        </div>
                    </div>
                </div>


            }
        </div >
    )
}

export default Header