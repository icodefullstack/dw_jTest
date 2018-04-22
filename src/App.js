import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Description from './Description';
import Nav from './Nav';

const App = () => (
  <div>
    <header>
      <Nav />
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/description" component={Description} />
    </main>
  </div>
)

export default App;
