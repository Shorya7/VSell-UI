import React from 'react';
import { FaBars } from "react-icons/fa";

const TopNav = () => {
  return (
    <div className='w-screen h-14 flex justify-between items-center px-6'>
        <p className='text-2xl font-bold'>
            VSell
        </p>
        <FaBars className='text-xl'/>
    </div>
  )
}

export default TopNav