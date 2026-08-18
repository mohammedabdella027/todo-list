import { useEffect ,useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import TodoList from './Components/Main/TodoList'
import Search from './Components/Header/Search'
import NewTodo from './Components/Main/NewTodo'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    localStorage.setItem(
      'theme',
      darkMode ? 'dark' : 'light'
    )
  }, [darkMode])

  const [newTodo, setNewTodo] = useState(false)

  const [todos, setTodos] = useState(() => {
    const saveTodos = localStorage.getItem('todos')

    return saveTodos ? JSON.parse(saveTodos) : []
  })

  useEffect(() => {
    localStorage.setItem(
      'todos',
      JSON.stringify(todos)
    )
  }, [todos])

  return (
    <div className={darkMode ? 'bg-[#252525] text-white min-h-screen' : 'bg-white min-h-screen'}>
    <Header darkMode={darkMode} />
    
    <Search 
    setDarkMode={setDarkMode} 
    darkMode={darkMode}
    />
    
    <TodoList 
    darkMode={darkMode}
    newTodo={newTodo}
    setNewTodo={setNewTodo}
    todos={todos}
    setTodos={setTodos}
    />

    {newTodo && <NewTodo darkMode={darkMode} setNewTodo={setNewTodo} todos={todos} setTodos={setTodos} />}
    </div>
  )
}
export default App