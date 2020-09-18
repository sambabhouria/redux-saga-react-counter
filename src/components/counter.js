import * as React from 'react'
import PropTypes from 'prop-types'

import { Button , Wrapper, Title}  from '../elements'

const Counter = ({ value, onIncrement, onIncrementAsync, onDecrement, onIncrementIfOdd }) => (
  <Wrapper>
      <Title>
      Clicked: {value} times 
    </Title>
     <div>
         <Button onClick={onIncrement}>+</Button> 
         <Button onClick={onDecrement} primary>-</Button>{' '}
    </div>
    <div>
    <Button onClick={onIncrementIfOdd}>Increment if odd</Button>{' '}
    <Button onClick={onIncrementAsync} primary>Increment async</Button>
    </div>
  </Wrapper>
)

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired,
  onIncrementIfOdd: PropTypes.func.isRequired,
}

export default Counter
