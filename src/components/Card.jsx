import React from "react"
class Card extends React.Component{
    constructor() {
        super()
        this.state = {
            // age: 0,
        }
    }    
    render() {
        return (
        <div> 
          <label>Enter your name : </label>
          <input
            type="string"
            onChange={event => {
                this.setState({
                    age: event.target.value,
                })
            }}
            value = {this.state.age}
          ></input>
          <h1>hey!  {this.state.age}</h1>
          <h1>Welcome to College</h1>
          {/* {this.state.age === 0 && <h1>You are not yet born!</h1>}
          {this.state.age > 0 && this.state.age <= 12 && <h1>You are a child Enjoy</h1>}
          {this.state.age > 12 && this.state.age <= 19 && (
            <h1>You are a teenager leatn from your mistakes</h1>
          )}
          {this.state.age >= 20 && <h1>Welcome to adulthood</h1>} */}
    </div>
    )
    } 
}
export default Card