import React from 'react';
import { Header, Main, Search, Write, Signup, Signin } from './pages';
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
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/signin' component={Signin} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
