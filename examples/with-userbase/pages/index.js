import TodoForm from '../components/todo-form'

function Index({ user }) {
  if (user) {
    return (
      <div className="mx-auto w-4/5 md:w-1/2">
        <h3 className="text-4xl font-bold">
          Welcome, <span className="bg-yellow-400">{user.username}</span>!
        </h3>
        <TodoForm />
      </div>
    )
  } else {
    return null
  }
}

export default Index
