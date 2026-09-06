import './App.css'
import { useState } from "react";
import Input from "../components/Input";
import Board from "../components/Board";

function App ()
{
  const [ taskList, setTaskList ] = useState( [
    "Learn React",
    "Build a Todo App"
  ] )
  
  const display = taskList.map( (task, index) =>
  {
    return (
      <div
        key={index}
      >
        <Board
          task={task}
          index={index}
          setTaskList={setTaskList}
          taskList={taskList}
        />
      </div>
    )
  })

  return (
    <div className='grid justify-center items-center py-5'>
      <h1 className='text-lg font-bold '>02-Tod0 Board</h1>
      <div>
        <Input
          setTaskList={setTaskList}
          taskList={taskList}
        />
      </div>
      <div className='grid grid-cols-3'>
        {display}
      </div>
    </div>
  )
}

export default App