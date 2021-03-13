import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { CreateNote, GetNote } from './components';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' render={() => <CreateNote />} />
        <Route exact path='/:id' render={props => <GetNote {...props} />} />
        <Route
          exact
          render={() => (
            <div>
              <h1>404 Page</h1>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
