import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import {Component} from 'react';
import Directory from './components/DirectoryComponents';

class App extends Component {
  render(){
    return(
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">NuCamp</NavbarBrand>
          </div>
        </Navbar>
        <Directory/>
      </div>
    );
  }
}

export default App;
