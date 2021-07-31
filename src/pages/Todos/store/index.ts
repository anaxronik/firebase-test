import { makeAutoObservable, runInAction } from 'mobx'
import { TodoApi } from './../api/index'
import { ITodo } from './types'

class TodosPageStore {
  searchString: string = ''
  api = new TodoApi()
  todos: ITodo[] = []

  constructor() {
    makeAutoObservable(this)
  }

  onChangeInput = (e: any) => {
    this.searchString = e.target?.value
  }

  fetch = async () => {
    const todos = await this.api.getAll()
    runInAction(() => {
      if (todos) this.todos = todos
    })
  }
}

export default new TodosPageStore()
