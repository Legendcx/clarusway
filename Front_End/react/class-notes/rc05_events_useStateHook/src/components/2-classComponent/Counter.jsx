

import { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)

    //!count statine başlangıç değeri atadık
      this.state = {
         count:props.count || 0,
      };

      //! incremen metodunun counter class ına bağlanması(bind)
      this.increment = this.increment.bind(this);
    }


    increment() {
this.setState({
    count: this.state.count + 1,
})
    }
//! Ancak Reaqct built in fonksiyonlara bağlıyor.
    decrement =() => {
        this.setState({
            count: this.state.count - 1,
        })
            }
        


  render() {
    return (
    <div className="container text-center mt-4">

    <h1>CLASSFUL COMPONENTS</h1>
    <h2 className='display-4 text-danger'>COUNT:{this.state.count}</h2>
    <button onClick={this.increment} className="btn btn-success">INC</button>

    <button className="btn btn-dark">CLR</button>

    <button onClick={this.decrement} className="btn btn-danger">DEC</button>
   
</div>
    )
    
  }
}

export default Counter
