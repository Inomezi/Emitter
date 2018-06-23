module.exports = class {
  constructor() {
    this.listeners = {}
    this.callbacks = {}
    this.onceListeners = {}
    this.onceListenersCallbacks = {}
  }
  emit(methodName, args) {
    if( this.listeners.methodName && this.onceListeners.methodName ) {
      this.callbacks[methodName](args)
      this.onceListenersCallbacks[methodName](args)
    } else if( this.onceListeners.methodName ) {
      this.onceListenersCallbacks[methodName](args)
    } else if( this.listeners.methodName ) {
      this.callbacks[methodName](args)
    }
  }
  on(methodName, callback) {
    this.listeners.methodName = true
    this.callbacks[methodName] = ( args => callback(args) )
  }
  once(methodName, callback) {
    this.onceListeners.methodName = true
    this.onceListenersCallbacks[methodName] = ( args => {
      if( !this.onceListeners[methodName] ) {
        this.onceListeners[methodName] = true
        callback(args)
      }
    })
  }
  removeListener(methodName) {
    this.listeners.methodName = false
    this.onceListeners.methodName = false
    this.callbacks[methodName] = null
    this.onceListenersCallbacks[methodName] = null
  }
}