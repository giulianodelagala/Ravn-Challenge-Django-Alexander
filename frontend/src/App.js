import './App.css';
import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

import Body from './components/Body';
// import { PEOPLE } from './shared/shared'; //Initial tests

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar id="mainNavbar" dark>
          <div className="container">
            <NavbarBrand href="/">Ravn Star Wars Registry</NavbarBrand>
          </div>
        </Navbar>
       
        <div className="Content">
          <Body/>
        </div>
      </div>
    );
  };
}


export default App;
