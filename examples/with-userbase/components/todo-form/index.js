import { useState, useEffect } from 'react'
import userbase from 'userbase-js'

function Todo({ name, done, toggleComplete, deleteTodo }) {
  return (
    <li className="my-4">
      <div className="flex items-center">
        <span className={done ? 'text-gray-500' : ''}>{name}</span>
        <button
          type="button"
          className="mx-4 rounded bg-purple-400 p-1 font-bold text-white"
          onClick={(e) => {
            e.preventDefault()
            toggleComplete()
          }}
        >
          {done ? 'not done' : 'done'}
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            deleteTodo()
          }}
          className=" rounded bg-red-500 p-1 font-bold text-white"
        >
          delete
        </button>
      </div>
    </li>
  )
}

function TodoForm() {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [disabled, setDisabled] = useState()

  useEffect(() => {
    async function openDatabase() {
      try {
        console.log('opening db...')
        await userbase.openDatabase({
          databaseName: 'next-userbase-todos',
          changeHandler: function (items) {
            setTodos(items)
          },
        })
      } catch (e) {
        console.error(e.message)
      }
    }
    openDatabase()
  }, [])

  async function addTodo(e) {
    e.preventDefault()
    setDisabled(true)
    try {
      await userbase.insertItem({
        databaseName: 'next-userbase-todos',
        item: { name: newTodo, done: false },
      })
      setNewTodo('')
      setDisabled(false)
    } catch (e) {
      console.error(e.message)
      setDisabled(false)
    }
  }

  async function toggleComplete(itemId, currentValue) {
    try {
      await userbase.updateItem({
        databaseName: 'next-userbase-todos',
        item: { ...currentValue, done: !currentValue.done },
        itemId,
      })
    } catch (e) {
      console.error(e.message)
    }
  }

  function handleNewTodo(e) {
    e.preventDefault()
    setNewTodo(e.target.value)
  }

  async function deleteTodo(itemId) {
    setDisabled(true)
    try {
      await userbase.deleteItem({
        databaseName: 'next-userbase-todos',
        itemId,
      })
      setNewTodo('')
      setDisabled(false)
    } catch (e) {
      console.error(e.message)
      setDisabled(false)
    }
  }

  return (
    <form className="rounded bg-white p-8 shadow-md" onSubmit={addTodo}>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.itemId}
            name={todo.item.name}
            done={todo.item.done}
            toggleComplete={() => toggleComplete(todo.itemId, todo.item)}
            deleteTodo={() => deleteTodo(todo.itemId)}
          />
        ))}
      </ul>
      <div className="my-4 flex">
        <input
          type="text"
          onChange={handleNewTodo}
          value={newTodo}
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
        />
        <button disabled={disabled} className="btn-yellow mx-4" type="submit">
          add
        </button>
      </div>
    </form>
  )
}

export default TodoForm
