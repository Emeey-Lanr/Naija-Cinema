import '../components/footer.css'
import { FaCameraRetro, FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className="footer">
            <div className="icon">
                <h1>NC</h1>
                <div className='iconlink'><FaCameraRetro /></div>
            </div>

            <div className='footeritems'>
                <div>
                    <h4>Movies</h4>
                    <p><a href=''>Blood Sister</a></p>
                    <p><a href=''>The Wedding Party</a></p>
                    <p><a href=''>Seen Darkness</a></p>
                    <p><a href=''>Lost</a></p>
                    <p><a href=''>Citation</a></p>
                    <p><a href=''>Brain Dead</a></p>
                    <p><a href=''>Son of santan</a></p>
                </div>
                <div>
                    <h4>Actors</h4>
                    <p><a href=''>Yemi Banks</a></p>
                    <p><a href=''>Deyemi KK</a></p>
                    <p><a href=''>Vicks Luis</a></p>
                    <p><a href=''>Odunmide Wayne</a></p>
                    <p><a href=''>Floke Brain</a></p>
                </div>

                <div>
                    <h4>Contact</h4>
                    <p><a href=''><FaInstagram />Instagram</a></p>
                    <p><a href=''><FaFacebookF />Facebook</a></p>
                    <p><a href=''><FaTwitter />Twiiter</a></p>
                    <p><a href=''><FaWhatsapp />Whatsapp</a></p>
                </div>
                <div>
                    <h4>More About us</h4>
                    <p><a href=''>About Us</a></p>
                    <p><a href=''>Legal</a></p>
                </div>
                <div>
                    <h4>Support</h4>
                </div>
            </div>
            <div className='footerend'>
                <div><p>Naijacinema 2022 &copy; All rights reserved</p></div>
            </div>
        </div>
    )
}
export default Footer