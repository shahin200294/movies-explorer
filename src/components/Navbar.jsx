import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
    const [isOpen, setIsOpen]= useState(false);

    return (

        <div className="navbar bg-neutral text-neutral-content font-mono border border-primary/40 rounded-2xl px-4">
            <div className="flex-none lg:hidden">
                <button  onClick={()=> setIsOpen(!isOpen)} className=" md:hidden text-2xl btn btn-square btn-ghost">
                    <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                {
                    isOpen && (
                        <ul className=" md:hidden mt-4 flex flex-col gap-4 absolute top-full rounded-xl p-4 w-full bg-gray-700 opacity-95">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/Movies"}>Movies</Link></li>
                        <li><Link to={"/About"}>About</Link></li>
                    </ul>
                    )
                }
            </div>

            <div className="flex-1 flex items-center gap-2">
                <Link to={"/"} className="btn btn-ghost text-lg normal-case tracking-wide">MovieExplorer</Link>
            </div>

            <div className="flex justify-between items-center gap-20 ">
                <div className="">
                    <ul className=" hidden md:flex list-none gap-6 ">
                        <li><Link to={"/"} className="btn btn-ghost normal-case bg-amber-300">Home</Link></li>
                        <li><Link to={"/Movies"} className="btn btn-ghost normal-case bg-amber-300">Movies</Link></li>
                        {/* <li><Link to={"/About"}>About</Link></li> */}
                    </ul>
                </div>

                <div className=" lg:flex flex-none">
                    <Link to={"/Movies"} className="btn btn-ghost normal-case bg-amber-300">[ Browse Movies ]</Link>
                </div>
            </div>
        </div>

    );
};

export default Navbar;