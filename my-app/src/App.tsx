import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import RootRouter from '@Containers/RootRouter';

const App: React.FC = () => {
  return <RootRouter />;
};

ReactDOM.render(<App />, document.getElementById('root'));
