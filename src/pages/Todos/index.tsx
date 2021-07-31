import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import store from '../../stores/TodosPageStore'
import Todo from '../../components/Todo'

const TodosPage = () => {
  useEffect(() => {
    store.fetch()
  }, [])

  if (store.api.isLoading) return <h1>ЗАГРУЗКА</h1>
  return (
    <>
      <h1>Todos</h1>
      <input
        type="text"
        value={store.searchString}
        onChange={store.onChangeInput}
      />
      <div>
        {store.todos.map((todo) => (
          <Todo text={todo.text} key={todo.id} />
        ))}
      </div>
    </>
  )
}

export default observer(TodosPage)
