import React, {Component} from 'react';
import './App.css';
import {Button} from 'reactstrap';

class App extends Component {
    render() {
        return (
            <div className="App">
                Super Procrastinator
                <Button color="danger">Danger!</Button>
            </div>
        );
    }
}

export default App;
