const Board = ({task, index, setTaskList, taskList}) =>
{
    const handleDelete = () =>
    {
        setTaskList(
            taskList.filter( ( task, currentIndex ) =>
            {
                return currentIndex !== index
            })
        )
    }

    return (
        <div className="w-full max-w-md bg-white rounded-xl shadow-md
                        flex items-center justify-between gap-4
                        px-4 py-3 mb-3">
            <p
                className="text-lg font-medium text-gray-800"
            >{task}</p>
            <button
                className="bg-red-500 hover:bg-red-600 text-white
                            font-medium rounded-lg px-3 py-1.5
                            transition-colors duration-200"
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>
    )
}

export default Board