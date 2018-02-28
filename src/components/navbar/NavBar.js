import React, {Component} from 'react';

import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Collapse,
    NavItem,
    NavLink
} from 'reactstrap';
import Login from './Login';
import Link from "react-router-dom/es/Link";

class NavBar extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="faded" light expand="md">
                    <Link class="navbar-brand" to="/home">
                        SuperProcrastinator
                    </Link>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/MSkrzypietz/super-procrastinator">Github</NavLink>
                            </NavItem>
                            <NavItem>
                                <Link class="nav-link" to="/settings">Settings</Link>
                            </NavItem>
                            <NavItem>
                                <Link class="nav-link" to="/subscriptions">Subscriptions</Link>
                            </NavItem>
                        </Nav>
                        <Login/>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;
