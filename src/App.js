import React, {Component} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './components/Navbar'
class App extends Component {
    render() {
        return (

            <nav class="navbar navbar-light bg-faded">
                <a class="navbar-brand" href="#">SuperProcrastinator</a>
                <button type="button" class="btn btn-danger" href="#"> Help</button>
            </nav>
        );
    }
}

export default App;
