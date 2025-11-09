import  { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const resetCount = () => {
        setCount(0);
    }
  return (
    <div className='flex gap-20'>
        <p>Count : {count}</p>
        <button onClick={()=> setCount(count + 1)}> Add </button>
        <button onClick={()=> setCount(resetCount)}> Reset</button>
      
    </div>
  )
}
