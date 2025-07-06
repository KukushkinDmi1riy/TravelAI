import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import type { RootState } from './app/store'
import { setTheme } from './features/ui/uiSlice'

function App() {
  const theme = useSelector((state: RootState) => state.ui.theme)
  const dispatch = useDispatch()

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    dispatch(setTheme(newTheme))
  }

  return (
    <div className={`App ${theme}-theme`}>
      <header className="App-header">
        <h1>TravelPro AI</h1>
        <p>Текущая тема: {theme}</p>
        <button onClick={handleThemeToggle}>
          Переключить тему
        </button>
      </header>
    </div>
  )
}

export default App
