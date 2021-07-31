import { IRoute } from './types'
import TodosPage from '../pages/Todos'
import { MainPage } from '../pages/Main'

export const routes: IRoute[] = [
  { path: '/todos', component: TodosPage, exact: true },
  { path: '/', component: MainPage },
]
