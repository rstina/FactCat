import React from 'react';
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import StartPage from './pages/StartPage';
import SinglePost from './components/Post';

function App() {
  return (
    <div className="App">
      {/* Som en gamal switchboard för samtal */}
      <Switch>

        {/* Specifik kabel som styr samtalen rätt väg */}
        {/* Ju mer specifik path desto högre upp måste den ligga */}
        <Route path="/single-post">
          <SinglePost />
        </Route>

        <Route path="/">
          <StartPage />
        </Route>

      </Switch>
      
    </div>
  );
}

export default App;
