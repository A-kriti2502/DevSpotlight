import React from 'react';

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nodejs from "../assets/node.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
    const techs = [
        {
          id: 1,
          src: html,
          title: "HTML",
          style: "shadow-orange-500",
        },
        {
          id: 2,
          src: css,
          title: "CSS",
          style: "shadow-blue-500",
        },
        {
          id: 3,
          src: javascript,
          title: "JavaScript",
          style: "shadow-yellow-500",
        },
        {
          id: 4,
          src: reactImage,
          title: "React",
          style: "shadow-blue-600",
        },
        {
          id: 5,
          src: tailwind,
          title: "Tailwind",
          style: "shadow-sky-400",
        },
        {
          id: 6,
          src: nodejs,
          title: "Next JS",
          style: "shadow-white",
        },
        {
          id: 7,
          src: graphql,
          title: "GraphQL",
          style: "shadow-pink-400",
        },
        {
          id: 8,
          src: github,
          title: "GitHub",
          style: "shadow-gray-400",
        },
      ];
  return (
    
    <div className=' mt-15 h-5/6 w-full  bg-gradient-to-b to-black via-black from-gray-900 text-white p-9'>
      <div className='h-5/6 w-5/6 mx-auto flex flex-col items-center'>
        
        <div >
            <h2 className='font-bold text-5xl text-center'>Experience</h2>
            <p className="text-gray-500 py-4 max-w-md">These are the technologies I've worked with</p>
        </div>
        
        <div className=' overflow-hidden relative'>
            <div className="w-full flex flex-row flex-wrap gap-4 junstify-center mx-auto items-center py-8 px-12 sm:px-0 ">
            {techs.map(({ id, src, title, style }) => (
                    <div
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg`}
                    >
                    <img src={src} alt="" className="w-10 mx-auto md:w-20" />
                    </div>
            ))}
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Experience
