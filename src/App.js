import React, { Component } from 'react'
import Counter from './Counter'

export class App extends Component {
  constructor(){
    super();
    this.state={
      show:true
    }
  }
togel=()=>{
  this.setState({show: !this.state.show})
}

  render() {
    return (
      <div>
<button   onClick={()=>this.togel()} >show</button>
    {this.state.show   &&     <Counter/>}
      </div>
    )
  }
}

export default App