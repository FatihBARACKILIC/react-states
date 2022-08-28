import { useState } from "react"
import Counter from "./components/Counter"
import InputExample from "./components/InputExample"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter /> */}
      <InputExample />
    </>
  )
}

export default App
