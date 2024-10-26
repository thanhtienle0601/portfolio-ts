import { useState } from 'react'
import TodoData from './Todo.data'
import TodoInput from './Todo.input'

interface ITodo {
  id: number
  title: string
  isComplete: boolean
}

const TodoList = () => {
  //   const todos = [
  //     {
  //       id: 1,
  //       title: 'Learn React TypeScript',
  //       isComplete: false
  //     },
  //     {
  //       id: 2,
  //       title: 'Subscribe Youtube HoiDanIT',
  //       isComplete: true
  //     },
  //     {
  //       id: 3,
  //       title: 'Learn English',
  //       isComplete: true
  //     }
  //   ]
  const [listTodo, setListTodo] = useState<ITodo[]>([])
  const addNewTodo = (todo: ITodo) => {
    setListTodo([...listTodo, todo])
  }
  const deleteTodo = (id: number) => {
    const newListTodo = listTodo.filter((todo) => todo.id !== id)
    setListTodo(newListTodo)
  }
  return (
    <div
      style={{
        width: '600px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px'
      }}
    >
      <div
        style={{
          paddingBottom: '20px',
          borderBottom: '1px solid #ccc'
        }}
      >
        My Todo list:{' '}
      </div>
      <br />
      <TodoInput addNewTodo={addNewTodo} />
      <TodoData
        todos={listTodo}
        deleteTodo={deleteTodo}
        // owner="Tony"
        //   age={30}
        //   isDeveloper={true}
      />
    </div>
  )
}

export default TodoList
