import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Calendar from './components/Calendar/Calendar';
import Details from './components/Details/Details';

import FetchData from './service/FetchData';

import './style.css';

const initialState = {
  rocket: 'Falcon 1',
  rocketFeatures: null,
  rockets: [],
  company: null,
}

const App =() => {
  const fetchData = new FetchData();


  const [state, setState] = useState(initialState);
  const updateRocket = () => {
    fetchData.getRocket()
    .then(data => {
      setState(state => ({...state, rockets: data.map(item => item.name)}));
      return data;
    })
    .then(data => data.find(item => item.name === state.rocket))
    .then(rocketFeatures => setState(state => ({...state, rocketFeatures: rocketFeatures})));

  }

  

  const updateCompany = () => {
    fetchData.getCompany()
    .then(company => setState(state => ({...state, company: company})))
  }

  useEffect (() => {
    updateRocket();
    updateCompany();
  }, [])


  const changeRocket = rocket => {
    setState(state => ({...state, rocket: rocket}));
    updateRocket();
  }
  useEffect (() => {
  }, [state])

    return (
      <BrowserRouter> 
        <Header rockets={state.rockets} changeRocket={changeRocket}/>
        <Route exact path='/' render={() => state.company && <Home company = {state.company}/>} />
        <Route path='/rocket' render={() => state.rocketFeatures && <Features {...state.rocketFeatures} />} />
        <Route path='/calendar' component={Calendar} />
        <Route path='/details/:id' component={Details} />
        {state.company && <Footer {...state.company} />}
        
      </BrowserRouter> 
   );
}

export default App;
