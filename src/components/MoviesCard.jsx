
import { Link } from "react-router";

const MoviesCard = ({ movies }) => {
    return (
        <div className="grid grid-cols-4">
            <div className=" card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={movies.show.image?.medium}
                        alt={movies.show.name}
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title"> {movies.show.name}</h2>
                    <p>{movies.show.summary?.replace(/<[^>]*>/g, "").slice(0, 100)}</p>

                    <div className="card-actions">
                        <Link to={"/Details:id"}>
                            <button className="btn btn-ghost normal-case bg-amber-300">Show Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoviesCard;