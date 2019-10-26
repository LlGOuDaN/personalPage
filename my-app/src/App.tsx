import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <div>Hello World</div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
