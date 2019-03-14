import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { increase, decrease, asyncIncrease } from '../../actions/count'

const Counter = props => (
  <div>
    <h3>Redux flow Demo, Counter Component</h3>
    <Button onClick={decrease}>Decrease</Button>
    <span style={{ padding: '0 10px' }}>{props.number}</span>
    <Button onClick={increase} style={{ marginRight: '10px' }}>
      Increase
    </Button>
    <Button onClick={asyncIncrease} type='primary'>
      AsyncIncrease
    </Button>
  </div>
)

function mapStateToProps({ count }) {
  return {
    number: count.number
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease()),
    asyncIncrease: () => dispatch(asyncIncrease())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
