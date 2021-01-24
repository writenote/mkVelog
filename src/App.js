import React from 'react';
import { Main, Write } from './pages';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path='/' component={Main} />

        <Switch>
          <Route exact path='/write' component={Write} />
        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;
