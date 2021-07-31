import { IResponseData, ITodo } from '../types/todos'
import { FireBaseApi } from './FireBaseApi'

export interface IParams {
  [key: string]: string | number | boolean
}

export class TodoApi extends FireBaseApi {
  getAll = async (): Promise<ITodo[] | null> => {
    const url = '/todos'
    const { status, data } = await this.get<IResponseData>(url)
    if (status === 200) {
      return Object.keys(data).map((todoId) => ({
        id: todoId,
        text: data[todoId].text,
      }))
    }

    return null
  }
}
