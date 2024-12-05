import index from './index.hbs'

console.log('should print a')
console.log(index({
  a: true,
}))

console.log('should print b')
console.log(index({
  b: true,
}))