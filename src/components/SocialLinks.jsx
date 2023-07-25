import React from 'react';
import {FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {

    const links =[
        {
            id:1,
            child:(
                <>
                    LinkedIn <FaLinkedin size={25}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/aakriti-abhay-singh-355626213/',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                    GitHub <FaGithub size={25}/>
                </>
            ),
            href: 'https://github.com/A-kriti2502',
            
        },
        {
            id:3,
            child:(
                <>
                    Mail <HiOutlineMail size={25}/>
                </>
            ),
            href: 'mailto:aakritiannu@gmail.com',
        },
        {
            id:4,
            child:(
                <>
                    Resume <BsFillPersonLinesFill size={25}/>
                </>
            ),
            href: '/Resume.pdf',
            style: 'rounded-br-md',
            download:true,
        },

    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>

        {links.map( ({id,child,href,style,download})=> (
            <li 
            key={id}
            className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " " + style}>
                <a 
                href={href} 
                className="flex justify-between items-center w-full text-white"
                download={download}
                target='_blank'
                rel="noreferrer">
                    {child}
                </a>
             </li>
        ) )}
      </ul>
    </div>
  )
}

export default SocialLinks
