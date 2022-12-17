import React from 'react'
import AAAA from './AAAA'
import useStore from '../../store/store'
import { RxCrossCircled } from 'react-icons/rx'

function SingleCard({todoProps}) {

  const [changeComplete, setChangeComplete] = React.useState(true)

  console.log(todoProps)

  const deleteTodo = useStore((state) => state.deleteTodo)
  const setCompleteTodo = useStore((state) => state.setCompleteTodo)

  function handleDelete(){
    deleteTodo(todoProps.id)
  }

  function handleCompleteTodo(){
    setCompleteTodo(todoProps.id)
    setChangeComplete(!changeComplete)
  }

  return (
    <div className={todoProps.isComplete ?' bg-purple-100 flex justify-center items-center hover:bg-purple-200': ' bg-purple-300 flex justify-center items-center hover:bg-purple-400'}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <button className='bg-red-500 w-8 h-8 flex justify-center items-center' 
            onClick={handleDelete}>
              <RxCrossCircled size="15" /> 
          </button>
          <div className="font-bold text-xl mb-2">{todoProps.title}</div>
          <p className="text-gray-700 text-base">
            {todoProps.title}
          </p>
          <button className={todoProps.isComplete ? 'bg-green-100' : 'bg-green-300'} onClick={handleCompleteTodo}>
            {todoProps.isComplete ? "done": "complete"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default SingleCard