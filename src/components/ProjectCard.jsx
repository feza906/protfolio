import React from 'react'


export const ProjectCard = (props) => {
  return (
    <a href={props.link}>
    <div className="hover:scale-110 transform duration-300 ease-in-out cursor-pointer">
        <img src={props.image} className='h-60 w-56 rounded-xl'/>
        <p className='font-sans text-center'>{props.name}</p>

    </div>
    </a>
  )
}
