import { useState } from "react"

function NewTodo({darkMode, setNewTodo, todos, setTodos}) {

    const [todo, setTodo] = useState("")

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleApply = () => {
        setTodos([
            ...todos,
            todo
        ])

        setNewTodo(false)

        setTodo("")
    }

    return (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center'>

        <div className={`${darkMode ? 'bg-[#252525]' : 'bg-white'} w-90 sm:w-130 h-72 border rounded-2xl relative m-auto`}>
            <h1 className='text-center font-kanit font-medium text-2xl pt-2 uppercase'>New Note</h1>

            <input type="text" placeholder='Input your note...' className='block font-medium text-[16px] placeholder:text-[#C3C1E5] w-80 sm:w-125 h-9.5 mt-2 mx-auto outline-none border rounded-[5px] border-[#6C63FF] pl-3'
            
            value={todo}

            onChange={handleChange}
            />

            <button 
            onClick={() => setNewTodo (false)}
            className='font-medium font-kanit text-[18px] text-center w-27.5 h-9.5 border rounded-[5px] absolute bottom-2.5 left-5.5 hover:bg-[#6C63FF33]'>Cancel</button>

            <button 
            onClick={handleApply}
            className='font-medium font-kanit text-[18px] text-center w-24.5 h-9.5 border rounded-[5px] absolute bottom-2.5 right-5.5 bg-[#6C63FF] hover:bg-[#5850DD] text-white'>Apply</button>

        </div>

        </div>
    )
}

export default NewTodo
