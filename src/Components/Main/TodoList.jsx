import React from 'react'
import DetectiveCheckFootPrint from '../../assets/images/detective-check-footprint.png'
import Plus from '../../assets/icons/plus.png'
import Check from '../../assets/icons/check.png'
import Delete from '../../assets/icons/delete.png'
import RecPurple from '../../assets/icons/rectangle-purple.png'
import Rec from '../../assets/icons/rectangle.png'
import Update from '../../assets/icons/update.png'

function TodoList({ darkMode, newTodo, setNewTodo, todos, setTodos}) {

    const handleDelete = (deleteIndex) => {
        setTodos(
            todos.filter((todo, index) => {
                return index !== deleteIndex
            })
        )
    }

    return (
        <section className='relative mx-auto w-full md:w-187 h-113'>

            {
                todos.length === 0 && (
                    <>
                        <img src={DetectiveCheckFootPrint} alt="DetectiveCheckFootPrint"  className='m-auto pt-9' />

                        <p className='text-center pt-6 font-kanit font-normal text-[20px]'>Empty...</p>
                    </>
                )
            }

            {
                todos.map((todo, index) => (
                    <div key={index} 
                    className='md:w-130 mt-5 w-75 mx-auto'>
                        <div className='flex items-center relative'>
                            <button> <img src={Rec} alt="rectangle" className='cursor-pointer' /></button>
                            <p className='font-kanit font-medium text-[20px] uppercase items-center pl-3'
                            >{todo.length > 15
                            ? todo.slice(0, 15) + "..."
                            : todo
                            }</p>

                            <button className='absolute right-8 cursor-pointer hover:scale-120 transition ease-in-out duration-300'><img src={Update} alt="update" className='text-red-600' /></button>
                            <button 
                            onClick={() => handleDelete(index)}
                            className='absolute right-1 cursor-pointer hover:scale-120 transition duration-300 ease-in-out'><img src={Delete} alt="delete" /></button>
                        </div>

                        <hr className='border opacity-50 text-[#6C63FF] my-2'/>
                    </div>
                ))
            }

            <button onClick={() => setNewTodo(!newTodo)} 
            className='bg-[#6C63FF] hover:bg-[#5850DD] cursor-pointer rounded-full text-white w-12.5 h-12.5 absolute right-4 bottom-4'><img src={Plus} alt="plus" className='m-auto' /></button>
        </section>
    )
}

export default TodoList