import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import './index.css';
import Games from './games/Game';
import Home from './home/Home';
import Navbar from './Navbar';

class App extends React.Component {
  render() {
    return (

      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />  
          </Route>
          <Route path = "/games">
            <Games />
          </Route>
        </Switch>
      </BrowserRouter>

    )
  }
}







// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

