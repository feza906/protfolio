import React from 'react'
import {AiFillLinkedin,AiOutlineGithub,AiFillTwitterCircle} from 'react-icons/ai'

export const Footer = () => {
  return (
    <div>
        <div className='flex py-1 justify-center space-x-10 text-3xl'>
            <a href='https://www.linkedin.com/in/feza-fatima-2537681b2/' target="_blank"><AiFillLinkedin /></a>
            <a href='https://github.com/feza906' target="_blank"><AiOutlineGithub/></a>
            <a href='https://twitter.com/Fezacodes' target="_blank"><AiFillTwitterCircle/></a>
        </div>
    </div>
  )
}
