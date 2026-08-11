import React from 'react'
import Search from './Search'

function Header() {
    return (
        <>
        <h1 className='font-kanit font-medium text-2xl md:text-[26px] text-center pt-10 pb-5'>TODO LIST</h1>

        <Search />
        </>
    )
}

export default Header