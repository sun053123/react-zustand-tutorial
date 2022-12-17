import React from 'react'
import AAAA from './AAAA'
import useStore from '../../store/store'
import { RxCrossCircled } from 'react-icons/rx'

function SingleCard({todoProps}) {

  const deleteTodo = useStore((state) => state.deleteTodo)
  
  function handleDelete(){
    deleteTodo(todoProps.id)
  }

  return (
    <div className=' bg-purple-300 flex justify-center items-center'>
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
        </div>
      </div>
    </div>
  )
}

export default SingleCard