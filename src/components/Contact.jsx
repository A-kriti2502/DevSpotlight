import React from 'react'

const Contact = () => {
  return (
    <div className='h-screen w-full bg-gradient-to-b to-black via-black from-gray-900 p-4  text-white'>
      <div className='h-2/4 w-full flex flex-col justify-end items-center gap-6'>
        <div className='flex flex-col'>
          <h2 className='font-bold text-5xl text-center'>Contact me</h2>
          <p className="text-gray-500 py-4 max-w-md">Submit the form below to get in touch with me</p>
        </div>
      </div>
      <div className='h-2/4 w-2/6 mx-auto flex justify-center items-center'>
          <form
          action='/'
          method='POST'
          className='flex flex-col w-full gap-4'
          >
            <input
             type="text"
             name="name"
             placeholder="Enter your name"
             required
             className="p-2 font-medium bg-white border-2 rounded-md text-gray-700 focus:outline-none border-solid border-black"
            />
            
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              required
              className="p-2 font-medium bg-white border-2 rounded-md text-gray-700 focus:outline-none border-solid border-black"
            />

            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 font-medium bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-400 to-purple-800 cursor-pointer">
              Let's talk
            </button>

          </form>
        </div>
    </div>
  )
}

export default Contact;
