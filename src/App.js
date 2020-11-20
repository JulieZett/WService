import React from 'react';
import './styling.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import SignUp from './pages/SignUp/SignUp';
import { Navbar, Footer, WestheimInfo, Erfaring, KontaktSkjema } from './components';

function App() {
  return (
    <Router>
      
     <Navbar />
     <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/services" exact component={Services} />
       <Route path="/Erfaring" exact component={Erfaring} />
       <Route path="/WestheimInfo" exact component={WestheimInfo} />
       <Route path="/KontaktSkjema" exact component={KontaktSkjema} />




       <Route path="/KontakSkjema" exact component={SignUp} />
     </Switch>
     <Footer />
    </Router>
  );
}


export default App;
