// 实现所有请求逻辑

import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get' } = config
  const request = new XMLHttpRequest()
  // 默认异步
  request.open(method.toUpperCase(), url, true)
  request.send(data)
}
