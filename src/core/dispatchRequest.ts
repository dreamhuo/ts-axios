import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types'
import xhr from './xhr'
import { buildURL } from '../helpers/url'
import { transformRequest, transformResponse } from '../helpers/data'
import { processHeaders } from '../helpers/headers'

// 指定 config 类型
export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}
// 在发送请求之前，对 config 进行一层处理
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transforHeaders(config)
  config.data = transformRequestData(config)
}
// 对 config 的 url 做处理
function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  // 这里类型断言不为空，加 ！号
  return buildURL(url!, params)
}
// 对 Request data 进行处理
function transformRequestData(config: AxiosRequestConfig) {
  return transformRequest(config.data)
}
// 对 headers 进行处理
function transforHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}
// 对data进行处理
function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}
