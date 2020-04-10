import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from '@Containers/Main';

class RootRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default RootRouter;
