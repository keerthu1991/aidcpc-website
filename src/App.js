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
       <Route path='/home' component={Home}/>
       <Route path='/aidcpc' component={Aidcpc}/>
       <Route path='/healthprofessionals' component={HealthProfessionals}/>
       <Route path='/infdisease' component={InfDisease}/>
       <Route path='/apn' component={ApNurse}/>
       <Route path='/billing' component={Billing}/>
       <Route path='/career' component={Career}/>
       <Route path='/credentials' component={Credentials}/>
       <Route path='/faqs' component={Faqs}/>
       <Route path='/forms' component={Forms}/>
       <Route path='/locations' component={Locations}/>
       <Route path='/news' component={News}/>
       <Route path='/patientptl' component={PatientPtl}/>
       <Route path='/requestapt' component={RequestApt}/>
     </Switch>
   </Router>
    
  );
}

export default App;
