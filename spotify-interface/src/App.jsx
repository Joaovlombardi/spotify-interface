import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className='w-[100%] h-[100px] bg-red-700'></nav>

      <div className='flex'>

        <div className='w-2/12 h-[600px] bg-emerald-400 flex flex-col items-center justify-center'>
            <div className='w-36 h-36 bg-red-700 m-5'></div>
            <div className='w-36 h-36 bg-red-700 m-5'></div>
            <div className='w-36 h-36 bg-red-700 m-5'></div>
        </div>

        <div className='grid grid-cols-4 place-items-center w-10/12 items-start mt-5'>

            <div className='w-36 h-36 bg-red-700 m-4 flex flex-col items-center justify-center'>
              <div className='w-20 h-8 bg-emerald-400 m-2'></div>
              <div className='w-20 h-8 bg-emerald-400 m-2'></div>
            </div>

            <div className='w-36 h-36 bg-red-700 m-4 flex flex-col items-center justify-center'>
              <div className='w-20 h-8 bg-emerald-400 m-2'></div>
              <div className='w-20 h-8 bg-emerald-400 m-2'></div>
            </div>

            <div className='w-36 h-36 bg-red-700 m-4 flex flex-col items-center justify-center'>
              <div className='w-20 h-8 bg-emerald-400 m-2'></div>
              <div className='w-20 h-8 bg-emerald-400 m-2'></div>
            </div>

            <div className='w-36 h-36 bg-red-700 m-4 flex flex-col items-center justify-center'>
              <div className='w-20 h-8 bg-emerald-400 m-2'></div>
              <div className='w-20 h-8 bg-emerald-400 m-2'></div>
              <div></div>
            </div>

            <div className='w-36 h-36 bg-red-700 m-4 flex flex-col items-center justify-center'>
              <div className='w-20 h-8 bg-emerald-400 m-2'></div>
              <div className='w-20 h-8 bg-emerald-400 m-2'></div>
            </div>

            <div className='w-36 h-36 bg-red-700 m-4 flex flex-col items-center justify-center'>
              <div className='w-20 h-8 bg-emerald-400 m-2'></div>
              <div className='w-20 h-8 bg-emerald-400 m-2'></div>
            </div>

            <div className='w-36 h-36 bg-red-700 m-4 flex flex-col items-center justify-center'>
              <div className='w-20 h-8 bg-emerald-400 m-2'></div>
              <div className='w-20 h-8 bg-emerald-400 m-2'></div>
            </div>

            <div className='w-36 h-36 bg-red-700 m-4 flex flex-col items-center justify-center'>
              <div className='w-20 h-8 bg-emerald-400 m-2'></div>
              <div className='w-20 h-8 bg-emerald-400 m-2'></div>
              <div></div>
            </div>

            <div className='w-36 h-36 bg-red-700 m-4 flex flex-col items-center justify-center'>
              <div className='w-20 h-8 bg-emerald-400 m-2'></div>
              <div className='w-20 h-8 bg-emerald-400 m-2'></div>
            </div>

            <div className='w-36 h-36 bg-red-700 m-4 flex flex-col items-center justify-center'>
              <div className='w-20 h-8 bg-emerald-400 m-2'></div>
              <div className='w-20 h-8 bg-emerald-400 m-2'></div>
            </div>

            <div className='w-36 h-36 bg-red-700 m-4 flex flex-col items-center justify-center'>
              <div className='w-20 h-8 bg-emerald-400 m-2'></div>
              <div className='w-20 h-8 bg-emerald-400 m-2'></div>
            </div>

            <div className='w-36 h-36 bg-red-700 m-4 flex flex-col items-center justify-center'>
              <div className='w-20 h-8 bg-emerald-400 m-2'></div>
              <div className='w-20 h-8 bg-emerald-400 m-2'></div>
              <div></div>
            </div>

        </div>
         
      
        </div>

    
    </>
  )
}

export default App
