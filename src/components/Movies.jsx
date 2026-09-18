import { useEffect, useState } from "react";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=girls")
            .then((res) => res.json())
            .then((data) => {
                setMovies(data);
            });
    }, []);
    console.log(movies);

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
                {
                    movies.map((movies) => (<li key={movies.show.id}>
                        {movies.show.name}</li>))
                }
            </div>
        </>
    );
};

export default Home;