import '../components/allmoviesect.css'
import { IoEyeSharp, IoHeartOutline } from 'react-icons/io5'

const Topmovies = () => {
    return (
        <div className='topmovies'>
            <h1>Top Movies</h1>
            <div className='topmoviessect'>
                <div className='movie1'>
                    <div className='movie1back'>
                        <div className='rating'>4.5</div>
                        <div className='moviedetails'>
                            <div>
                                <h3>Blood Sisters</h3>
                                <div>
                                    <span className='views'><IoEyeSharp />300k</span>
                                    <span><IoHeartOutline /> </span>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className='movie2'>
                    <div className='movie1back'>
                        <div className='rating'>3.5</div>
                        <div className='moviedetails'>
                            <div>
                                <h3>Expandables</h3>
                                <div>
                                    <span className='views'><IoEyeSharp />116k</span>
                                    <span><IoHeartOutline /> </span>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className='movie3'>
                    <div className='movie1back'>
                        <div className='rating'>3.5</div>
                        <div className='moviedetails'>
                            <div>
                                <h3>Lagos Housewives</h3>
                                <div>
                                    <span className='views'><IoEyeSharp />116k</span>
                                    <span><IoHeartOutline /> </span>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className='movie4'>
                    <div className='movie1back'>
                        <div className='rating'>3.0</div>
                        <div className='moviedetails'>
                            <div>
                                <h3>Citation</h3>
                                <div>
                                    <span className='views'><IoEyeSharp />110k</span>
                                    <span><IoHeartOutline /> </span>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Topmovies