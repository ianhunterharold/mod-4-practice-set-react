import React from 'react';
import logo from './logo.svg';
import './App.css';
import RedditContainer from './components/RedditContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Reddit 
        </a>
      </header>
      <RedditContainer />
    </div>
  );
}

export default App;
