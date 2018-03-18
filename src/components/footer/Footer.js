import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="Footer py-4 navbar-footer-background footer-border">
                <a className="d-inline mr-5" href="https://github.com/MSkrzypietz/super-procrastinator">Github</a>
                <p className="d-inline">Copyright © 2018 SuperProcrastinator Inc.</p>
            </div>
        );
    }
}

export default Footer;
