import { useState , useCallback} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordGenrator = useCallback(() => {
    const pass = ""
    const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ "
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"

    for(let i = 1; i <= length; i++){
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  } , [length, numberAllowed, charAllowed , setPassword]) 

  return (
    <>
     
      <div className = "w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-12 text-orange-500 bg-grey-800">
        <h1 className = "4-xl text-center text-white">PassWord Genrator</h1>
        <div className = "flex shadow rounded-lg overflow-hidden mb-4">
          
          <input type = "text" className = "outline-none w-full px-3 py-1" value = {password} placeholder='password' readOnly />
          <button className = "bg-orange-500 text-white px-3 py-2 hover:bg-orange-600" onClick = {passwordGenrator}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
              />
              <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
              <input
                  type="checkbox"
                  defaultChecked={numberAllowed}
                  id="numberInput"
                  onChange={() => {
                      setNumberAllowed((prev) => !prev);
                  }}
              />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
              <input
                  type="checkbox"
                  defaultChecked={charAllowed}
                  id="characterInput"
                  onChange={() => {
                      setCharAllowed((prev) => !prev )
                  }}
              />
              <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>

     



    </>
  )
}

export default App
