import React, { createContext, Component } from 'react';
import Navbar from './Navbar';
import Content from './Content';

const UserContext = createContext();

class App extends Component {

  state = { firstName: 'Dave', lastName: 'Thomas' };

  render() {
    const store = {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    };

    return (
      <UserContext.Provider value={store}>
        <Navbar />
        <Content />
      </UserContext.Provider>
    );
  }
}

export { App, UserContext };