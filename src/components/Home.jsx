import React from 'react'
import {AiFillHtml5,AiOutlineGithub} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {SiJavascript,SiTailwindcss} from 'react-icons/si'
import {FaReact} from "react-icons/fa"

import {ProjectCard} from './ProjectCard'
import movies from '../assets/movie.jpg'
import student from "../assets/student.jpg"
import stream from "../assets/stream.jpg"


export const Home = () => {
  return (
    <div className='mt-36   text-white font-serif font-semibold'>
        <div className='pb-32 text-center'>
        <div className='text-3xl'>Hi, My name is Feza</div>
        <p className='text-lg font-sans mt-2'>A Front-End Developer with a passion for learning and creating.</p>
        </div>
        <h1 id='about' className='text-3xl text-[#381A04] text-center font-extrabold font-sans'>ABOUT</h1>

        <div className='mt-[-15px] bg-[#CEA371] pt-16 text-center'>
            <p className='font-sans text-xl px-16 leading-8'>I did my Bachelor of Engineering in the field of Information Technology(IT). I like building websites focusing more on the front-End. I am able to understand the designs of various websites and capable to code it.</p>
            <p className='mt-8 font-sans text-[#381A04] text-3xl font-bold'>SKILLS</p>
            <div className='flex justify-center space-x-5 mt-6 text-4xl text-white  py-1 rounded-xl mb-16'>
            <AiFillHtml5/>
            <IoLogoCss3/>
            <SiJavascript/>
            <FaReact/>
            <AiOutlineGithub/>
            <SiTailwindcss/>
            </div>
        <h1 id="projects" className='text-3xl text-[#381A04] font-extrabold font-sans'>PROJECTS</h1>

        </div>
        <div className='pt-16 bg-[#9A6E4E] mt-[-15px] '>
          <div className='grid gap-5 lg:flex justify-center lg:space-x-10 uppercase pb-12'>
          <ProjectCard image={movies} name='movies app' link="https://movie-e1d51.web.app/"/>
          <ProjectCard image={student} name='student-finance' link="https://studentfinance-e58c1.web.app/"/>
          <ProjectCard image={stream} name='chat-app' link="https://messaging-app-4e1a1.web.app/"/>
          </div>
          <h1 id='contact' className='text-3xl text-[#381A04] font-extrabold font-sans text-center'>CONTACT ME</h1>
        </div>
        <div className='bg-[#CEA371] mt-[-15px] pt-12'>
        <div className='text-center pb-12'>
        <form
          action="https://formspree.io/f/xvonowbe"
          method="POST"
          className='uppercase font-sans text-xl text-[#381A04]'
        >
          <label >
             email:<br/>
            <input type="email" name="email" className='w-1/3 py-1 rounded-md mb-4'/>
          </label>
          <br/>
          <label>
            Your message:<br/>
            <textarea name="message" className='w-1/3 rounded-md mb-4'></textarea>
          </label>
          <br/>
          <button type="submit" className=' px-3 w-1/4 hover:scale-110 transform ease-in-out duration-300 bg-[#381A04] text-[#CEA371] py-1 rounded-full'>Send</button>
        </form>
        </div>
        </div>
        
        
    </div>
  )
}
