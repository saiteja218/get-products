import { useState } from 'react'
import './App.css'
import Products from './Products'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
 <Products/>
   </div>
  )   
}

export default App
