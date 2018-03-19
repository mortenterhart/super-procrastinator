import React, {Component} from 'react';
import './Footer.css';
import githubLogo from '../../images/github-logo.svg';

class Footer extends Component {
    render() {
        return (
            <div className="Footer py-4 navbar-footer-background footer-border">
                <a href="https://github.com/MSkrzypietz/super-procrastinator" target="_blank" rel="noopener noreferrer">
                    <img alt="Github Logo" src={githubLogo} className="github-logo" width="30" height="30"/>
                </a>
                <a className="d-inline mr-5" href="https://github.com/MSkrzypietz/super-procrastinator" target="_blank" rel="noopener noreferrer">Github</a>
                <p className="d-inline">Copyright &copy; 2018 SuperProcrastinator Inc.</p>
            </div>
        );
    }
}

export default Footer;
