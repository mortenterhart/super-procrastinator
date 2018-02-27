import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-faded">
                <a className="navbar-brand" href="#">SuperProcrastinator</a>
                <button type="button" className="btn btn-danger"> Help</button>
            </nav>
        );
    }
}

export default Navbar;
