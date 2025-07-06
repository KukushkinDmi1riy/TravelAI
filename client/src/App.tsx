import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState({ message: 'Загрузка...' })

  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(() => setData({ message: 'Не удалось загрузить данные' }))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Vite + React</h1>
        <p>Сообщение от сервера:</p>
        <p className="server-message">{data.message}</p>
      </header>
    </div>
  )
}

export default App
