
import {AxiosRequestConfig} from './types'
import xhr from './xhr'
// 指定 config 类型
function axios(config: AxiosRequestConfig): void {
  xhr(config)
}

export default axios
