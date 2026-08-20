import React from 'react'
import DetectiveCheckFootPrint from '../../assets/images/detective-check-footprint.png'
import Plus from '../../assets/icons/plus.png'
import Delete from '../../assets/icons/delete.png'
import Check from '../../assets/icons/check.png'
import Rec from '../../assets/icons/rectangle.png'
import Update from '../../assets/icons/update.png'
import Search from '../Header/Search'

function TodoList({ darkMode, newTodo, setNewTodo, todos, setTodos, search}) {

    const handleDelete = (deleteTodo) => {
        setTodos(
            todos.filter((todo) => {
                return todo !== deleteTodo
            })
        )
    }

    const handleComplete = (todoIndex) => {
        setTodos(
            todos.map((todo, index) => {
                return index === todoIndex
                ? {...todo, completed: !todo.completed}
                : todo
            })
        )
    }

    return (
        <section className='relative mx-auto w-full md:w-187'>

            {
                todos.length === 0 && (
                    <>
                        <img src={DetectiveCheckFootPrint} alt="DetectiveCheckFootPrint"  className='m-auto pt-9' />

                        <p className='text-center pt-6 font-kanit font-normal text-[20px]'>Empty...</p>
                    </>
                )
            }

            {
                todos.filter((todo) => {
                    return todo.text.toLowerCase().includes(search.toLowerCase())
                }).map((todo, index) => (
                    <div key={index} 
                    className='md:w-130 mt-5 w-75 mx-auto'>
                        <div className='flex items-center relative py-2'>
                            <button onClick={() => handleComplete(index)}> 
                                <img
                                src={todo.completed ? Check : Rec} alt="complete" className='cursor-pointer' 
                                /></button>

                            <p className={
                                `font-kanit font-medium text-[20px] uppercase items-center pl-3 ${
                                    todo.completed ? 'line-through opacity-50' : ''
                                }`}
                            >{todo.text.length > 15
                            ? todo.text.slice(0, 15) + "..."
                            : todo.text
                            }</p>

                            <button className='absolute right-8 cursor-pointer hover:scale-120 transition ease-in-out duration-300'><img src={Update} alt="update" className='text-red-600' /></button>
                            <button 
                            onClick={() => handleDelete(todo)}
                            className='absolute right-1 cursor-pointer hover:scale-120 transition duration-300 ease-in-out'><img src={Delete} alt="delete" /></button>
                        </div>

                        <hr className='border opacity-50 text-[#6C63FF]'/>
                    </div>
                ))
            }

            <button onClick={() => setNewTodo(!newTodo)} 
            className='bg-[#6C63FF] hover:bg-[#5850DD] cursor-pointer rounded-full text-white w-12.5 h-12.5 fixed right-4 lg:right-40 md:right-10 sm:right-10 bottom-4'><img src={Plus} alt="plus" className='m-auto' /></button>
        </section>
    )
}

export default TodoList