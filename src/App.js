import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    state = {
      firstname:null,
      lastname:null, 
      email:null
    }
    
    handleCLick = () => {
        console.log(this.state.firstname);
         axios.get('https://api.lyrics.ovh/v1/coldplay/paradise')
        .then(res => {
            // need to grab the data we retrieved and save it to our template
            console.log(res.data);
            // this.setState({
            //     posts: res.data.slice(0, 10)
            // });
        });
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
