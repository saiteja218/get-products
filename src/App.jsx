import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GetData from './GetData';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
 <GetData/>
   </div>
  )
}

export default App
