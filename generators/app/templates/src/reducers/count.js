import { COUNT_INCREASE, COUNT_DECREASE } from '../store/action-types.js'

const count = function(state = { number: 0 }, action) {
  const number = state.number
  switch (action.type) {
    case COUNT_INCREASE: {
      return { number: number + 1 }
    }
    case COUNT_DECREASE: {
      return { number: number - 1 }
    }
    default:
      return state
  }
}

export default count
