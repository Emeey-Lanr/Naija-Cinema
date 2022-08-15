import { FaPlus, FaMinus } from 'react-icons/fa'
import { useState } from 'react'
import '../components/faq.css'
let quest1 = 0
let quest2 = 0
let quest3 = 0
let quest4 = 0
let quest5 = 0
function FAQ({ men }) {
    const [q1, setQ1] = useState(true)
    const [q1q, setq1q] = useState('')
    const [q2, setQ2] = useState(true)
    const [q2q, setq2q] = useState('')
    const [q3, setQ3] = useState(true)
    const [q3q, setq3q] = useState('')
    const [q4, setQ4] = useState(true)
    const [q4q, setq4q] = useState('')
    const [q5, setQ5] = useState(true)
    const [q5q, setq5q] = useState('')
    const questions1 = () => {
        if (quest1 === 0) {
            quest1 = quest1 + 1
            setQ1(false)
            setq1q('Naija cinema is an online movie cinema offers nigerian movies, some which are  paid for and some with are free')
        } else if (quest1 === 1) {
            quest1 = 0
            setQ1(true)
            setq1q('')
        }
        console.log(quest1)
    }
    const questions2 = () => {
        if (quest2 === 0) {
            quest2 = quest2 + 1
            setQ2(false)
            setq2q('It entirely free for a month, user gets to watch any available Nigerian movie of their type for free within the stipulated time')
        } else if (quest2 === 1) {
            quest2 = 0
            setQ2(true)
            setq2q('')
        }

    }
    const questions3 = () => {
        if (quest3 === 0) {
            quest3 = quest3 + 1
            setQ3(false)
            setq3q('You can sign up for different bundles that fit into you current status, we have, golden, sliver and bronze sect')
        } else if (quest3 === 1) {
            quest3 = 0
            setQ3(true)
            setq3q('')
        }

    }
    const questions4 = () => {
        if (quest4 === 0) {
            quest4 = quest4 + 1
            setQ4(false)
            setq4q('You provide your card details for instant subcription after the end of the free one month, the sect wanted would have being selected by the user before the enjoyment of the free awoof')
        } else if (quest4 === 1) {
            quest4 = 0
            setQ4(true)
            setq4q('')
        }

    }
    const questions5 = () => {
        if (quest5 === 0) {
            quest5 = quest5 + 1
            setQ5(false)
            setq5q('Every user is secured on this platform, naija cinema enables the safe room for keeping movies that you to keep private with a password attched to the room for safe guarding, it can be only accesed by you and not even naija cinema')
        } else if (quest5 === 1) {
            quest5 = 0
            setQ5(true)
            setq5q('')
        }

    }

    return (
        <div className='faq'>
            <div className='faqsection'>
                <div className='faqheader'>
                    <h5>FAQ</h5>
                    <p>Puzzled ?</p>
                </div>
                <div className='questionhouse'>
                    <div className='questions'>
                        <h6>How does it work</h6><div><button onClick={() => questions1()}>{q1 ? <FaPlus /> : <FaMinus />}</button></div>
                    </div>
                    <p>{q1q}</p>
                </div>
                <div className='questionhouse'>
                    <div className='questions'>
                        <h6>Getting Started</h6><div><button onClick={() => questions2()}>{q2 ? <FaPlus /> : <FaMinus />}</button></div>
                    </div>
                    <p>{q2q}</p>
                </div>
                <div className='questionhouse'>
                    <div className='questions'>
                        <h6>Available Services</h6><div><button onClick={() => questions3()}>{q3 ? <FaPlus /> : <FaMinus />}</button></div>
                    </div>
                    <p>{q3q}</p>
                </div>
                <div className='questionhouse'>
                    <div className='questions'>
                        <h6>How does the free payement work ?</h6><div onClick={() => questions4()}><button>{q4 ? <FaPlus /> : <FaMinus />}</button></div>
                    </div>
                    <p>{q4q}</p>

                </div>
                <div className='questionhouse'>
                    <div className='questions'>
                        <h6>Privacy</h6><div><button onClick={() => questions5()}>{q5 ? <FaPlus /> : <FaMinus />}</button></div>
                    </div>
                    <p>{q5q}</p>
                </div>
            </div>
        </div>
    )
}


export default FAQ