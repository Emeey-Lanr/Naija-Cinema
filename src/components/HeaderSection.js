import Header from "./Header"
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa'
import { useState } from 'react'
import vid from '../Images/kob.gif'
import pic from '../Images/kob1.jpg'

let m = 0;
function HeaderSection() {
    const [play, setPlay] = useState(true)
    let back = {
        backgroundImage: `url(${vid})`,


    }
    let firstback = {
        background: `url(${pic})`,
        width: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }
    const changeit = () => {
        if (m === 0) {
            m = m + 1
            setPlay(false)
        } else if (m === 1) {
            m = 0
            setPlay(true)
        }
    }
    return (
        <div className="headersection" style={play ? firstback : back}>
            <div className="headersectionCover">
                <Header />
                <div className="headersectionContent">
                    <div>
                        <h2><span>KING</span> OF BOYS</h2>
                        <p>Her insatiable appetite for power drives Eniola,<br />
                            a businesswoman and philanthropist, into politics.<br />
                            As she is drawn into a struggle for power her criminal<br />
                            baggage will prove a heavy burden.</p>
                        <div className="moreinfo">
                            <div><span className="morehead">Genre :</span><span>Political Thriller</span></div>
                            <div><span className="morehead">Duration :</span><span>2h 49m</span></div>
                            <div><span className="morehead">Rating :</span><span>4.9</span></div>
                        </div>
                        <div className="buttonplay">
                            <button onClick={() => changeit()} >{play ? <FaPlayCircle /> : <FaPauseCircle />}</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeaderSection