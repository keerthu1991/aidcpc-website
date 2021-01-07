import React from 'react';
import AidcpcMenu from './components/layout/AidcpcMenu';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Aidcpc from './components/pages/Aidcpc';
import HealthProfessionals from './components/pages/HealthProfessionals';
import InfDisease from './components/pages/InfDisease';
import Home from './components/pages/Home';
import ApNurse from './components/pages/ApNurse';
import Billing from './components/pages/Billing';
import Career from './components/pages/Career';
import Credentials from './components/pages/Credentials';
import Faqs from './components/pages/Faqs';
import Forms from './components/pages/Forms';
import Locations from './components/pages/Locations';
import News from './components/pages/News';
import PatientPtl from './components/pages/PatientPtl';
import RequestApt from './components/pages/RequestApt';
import './App.css';


function App() {
  return (
    <Router>
      
     <AidcpcMenu/>
     
     <Switch>
       <Route path='/home' exact component={Home}/>
       <Route path='/aidcpc' exact component={Aidcpc}/>
       <Route path='/healthprofessionals' exact component={HealthProfessionals}/>
       <Route path='/infdisease' exact component={InfDisease}/>
       <Route path='/apn' exact component={ApNurse}/>
       <Route path='/billing' exact component={Billing}/>
       <Route path='/career' exact component={Career}/>
       <Route path='/credentials' exact component={Credentials}/>
       <Route path='/faqs' exact component={Faqs}/>
       <Route path='/forms' exact component={Forms}/>
       <Route path='/locations' exact component={Locations}/>
       <Route path='/news' exact component={News}/>
       <Route path='/patientptl' exact component={PatientPtl}/>
       <Route path='/requestapt' exact component={RequestApt}/>
     </Switch>
      <footer className="footer-bg">
        <span className="contact">Contact:(732) 514-9624</span>|
        <span className="location">Location: NJ</span>|
        <span className="copyright">Copyright &copy; 2020</span>
      </footer>
   </Router>
    
  );
}

export default App;
