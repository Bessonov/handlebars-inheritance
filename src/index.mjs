import index from './index.hbs'

console.log(index({
  outsideText: 'test outside',
  navText: 'test nav',
  layoutText: 'test layout',
}))