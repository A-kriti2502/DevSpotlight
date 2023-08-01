import React, { useState } from 'react';

import code from "../assets/portfolio/code.png";
import blog from "../assets/portfolio/blog.png";
import marvel from "../assets/portfolio/marvel.png";
import resume from "../assets/portfolio/resume.png";
import RPS from "../assets/portfolio/RPS.png";
import weather from "../assets/portfolio/weather.png";

const Projects = () => {
    const [currentTab, setCurrentTab] = useState("1");
    const project = [
      {
        id: 1,
        domain: 'Development',
        content: [
          {
            title: 'ComicVerse',
            src: marvel,
            Glink:"https://github.com/A-kriti2502/ComicVerse"
          },
          {
            title: 'RapidResume',
            src: resume,
            Glink:"https://github.com/A-kriti2502/ComicVerse"
          },
          {
            title: 'DevDiaries',
            src: blog,
            Glink:"https://github.com/A-kriti2502/ComicVerse"
          },
          {
            title: 'RPS Battle',
            src: RPS,
            Glink:"https://github.com/A-kriti2502/ComicVerse"
          },
          {
            title: 'Weather Tracker',
            src: weather,
            Glink:"https://github.com/A-kriti2502/ComicVerse"
          }
        ]
      },
      {
        id: 2,
        domain: 'Machine Learning',
        content: [
          {
            title: 'AI-HandSigns-Battle',
            src: code,
            Glink:"https://github.com/A-kriti2502/ComicVerse"
          },
          {
            title: 'InfluencerGo',
            src: code,
            Glink:"https://github.com/A-kriti2502/ComicVerse"
          },
          {
            title: 'HealthProSpec',
            src: code,
            Glink:"https://github.com/A-kriti2502/ComicVerse"
          },
          {
            title: 'Marco',
            src: code,
            Glink:"https://github.com/A-kriti2502/ComicVerse"
          },
        ]
      }
    ];
  
    const handleTabClick = (e) => {
      setCurrentTab(e.target.id);
      console.log(typeof(e.target.id));
        // set style - w-fit px-3 py-3 flex flex-row items-center rounded-md bg-gradient-to-r from-red-400 to-purple-800
      
    };
    
    return (
      <div name="portfolio"
      className="w-full bg-gradient-to-b from-black via-black to-gray-900 p-4  text-white">
        <div className='h-5/6 w-5/6 mx-auto flex flex-col items-center gap-7'>
          <div className='text-center'>
            <h2 className='font-bold text-5xl'>Projects</h2>
            <p className='text-gray-500 py-4 max-w-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni praesentium a cumque! Assumenda!</p>
          </div>
  
          <div className='flex flex-row gap-7'>
            {project.map((tab, i) => (
              <button
                key={i}
                className={`text-white cursor-pointer ${currentTab === tab.id.toString() ? 'bg-gradient-to-r from-red-400 to-purple-800 p-2 rounded-md' : ''}`}
                disabled={currentTab === `${tab.id}`}
                onClick={handleTabClick}
                id={tab.id}
              >
                {tab.domain}
              </button>
            ))}
          </div>
  
          <div>
            {project.map((tab) => 
              <div key={tab.id}>
                {currentTab === `${tab.id}` && 
                  <div className='flex flex-col gap-5'>
                    {/* <h2>{tab.domain}</h2> */}
                    <div className='flex flex-row gap-3 flex-wrap justify-center'>
                      {tab.content.map(({ title, src, Glink }, k) => (
                        <div key={k} className=''>
                            <div className='shadow-md rounded-lg text-center flex flex-col gap-3 hover:scale-105 duration-200'>
                                <p>{title}</p>
                                <img src={src} className='h-30 w-40 md:h-60 md:w-96 project-image-sm ' alt={title}/>
                                <a href={Glink}><button className='px-6 py-3 hover:bg-gradient-to-r from-red-400 to-purple-800 p-2 rounded-md'>Github</button></a>
                            </div>
                        </div>
                      ))}
                    </div>
                  </div>
                }
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  export default Projects;