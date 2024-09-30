import { useState } from 'react'
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
