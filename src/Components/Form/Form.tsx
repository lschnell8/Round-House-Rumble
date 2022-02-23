import React, { Component } from "react"
class Form extends Component {
  state = {
    input: ''
  }
  // render() {
  //   <form>
  //     <label>Chuck One Liner:</label>
  //     <textarea></textarea>
  //     <button>Make Ya Own</button>
  //   </form>
  // }

  render() {
    return (
      <form>
        <label>Chuck One Liner:</label>
        <textarea></textarea>
        <button>Make Ya Own</button>
      </form>
    )
  }
}


export default Form