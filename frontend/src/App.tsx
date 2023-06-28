import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [increase, setIncrease] = useState(false);
  return (
    <>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div>
        <button onClick={()=>setIncrease(!increase)}>Click to toggle height</button>

        <div className={`bg-red-600 w-[200px] ${increase?"h-[100px]":"h-[20px]"} transition-all duration-300`}>

        </div>
      </div>
    </>
  )
}

export default App
