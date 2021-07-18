import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import Home from './components/home';
import About from './components/about';
import Products from './components/products';
import Contact from './components/contact';
import Footer from './components/footer'
ReactDOM.render(
<>

    <Home/>
    <About/>
    <Products/>
    <Contact/>
    <Footer/>
</>,
  document.getElementById('root')
);
reportWebVitals();
