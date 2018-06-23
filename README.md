# Emitter
### Module for Event Emitter

# Content
- [Methods](#methods-)

# Methods [^](#methods)
### on(methodName, callback)
Can be used multiple times
- `methodName` - Name of your method
- `callback` - callback
```js
const Emitter = require('./Emitter')
const calculator = require('./calculator')
module.exports = class Calculator extends Emitter {
  plus(data) {
    return this.emit('plus', data.a + data.b)
  }
  minus(data) {
    return this.emit('minus', data.a - data.b)
  }
}
const calculator = new Calculator()
calculator.on('plus', result => { console.log(result) }) // 30 x2
calculator.plus({ a: 10, b: 20 })
calculator.plus({ a: 10, b: 20 })
```
### once(methodName, callback)
Can only be used once
- `methodName` - Name of your method
- `callback` - callback
```js
const Emitter = require('./Emitter')
const calculator = require('./calculator')
module.exports = class Calculator extends Emitter {
  plus(data) {
    return this.emit('plus', data.a + data.b)
  }
  minus(data) {
    return this.emit('minus', data.a - data.b)
  }
}
const calculator = new Calculator()
calculator.once('plus', result => { console.log(result) }) // 30 x1
calculator.plus({ a: 10, b: 20 })
calculator.plus({ a: 10, b: 20 })
calculator.plus({ a: 10, b: 20 })
calculator.plus({ a: 10, b: 20 })
```
### removeListener(methodName)
Can only be used once
- `methodName` - The name of the method in which you need remove listener
```js
const Emitter = require('./Emitter')
const calculator = require('./calculator')
module.exports = class Calculator extends Emitter {
  plus(data) {
    return this.emit('plus', data.a + data.b)
  }
  minus(data) {
    return this.emit('minus', data.a - data.b)
  }
}
const calculator = new Calculator()
calculator.on('plus', result => { console.log(result) }) // 30 x1
calculator.plus({ a: 10, b: 20 })
calculator.removeListener('plus')
calculator.plus({ a: 10, b: 20 })
calculator.plus({ a: 10, b: 20 })
calculator.plus({ a: 10, b: 20 })
```
