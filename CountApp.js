import React, { useState } from 'react';  
  
class CountApp extends React.Component {  
  constructor(props) {  
    super(props);  
    this.state = {  
      count: 0  
    };  
  }  
  render() {  
    return (  
      <div>  
        <p><b>You clicked {this.state.count} times</b></p>  
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>  
          Click me  
        </button>  
      </div>  
    );  
  }  
}  
export default CountApp;  
