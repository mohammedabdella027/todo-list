import React from 'react'
import DropdownMenu from './DropdownSelection'
import searchIcon from '../../assets/icons/search.svg'
import Moon from '../../assets/icons/moon.svg'

function Search({darkMode, setDarkMode, search, setSearch}) {
    return (
        <div className='flex justify-center gap-4'>
        <div className='relative w-55 md:w-149 h-9 border border-[#6C63FF] rounded-[5px]'>
            <input type="text" placeholder='Search note...' className='placeholder:text-[#C3C1E5] w-full h-full outline-none font-medium text-[16px] pl-4 text-[#6C63FF]'
            
            value={search}

            onChange={(e) => setSearch(e.target.value)}
            />

            <button className='absolute right-4 top-1.5 cursor-pointer'><img src={searchIcon} alt="Search" /></button>
        </div>

        <DropdownMenu />

        <button onClick={() => setDarkMode(!darkMode)} className='bg-[#6C63FF] hover:bg-[#5850DD] w-9 h-9 rounded-[5px] cursor-pointer'>
            <img src={Moon} alt="moon" className='m-auto' />
        </button>

        </div>
    )
}

export default Search
