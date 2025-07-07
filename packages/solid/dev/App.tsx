import { createSignal } from 'solid-js'
import Button from "haze-ui/button";

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <Button class='bruh'/>
     
      <p class="kekw">
        Click on the Vite and Solid logos to learn more
      </p>
    </>
  )
}

export default App
