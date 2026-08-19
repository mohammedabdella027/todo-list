import { useEffect ,useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import TodoList from './Components/Main/TodoList'
import Search from './Components/Header/Search'
import NewTodo from './Components/Main/NewTodo'

function App() {

  // --- Dark mode and Light mode 
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    localStorage.setItem(
      'theme',
      darkMode ? 'dark' : 'light'
    )
  }, [darkMode])

  // --- New todo 
  const [newTodo, setNewTodo] = useState(false)

  // --- todos 
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

  // --- searching 
  const [search, setSearch] = useState("")

  // ----------------------------------------
  return (
    <div className={darkMode ? 'bg-[#252525] text-white min-h-screen' : 'bg-white min-h-screen'}>
    <Header darkMode={darkMode} />
    
    <Search 
    setDarkMode={setDarkMode} 
    darkMode={darkMode}
    search={search}
    setSearch={setSearch}
    />
    
    <TodoList 
    darkMode={darkMode}
    newTodo={newTodo}
    setNewTodo={setNewTodo}
    todos={todos}
    setTodos={setTodos}
    search={search}
    />

    {newTodo && <NewTodo darkMode={darkMode} setNewTodo={setNewTodo} todos={todos} setTodos={setTodos} />}
    </div>
  )
}
export default App