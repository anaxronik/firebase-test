import { baseApiUrl } from '../../../urls/api'
import axios, { AxiosRequestConfig } from 'axios'
import { IResponseData, ITodo } from './../store/types'

export type TMethods = 'get' | 'post' | 'put' | 'delete'

export interface IParams {
  [key: string]: string | number | boolean
}

export class FireBaseApi {
  isLoading: boolean = false

  private response = <IResponseData>(
    url: string,
    method: TMethods,
    config?: AxiosRequestConfig
  ) => {
    this.isLoading = true

    const response = axios[method]<IResponseData>(url, config)
    response.finally(() => (this.isLoading = false))

    return response
  }

  get = <IResponseData>(url: string, params?: IParams) => {
    const url2 = baseApiUrl + url + `.json`
    return this.response<IResponseData>(url2, 'get', { params })
  }
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
