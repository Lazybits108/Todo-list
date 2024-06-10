import { useState,useEffect } from 'react'
import Mainbox from './components/Mainbox.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-red-500 h-screen '>
    <Mainbox/>
     </div>
    </>
  )
}

export default App
