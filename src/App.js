import React, {Component} from 'react';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './components/navbar/Navbar'
class App extends Component {
    render() {
        return (
            <Navbar render/>
        );
    }
}

export default App;
