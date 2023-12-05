import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"  >
      <div className="flex flex-wrap px-2 py-2 justify-center bg-white rounded-2xl">
        <button className="m-4 bg-red-500 rounded-md font-bold p-1"  onClick={()=>setColor("red")}>
          red
        </button>
        <button className="m-4 bg-blue-500 rounded-md font-bold p-1"  onClick={()=>setColor("blue")}>
          Blue
        </button>
        <button className="m-4 bg-orange-500 rounded-md font-bold p-1"  onClick={()=>setColor("orange")}>
          orange
        </button>
        <button className="m-4 bg-green-500 rounded-md font-bold p-1"  onClick={()=>setColor("green")}>
          green
        </button>
      </div>
      </div>
      </div>
  )
}

export default App
