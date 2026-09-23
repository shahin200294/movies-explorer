import movieImage from '../assets/image/hero-bannar.png'
import { Link } from 'react-router';

const Home = () => {

    return (
        <div className='justify-center items-center relative'>
            {/* // hero container */}
            <div className="absolute inset-0 flex items-center">
                <div className='pl-10 py-5 relative items-center justify-center '>
                    <h1 className='text-4xl font-bold '>Explore thousands of <br /> <span className='text-[rgb(246,106,67)]'>movies</span> and shows.</h1>
                    <p className='text-gray-300 mt-3'>Dive into a world of popular classics, trending hits, <br /> and hidden gems — all in one cinematic dashboard.</p>
                    <Link to="/Movies">
                    <button className="btn mb-5 p-5 rounded-2xl bg-[rgb(246,106,67)] mt-5 font-semibold text-xl">Explore Now</button>
                    </Link>
                </div>
            </div>

            {/* // hero banner */}
            <div>
            <img src={movieImage} alt="Movie Image" />
            </div>
        </div>
    );
};

export default Home;