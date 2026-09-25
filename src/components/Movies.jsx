// import { useEffect, useState } from "react";

import { useLoaderData } from "react-router";
import MoviesCard from "./MoviesCard";
import { useState } from "react";


const Home = () => {
    const movies= useLoaderData()

    const [search, setSearch] = useState("")
    // const [movies, setMovies] = useState([]);
    

    const filterMovies = movies.filter((movie)=>
     movie.show.name.toLowerCase().includes(search.toLowerCase())
    )
   


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
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
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
                    filterMovies.map((movies)=>(
                        <div key={movies.show.id}>
                            <MoviesCard movies={movies.show}/>
                        </div>
                    ))
                }
                </div>
            </div>
        </>
    );
};

export default Home;