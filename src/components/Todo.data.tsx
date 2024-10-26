interface IProps {
  todos: {
    id: number
    title: string
    isComplete: boolean
  }[]
  owner?: string
  age?: number
  isDeveloper?: boolean
  deleteTodo: (value: number) => void
}

// type TProps = {
//   todos: {
//     id: number
//     title: string
//     isComplete: boolean
//   }[]
//   owner: string
//   age: number
//   isDeveloper: boolean
// }

const TodoData = (props: IProps) => {
  const { todos, deleteTodo } = props

  return (
    <div>
      {todos.map((item) => {
        return (
          <div key={item.id}>
            <div
              style={{
                padding: '10px 0',
                display: 'flex',
                gap: '10px',
                alignItems: 'center'
              }}
            >
              {item.id} - {item.title}
              <button
                style={{
                  outline: 'none',
                  padding: '6px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  cursor: 'pointer'
                }}
                onClick={() => deleteTodo(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TodoData
