import React, {Component} from 'react';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Collapse,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import Login from './Login';

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
                    <NavbarBrand href="/">SuperProcrastinator</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/MSkrzypietz/super-procrastinator">Github</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/MSkrzypietz/super-procrastinator">Settings</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/MSkrzypietz/super-procrastinator">Subscriptions</NavLink>
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
