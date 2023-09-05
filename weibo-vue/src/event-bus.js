const $bus = {}

const on = (eventName, callback) => {
  if (!$bus[eventName]) {
    $bus[eventName] = []
  }

  $bus[eventName].push(callback)
}

const off = (eventName, callback) => {
  if (!$bus[eventName]) {
    return
  }

  $bus[eventName] = $bus[eventName].filter(
    subscriber => subscriber !== callback
  )
}

const emit = (eventName, ...args) => {
  if (!$bus[eventName]) {
    return
  }

  $bus[eventName].forEach(subscriber => subscriber(...args))
}

export default new Proxy({
  on,
  emit,
  off
}, {
  get(target, property) {
    if (!['emit', 'on', 'off'].includes(property)) {
      return (...args) => emit(property, ...args)
    }
    return target[property]
  }
})