const R = require('rambda');

const result = R.compose(
  R.map(R.toUpper),
  R.filter(R.includes('a'))
)(['foo', 'bar', 'baz', 'qux'])

console.log(result)