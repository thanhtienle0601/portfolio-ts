import { useState } from 'react'

interface ITodo {
  id: number
  title: string
  isComplete: boolean
}
interface Iprops {
  name?: string
  addNewTodo: (value: ITodo) => void
}
const TodoInput = (props: Iprops) => {
  const { addNewTodo } = props
  const [todo, setTodo] = useState<string>('')
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value)
  }
  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  const handleClick = () => {
    if (!todo) return alert('Empty Todo')
    addNewTodo({
      id: randomInteger(1, 1000),
      title: todo,
      isComplete: false
    })
    setTodo('')
  }

  return (
    <div
      style={{
        display: 'flex',
        gap: '15px',
        margin: '10px 0 20px 0'
      }}
    >
      <input
        style={{
          outline: 'none',
          border: '1px solid #ccc',
          padding: '10px',
          borderRadius: '4px'
        }}
        type="text"
        value={todo}
        onChange={handleTextChange}
      />
      <button
        style={{
          outline: 'none',
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          cursor: 'pointer'
        }}
        onClick={handleClick}
      >
        Add Todo
      </button>
    </div>
  )
}

export default TodoInput
