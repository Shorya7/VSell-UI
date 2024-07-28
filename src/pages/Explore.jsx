import React from 'react'
import SearchBar from '../assets/SearchBar'
import Fruits from '../assets/fruits.svg'

const Explore = () => {
  return (
    <>
    <div className='text-center mx-1 font-extrabold text-2xl'>Find Products</div>
    <SearchBar/>
    <div className=''>
      <div className='card'>
        <img src={Fruits} alt='Fresh Fruits & Vegetables'/>
        <p className='font-bold text-base'>Fresh Fruits & Vegetables</p>
      </div>
    </div>
    </>
  )
}

export default Explore