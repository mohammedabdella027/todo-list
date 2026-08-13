import { useEffect ,useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import TodoList from './Components/Main/TodoList'
import Search from './Components/Header/Search'

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

  return (
    <div className={darkMode ? 'bg-[#252525] text-white min-h-screen' : 'bg-white min-h-screen'}>
    <Header darkMode={darkMode} />
    
    <Search 
    setDarkMode={setDarkMode} 
    darkMode={darkMode}
    />
    
    <TodoList darkMode={darkMode} />
    </div>
  )
}
export default App