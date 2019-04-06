import React, { Component } from 'react';

class App extends Component {
    state = {
      firstname:null,
      lastname:null, 
      email:null
    }
    
    handleCLick = () => {
        console.log(this.state.firstname);
    }
    
    setFirstName = (e) => {
      this.setState({
        firstname: e.target.value    
      });
    }
    
  render() {
    return (
      <div className="App">
        <p>My App</p>
        <input onChange={ this.setFirstName } placeholder="First Name" />
        <button onClick={ this.handleCLick }>Submit</button>
        
      </div>
    );
  }
}

export default App;
