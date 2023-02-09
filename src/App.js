import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload my change.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        );
    }
}

class App extends Component {
    renderHeader() {
        return <Header />;
    }
    render() {
        return (
            <div className="App">
                {this.renderHeader()}
            </div>
        );
    }
}

export default App;
