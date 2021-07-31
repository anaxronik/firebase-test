import { baseApiUrl } from '../urls/api'
import axios, { AxiosRequestConfig } from 'axios'
import { IParams } from './TodoApi'
import { TMethods } from '../types/api'

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
