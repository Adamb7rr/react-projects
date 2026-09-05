
import { useEffect, useState } from 'react'
import './App.css'

function App ()
{
  const [ time, setTime ] = useState( 0 )
  const [ running, setRunning ] = useState( false )
  
  useEffect( () =>
  {
    let interval;
    if ( running )
    {
      interval = setInterval( () =>
      {
        setTime((prev) => prev + 10)
      }, 10)
    }
    return () => clearInterval(interval)
  }, [running])

  return (
    <>
      <h1 className='text-3xl font-bold underline'>01-StopWatch</h1>
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        {running ? (
          <button
            onClick={() => setRunning(false)}
          >Stop</button>
        ): (
          <button
            onClick={() => setRunning(true)}
          >Start</button>
        )}
        <button
          onClick={() =>
          {
            setTime( 0 )
            setRunning( false )
          }}
        >Reset</button>
      </div>
    </>
  )
}

export default App
