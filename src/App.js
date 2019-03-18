import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Discover from './components/Discover';
import Search from './components/Search';
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <Router>
        <>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/discover' component={Discover} />
          <Route exact path='/search' component={Search} />
        </>
      </Router>
    );
  }
}

export default App;
