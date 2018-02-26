import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-light bg-faded">
                <a class="navbar-brand" href="#">SuperProcrastinator</a>
                <button type="button" class="btn btn-danger" href="#"> Help</button>
            </nav>
        );
    }
}

export default Navbar;
