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

      <h3 className='text-purple-500 font-bold text-xl'>
        Hello World!!!
      </h3>
      <h3 className='text-purple-500 font-bold text-xl'>
        Hello World!!! 222
      </h3>
    </>
  )
}

export default App
