import React from 'react'
import searchIcon from '../../assets/icons/search.svg'
import Down from '../../assets/icons/down.png'
import Moon from '../../assets/icons/moon.svg'

function Search() {
    return (
        <div className='flex justify-center gap-4'>
        <div className='relative w-85 sm:w-149 h-9 border border-[#6C63FF] rounded-[5px]'>
            <input type="text" placeholder='Search note...' className='placeholder:text-[#C3C1E5] w-full h-full outline-none font-medium text-[16px] pl-4 text-[#6C63FF]'/>

            <button className='absolute right-4 top-1.5 cursor-pointer'><img src={searchIcon} alt="Search" /></button>
        </div>

        <button className='bg-[#6C63FF] hover:bg-[#5850DD] w-22 h-9 rounded-[5px] flex gap-5 items-center px-3 cursor-pointer'>
            <p className='font-medium text-[18px]  text-white'>ALL</p>
            <p><img src={Down} alt="down" className='w-2 h-1' /></p>
        </button>

        <button className='bg-[#6C63FF] hover:bg-[#5850DD] w-9 h-9 rounded-[5px] cursor-pointer'>
            <img src={Moon} alt="moon" className='m-auto' />
        </button>

        </div>
    )
}

export default Search
