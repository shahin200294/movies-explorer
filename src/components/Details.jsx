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


            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            
            <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </div>
            </dialog>
        </div>
    );
};

export default Details;