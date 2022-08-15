const names = require('./nameModule')
const funcs = require('./utilModule')

console.log(names)
console.log(funcs)

funcs.foo(names.nameOfMyGirl)
funcs.foo(names.nameOfMe)