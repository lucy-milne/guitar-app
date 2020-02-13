import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Metronome from './Metronome';


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/metronome" exact component={Metronome} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
