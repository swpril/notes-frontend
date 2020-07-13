import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateNote from './components/CreateNote';
import GetNote from './components/GetNote';
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' render={() => <CreateNote />} />
        <Route exact path='/:id' render={(props) => <GetNote {...props} />} />
        <Route exact render={() => <div><h1>404 Page</h1></div>} />
      </Switch>
    </div>
  );
}

export default App;