import Axios, { AxiosError, AxiosRequestConfig } from 'axios'


export const AXIOS_INSTANCE = Axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'content-type': 'application/json',
  },
})

export const customInstance = <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
  const source = Axios.CancelToken.source()
  const promise = AXIOS_INSTANCE({
    ...config,
    ...options,
    cancelToken: source.token,
  }).then(({ data }) => data)

  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Query was cancelled')
  }

  return promise
}

export type ErrorType<Error> = AxiosError<Error>
