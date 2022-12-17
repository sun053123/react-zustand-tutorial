import create from 'zustand'

function countStore(set) {
    return {
        count: 0,
        person : "user",
        todos: [],
        increment: () => set((state) => {
            if(state.count >= 10){
                return { count : 0 }
            }
            return { count : state.count + 1}
        }),
        decrement: () => set((state) => ({ count: state.count - 1 })),
        changePerson: () => set((state) => {
            if (state.person === "user"){
                return { person: "admin"}
            }
            return { person: "user"}
        }),
        addTodo: (todoform) => set((state) => {
            return {todos: [...state.todos, todoform]}
        }),
        deleteTodo: (idTodo) => set((state) => {
            return {todos: state.todos.filter((todo) => todo.id !== idTodo)}
        }),
        setCompleteTodo: (idTodo) => set((state) => {
            const todoObj = state.todos.find((todo) => todo.id === idTodo)
            todoObj.isComplete = !todoObj.isComplete
            return {toodos: [...state.todos, todoObj]}
        })
        // changePerson: (person) => set((state) => state.person = person),
    };
}

const useStore = create(countStore)

export default useStore