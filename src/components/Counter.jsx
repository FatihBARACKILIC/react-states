import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  const decrease = () => setCount(count - 1)
  const increase = () => setCount(count + 1)

  return (
    <>
      <h1>{count}</h1>
      <button onClick={decrease}>Decrease</button>
      <button onClick={increase}>Increase</button>
    </>
  )
}

export default Counter
