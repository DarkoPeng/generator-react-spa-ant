import { COUNT_INCREASE, COUNT_DECREASE } from '../store/action-types'

export function increase() {
  return {
    type: COUNT_INCREASE
  }
}

export function decrease() {
  return {
    type: COUNT_DECREASE
  }
}

export function asyncIncrease() {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: COUNT_INCREASE
      })
    }, 1000)
  }
}
