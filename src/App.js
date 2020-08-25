import React from 'react';
import './App.css';

import {
  Switch,
  Route
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';

import Posts from './pages/Posts';
import SinglePost from './pages/SinglePost';
import LayoutSimple from './components/LayoutSimple';

function App() {
  return (
    <div className="App container">
      {/* Som en gamal switchboard för samtal */}
      <Switch>

        {/* Specifik kabel som styr samtalen rätt väg */}
        {/* Ju mer specifik path desto högre upp måste den ligga */}
        <Route path="/single-post/:id" render={ props => {
          return (
            <LayoutSimple>
              <SinglePost {...props} />
            </LayoutSimple>
          )
        }}>
        </Route>

        <Route path="/">
          <LayoutSimple>
            <Posts />
          </LayoutSimple>
        </Route>

      </Switch>
      
    </div>
  );
}

export default App;
