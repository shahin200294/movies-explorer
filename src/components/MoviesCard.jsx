import { useRef, useState } from "react";

const MoviesCard = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const modalRef = useRef(null);

  const handleOpen = () => {
    setSelectedMovie(movies);
    modalRef.current.showModal();
  };

  return (
    <>
      <div className="card bg-base-100 w-full shadow-sm">
        <figure className="px-10 pt-10">
          <img src={movies.image?.medium} alt={movies.name} />
        </figure>

        <div className="card-body items-center text-center">
          <h2 className="card-title">{movies.name}</h2>

          <button onClick={handleOpen} className="btn bg-amber-300">
            Show Details
          </button>
        </div>
      </div>

      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          {selectedMovie && (
            <>
             <div className=" justify-center items-center">
               <div className="justify-center flex">
                  <img
                src={selectedMovie.image?.medium}
                alt={selectedMovie.name}
                className="w-100% h-100% justify-center  rounded-lg mb-4"
              />
               </div>
              <h3 className="text-xl font-bold">{selectedMovie.name}</h3>
               <div className="flex gap-4 my-3 text-sm">
            <span className="bg-amber-500 px-3 py-1 rounded-full">
              ⭐ {selectedMovie.rating?.average || "N/A"}
            </span>

            <span className="bg-gray-500 px-3 py-1 rounded-full">
              {selectedMovie.language}
            </span>
          </div>

          <p className="font-semibold mb-2">
            Genre: {selectedMovie.genres?.join(", ")}
          </p>
              <p className="py-3">
                {selectedMovie.summary?.replace(/<[^>]*>/g, "")}
              </p>
             </div>
            </>
          )}
        </div>
      </dialog>
    </>
  );
};

export default MoviesCard;