import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import RootRouter from '@Containers/RootRouter';
import { BrowserView, MobileView } from 'react-device-detect';

const App: React.FC = () => {
  return (
    <div>
      <BrowserView>
        <RootRouter />
      </BrowserView>
      <MobileView>
        <h1 style={{ textAlign: 'center' }}>WORKING ON MOBILE VERSION</h1>
      </MobileView>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
