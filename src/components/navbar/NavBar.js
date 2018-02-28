import React, {Component} from 'react';

import {
    Navbar,
    NavbarToggler,
    Nav,
    Collapse,
    NavItem,
    NavLink
} from 'reactstrap';
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

    onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
    };

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
                        <div class="g-signin2" data-onsuccess={this.onSignIn} data-theme="dark"></div>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;
