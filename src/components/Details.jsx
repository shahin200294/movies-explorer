import { useLoaderData, Link } from "react-router";

const Details = () => {
    const movie = useLoaderData();

    return (
        <div className="p-10 border-amber-50 gap-5 justify-center flex ">
            <Link to="/" className="btn mb-5 p-5 rounded-2xl bg-amber-300">Home</Link>
            <Link to="/Movies" className="btn mb-5 p-5 rounded-2xl bg-amber-300">Movies</Link>

            <img
                src={movie?.image?.original || movie?.image?.medium}
                alt={movie?.name}
                className="rounded-xl"
            />
            <h1 className="text-4xl font-bold mt-4">{movie?.name}</h1>


           
        </div>
    );
};

export default Details;