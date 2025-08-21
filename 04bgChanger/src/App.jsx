import { useState } from 'react'

function App() {
  const [color, setcolor] = useState("olive");

  return (
    <>
      <div className='w-full h-screen duration-200' style = {{ backgroundColor: color }}>
        <div className='fixed flex justify-center bottom-12 inset-x-0 px-2'>
          test
        </div>

      </div>
    </>
  )
}

export default App
