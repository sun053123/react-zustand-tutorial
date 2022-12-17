import React from 'react'
import useStore from '../../store/store'
import { v4 as uuidv4 } from 'uuid';

//useState useEffect useRef

function FormTodo() {
    const increamentNumber = useStore((state) => state.increment)
    const setPerson = useStore((state) => state.changePerson)
    const addTodo = useStore((state)=> state.addTodo)
    
    const [todoform, setTodoform] = React.useState({
        id: "",// generate from random
        title: "",
        isComplete: false
    })

    function handleChange(event) {
        const { name, value } = event.target;
        setTodoform(todoform => ({
          ...todoform,
          [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (todoform.title.length <= 0){
            return
        }
        // random id 
        todoform.id = uuidv4()
        addTodo(todoform)
        setTodoform(() => ({
            title: ""
        }))
    }
    
  return (
      <div className='w-screen h-[200px] bg-pink-300 flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-mono'>
              Form todo (child of todo page)
          </h1>

          <form onSubmit={handleSubmit} className='flex justify-center items-center '>
              <label className='text-black font-mono text-xl font-bold'>
              title useState:
                  <input type="text" name="title" value={todoform.title} onChange={handleChange} />
              </label>
              <br />
              <button type="submit" className='ml-2 bg-red-400 rounded-md text-bold text-white p-2'>Submit</button>
          </form>

        
      </div>
  )
}

export default FormTodo