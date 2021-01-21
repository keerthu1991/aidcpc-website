import React from 'react';
import Header from './components/common/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Aidc from './components/pages/Aidc';
import HealthProfessionals from './components/pages/HealthProfessionals';
import Services from './components/pages/Services';
import Career from './components/pages/Career';
import Testimonials from './components/pages/Testimonials';
import Faqs from './components/pages/Faqs';
import Forms from './components/pages/Forms';
import Locations from './components/pages/Locations';
import News from './components/pages/News';
import InsuranceAccepted from './components/pages/InsuranceAccepted';
import RequestApt from './components/pages/RequestApt';
import Footer from './components/common/Footer';
import LandingPage from './components/layout/LandingPage';
import './App.css';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/aidc" exact component={Aidc} />
        <Route
          path="/healthprofessionals"
          exact
          component={HealthProfessionals}
        />
        <Route path="/services" exact component={Services} />
        <Route path="/career" exact component={Career} />
        <Route path="/testimonials" exact component={Testimonials} />
        <Route path="/faqs" exact component={Faqs} />
        <Route path="/forms" exact component={Forms} />
        <Route path="/locations" exact component={Locations} />
        <Route path="/news" exact component={News} />
        <Route path="/insuranceaccepted" exact component={InsuranceAccepted} />
        <Route path="/requestapt" exact component={RequestApt} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
