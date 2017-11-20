import React, { Component } from 'react'
import {connect} from 'react-redux'
import Increment from './actions/increment'
import Decrement from './actions/decrement'



class App1 extends Component {
  
  
  render() {
    return (
      <div>
      <button onClick={this.props.Increment('a')}>COUNTER</button>
      <button onClick={this.props.Decrement('b')}>COUNTER1</button>
{/*      <button onClick={this.props.text}>TODOS</button>*/}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    text: this.state.text
  }
}

const App = connect(mapStateToProps,
                    {Increment,Decrement})(App1)

export default App;
