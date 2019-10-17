import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import OurRooms from './pages/OurRooms'
import Reservation from './pages/Reservation'
import Contact from './pages/Contact'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
         
          <Route exact path="/about" component={About} />
         
            <Route exact path="/ourRooms" component={OurRooms} />
          
              <Route exact path="/reservation" component={Reservation} />
          
                <Route exact path="/contact" component={Contact} />
        
      </Switch>
    </div>
  );
}

export default App;



