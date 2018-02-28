import React, {Component} from 'react';
import {Jumbotron, Button, Container} from 'reactstrap';

class Message extends Component {
    constructor() {
        super();
        this.state = {
            showReply: true
        }
    }
    onClick(e){
        e.preventDefault();
        this.setState({showReply: false})
    }


    render() {
        return (
            <div>
                <button type="button" className="close" aria-label="Close" onClick={this.onClick.bind(this)&& < Message/> } href="#">
                    <span aria-hidden="true">&times;</span>
                </button>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">Hello, my friend!</h1>
                        <p className="lead">This is a simple way to waste the most valuable thing in your life, your
                            time. This page consumes a diversity of Webservices form the most popular Time Wasting
                            pages</p>
                        <hr className="my-2"/>
                        <p className="lead">
                            <Button color="primary">Learn More</Button>
                        </p>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}
class WelcomeMessage extends React.Component {
    constructor() {
        super();
        this.state = {
            showReply: true
        }
    }
    onClick(e){
        e.preventDefault();
        this.setState({showReply: !this.state.showReply})
    }
    render() {
        return (
            <div>
                <a onClick={this.onClick.bind(this)} href='#'>Help</a>
                {this.state.showReply && < Message/>}
            </div>
        )
    }
}

export default WelcomeMessage;