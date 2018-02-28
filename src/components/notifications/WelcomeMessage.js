import React from 'react';
import {Jumbotron, Button, Container} from 'reactstrap';


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
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">Hello, my friend!</h1>
                        <p className="lead">This is a simple way to waste the most valuable thing in your life, your
                            time. This page consumes a diversity of Webservices form the most popular Time Wasting pages</p>
                        <hr className="my-2"/>
                        <p className="lead">
                        </p>
                        <p className="lead">Do you see the Check Boxes? Check the Stuff you like and we give you lazy Shit the Content to forget about Time and Space. If not go to Subscriptions and Connect your Shit.</p>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}

export default WelcomeMessage;