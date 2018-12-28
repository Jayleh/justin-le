import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Header from './header/Header';
import Landing from './landing/Landing';
import About from './about/About';
import Projects from './projects/Projects';
import Contact from './contact/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Route path="/" exact component={Landing} />
        <Route path="/about" exact component={About} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/contact" exact component={Contact} />
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
