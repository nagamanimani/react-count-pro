// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  increase = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  render() {
    return (
      <div>
        <h1 className="head">
          The Button has been clicked {this.state.count} times
        </h1>
        <p className="para">Click the button to increase the count</p>
        <button className="button" onClick={this.increase}>
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
