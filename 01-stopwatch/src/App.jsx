
import { useEffect } from 'react'
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
      
    </>
  )
}

export default App
