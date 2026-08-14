import React from 'react'

import DetectiveCheckFootPrint from '../../assets/images/detective-check-footprint.png'
import Plus from '../../assets/icons/plus.png'
import NewTodo from './NewTodo'

function TodoList({ newTodo, setNewTodo}) {
    return (
        <section className='relative mx-auto w-full md:w-187 h-113'>
            <img src={DetectiveCheckFootPrint} alt="DetectiveCheckFootPrint"  className='m-auto pt-9' />

            <p className='text-center pt-6 font-kanit font-normal text-[20px]'>Empty...</p>

            <button onClick={() => setNewTodo(!newTodo)} 
            className='bg-[#6C63FF] hover:bg-[#5850DD] cursor-pointer rounded-full text-white w-12.5 h-12.5 absolute right-4 bottom-4'><img src={Plus} alt="plus" className='m-auto' /></button>
        </section>
    )
}

export default TodoList