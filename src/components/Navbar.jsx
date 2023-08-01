import React, { useState } from 'react'
import { FaBars , FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll";

const Navbar = ({nav , setnav}) => {
    const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "portfolio",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "contact",
    },
    ];

    // const [nav , setnav] =useState(false);


    return (
      <div className="flex justify-between items-center w-full h-20  bg-gradient-to-b from-gray-900 to-black text-white px-4 z-100">
        <div className='font-signature text-6xl mt-2 ml-2 bg-gradient-to-r from-red-400 to-purple-800 text-transparent bg-clip-text font-bold p-3'>Aakriti</div>
    
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={800}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
    
        <div onClick={() => setnav(!nav)} className="cursor-pointer pr-4 z-10 md:hidden">
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        
        {nav && (
          <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
            {links.map(({ id, link }) => (
              <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
                <Link to={link} smooth duration={800} onClick={() => setnav(!nav)}>
                {link}
              </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
    
}

export default Navbar
