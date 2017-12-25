import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from './redux/reducer';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TasksList from './components/TasksList';
import CreateTask from './components/CreateTask';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <CreateTask />
            <TasksList />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
