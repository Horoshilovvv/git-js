import _ from 'lodash'

function run() {
  const numbers = [1, 2, 3, 4, 5]
  const sum = _.sum(numbers)
  console.log(sum)
  return sum
}

export default run