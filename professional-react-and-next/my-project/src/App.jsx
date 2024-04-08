import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
        <div>
        <Header />
          <button className='border-2 hover:bg-purple-500 hover:text-white border-purple-500 w-24 rounded-full h-10' onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
     
  )
}

export default App
