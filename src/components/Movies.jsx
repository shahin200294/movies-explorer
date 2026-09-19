// import { useEffect, useState } from "react";

import { useLoaderData } from "react-router";
import MoviesCard from "./MoviesCard";

const Home = () => {
    // const [movies, setMovies] = useState([]);

    const movies= useLoaderData()

    // useEffect(() => {
    //     fetch("https://api.tvmaze.com/search/shows?q=girls")
    //         .then((res) => res.json())
    //         .then((data) => {
                // setMovies(data);
    //         });
    // }, []);
    // console.log(movies);

    return (
        <>
            <div className="justify-between flex m-10">
                <h1 className="text-4xl">Movies</h1>
                <div>
                    <input className=" border-2 p-4 rounded-2xl " type="text"
                        placeholder="Search movie..."
                    />
                </div>
            </div>
            <div>
                {/* {
                    movies.map((movies) => (<li key={movies.show.id}>
                        {movies.show.name}</li>))
                } */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 card bg-base-100 w-full shadow-sm">
                    {
                    movies.map((movies)=>(
                        <div>
                            <MoviesCard movies={movies}/>
                        </div>
                    ))
                }
                </div>
            </div>
        </>
    );
};

export default Home;