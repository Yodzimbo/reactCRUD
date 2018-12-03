import React, { Component } from 'react';
import Users from './Users';
import AddUser from './AddUser';

class App extends Component {
  state = {
    users: [
      { name: 'Pat', age: 30, belt: 'black', id: 1 },
      { name: 'Mat', age: 20, belt: 'green', id: 2 },
      { name: 'Bob', age: 25, belt: 'pink', id: 3 }
    ]
  }

  addUser = (user) => {
    user.id = Math.random();
    let users = [...this.state.users, user];
    this.setState({
      users: users
    });
  }

  deleteUser = (id) => {
    let users = this.state.users.filter(user => {
      return user.id !== id;
    });
    this.setState({
      users: users
    })
  }

  componentDidMount() {
    console.log('component mount')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps, prevState');
    console.log(prevProps);
    console.log(prevState);

  }
  render() {
    return (
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome</p>
        <Users deleteUser={this.deleteUser} users={this.state.users}/>
        <AddUser addUser={this.addUser} />
      </div>
    );
  }
}

export default App;
