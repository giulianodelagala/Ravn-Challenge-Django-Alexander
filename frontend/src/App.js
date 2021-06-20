// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

import Body from './components/Body';
import { PEOPLE } from './shared/shared';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      people : PEOPLE,
      renderPerson : this.renderPerson
    };
  }


  render() {
    return (
      <div className="App">
        <Navbar id="mainNavbar" dark>
          <div className="container">
            <NavbarBrand href="/">Ravn Star Wars Registry</NavbarBrand>
          </div>
        </Navbar>
       
        <div>
          <Body people={this.state.people}/>
        </div>
    
        
  
      </div>
    );
  };
}


export default App;
