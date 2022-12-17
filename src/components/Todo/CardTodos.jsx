import React from 'react'
import SingleCard from './SingleCard'
import useStore from '../../store/store'

function CardTodos() {

  const todos = useStore((state) => state.todos)

  return (
    <div className=' flex flex-col justify-center items-center'>
          <div className="grid grid-cols-6 gap-4">
            {todos.map((todo, _) => {
              return <SingleCard todoProps={todo} key={todo.id}/>
            })}
          </div>
    </div>
  )
}

export default CardTodos