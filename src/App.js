import React from 'react';
import { Navbar2, Navbar3 , Navbar1, Navbar4 } from './components'
import GlobalSyle from './globalStyles';
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <div>
      <Router>
        <GlobalSyle/>
        <Navbar1/>
        <Navbar2/>
        <Navbar3/>
        <Navbar4/>
      </Router>
    </div>
    );
}

export default App;
