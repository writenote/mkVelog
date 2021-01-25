import React from 'react';
import { Header, Main, Search, Write } from './pages';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={Main} />

        <Switch>
          <Route exact path='/search' component={Search} />
          <Route exact path='/write' component={Write} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
