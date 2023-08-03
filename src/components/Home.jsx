import React from 'react';
import heroImage from '../assets/main.png';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useState , useEffect } from 'react';
import { Link } from "react-scroll";

const Home = ({nav , setnav}) => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Full Stack Developer" , "ML Enthusiast","Web Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-900 p-4 z-[-100]"
    >
      <div className="w-5/6 mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row gap-10 ">
        
        <div className="flex flex-col justify-center h-full h-6/12">
          <h4 className='text-4xl sm:text-3xl font-bold text-white'>{`I'm`}</h4>
          <h3 className='text-white font-bold text-5xl'>{text}</h3>
          <p className='text-gray-500 py-4 max-w-md'>
            Hi there! I'm Aakriti, a creative developer with a passion for 
            building innovative web and machine learning projects.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-400 to-purple-800 cursor-pointer">
                <Link to="portfolio" smooth duration={800}>
                Portfolio
                {/* <span className='group-hover:rotate-90 duration-300'>
                  <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                </span> */}
                </Link>    
            </button>
          </div>
        </div>

        <div className={`md:h-7/12 md:w-7/12 sm:h-9/12 sm:w-9/12 z-10 ${nav ? 'hidden' : 'block'}`}>
          <img src={heroImage} alt="my profile" className='mt-[-20] rounded-2xl mx-auto md:w-full animate-waving-hand'></img>
        </div>

      </div>
    </div>
  )
}

export default Home
