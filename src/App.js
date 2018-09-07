import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
  }
  componentDidUpdate(){
    console.log(`Value for picture on state: ${this.state.picture}`);
    console.log(`Value for name on state: ${this.state.name}`);
    console.log('Value for friends on state: ',this.state.friends);
  }
  updatePicture = event => {
    this.setState({picture: event.target.value});
  }
  updateName = event => {
    this.setState({name: event.target.value});
  }
  addFriend = () => {
    this.setState({friends: this.state.friends.concat([{
      picture: this.state.picture,
      name: this.state.name
    }])})
  }
  render() {
    const friends = this.state.friends.map((friend,index) => {
      return (
        <div key={String(index)}>
          <img src={friend.picture} alt="friend" />
          <span>{friend.name}</span>
        </div>
      )
    })
    return (
      <div className="App">
        <label>Picture URL</label>
        <input name="picture"
               value={this.state.picture}
               onChange={this.updatePicture}
               placeholder="image url" />
        <label>Name</label>
        <input name="name"
               value={this.state.name}
               onChange={this.updateName}
               placeholder="your friend's name here" />
        <button onClick={this.addFriend}>Add Friend</button>
        {friends}
      </div>
    );
  }
}

export default App;
