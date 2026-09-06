import {useState} from 'react'

const Input = ({setTaskList, taskList}) =>
{
    const [ input, setInput ] = useState( "" )
    
    const handleAddTask = ( e ) =>
    {
        e.preventDefault()
        input.trim() === '' ? false : setTaskList([...taskList, input.trim()])
        setInput( "" )
    }

    return (
        <form
            className="flex gap-2 w-full max-w-md"
            onSubmit={handleAddTask}
        >
            <input
                className='focus:ring-2 flex-1 rounded-lg border px-4 py-2 focus:outline-none'
                type="text"
                placeholder="Add a task"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                className="rounded-lg border px-4 py-2
                    font-medium hover:shadow-md
                    transition-shadow duration-200"
            >Add</button>
        </form>
    )
}

export default Input