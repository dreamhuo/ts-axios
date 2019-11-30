import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'
// 指定 config 类型
function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}
// 在发送请求之前，对 config 进行一层处理
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
}
// 对 config 的 url 做处理
function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

export default axios
