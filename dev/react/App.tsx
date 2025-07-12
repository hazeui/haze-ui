import { useState } from 'react'

import Button from "haze-ui/button";

function App() {
  return (
    <>

      <div className='fex gap3'  >

      <Button txt="Submit" className="btn-primary-sm" isLoading={true}/>
      <Button txt="Submit" className="btn-alt-md"/>
      <Button txt="Submit" className="btn-outline-lg"/>
      <Button txt="Submit" className="btn-primary-xl"/>
      </div>
    
      <p className="kekw">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
