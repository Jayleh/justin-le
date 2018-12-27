import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Route path="/" exact component={Landing} />
        <Route path="/about" exact component={About} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/contact" exact component={Contact} />
      </div>
    </BrowserRouter>
  );
};

export default App;
