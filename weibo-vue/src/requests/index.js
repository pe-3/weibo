import axios from 'axios'
import $bus from '../event-bus'
import store from '../store'

const ajax = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 10000
})

export default function (options) {
  if (options.withToken) {
    if (!options.headers) {
      options.headers = {}
    }
    Object.assign(options.headers, {
      'authorization': store.state.auth.token
    });
  }
  return ajax(options);
}

const statusText = {
  '0': 'success', // 请求发送成功
  '1': 'warning', // 前端接口使用
  '2': 'error', // 报错
  '3': 'info' // 服务器单向通知用户
}

/**
 * 使用时，必须用 bind 绑定 vue 实例
 */
export async function useRequest(req, ...args) {
  try {
    const { data: { status, msg, data } } = await req(...args);
    const vm = this;

    if (data && typeof args[args.length - 1] === 'function') {
      args[args.length - 1](data)
    }
    else {
      // 将 data 数据放在 vm 上
      data && Object.keys(data).forEach(key => {
        vm[key] = data[key]
      })
    }
    msg && $bus[statusText[status]](msg);
    return Promise.resolve(data);
  } catch (e) {
    $bus.error(e.message);
    return Promise.reject(e);
  }
}

