import React from 'react';
import {Jumbotron, Container} from 'reactstrap';


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
                        <h1 className="display-3">Hey, pal!</h1>
                        <p className="lead">This page offers a simple way to waste the most valuable thing in your life, your
                            remaining lifetime. You can choose from a diversity of the most popular time consuming
                            websites.</p>
                        <hr className="my-2"/>
                        <p className="lead">
                        </p>
                        <p className="lead">Can you see the Check Boxes to the left?
                            Simply check the stuff you like and we'll show your lazy ass more than enough content to forget about time and space.
                            You can also connect your accounts on the subscription page so we can show you personalized content.</p>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}

export default WelcomeMessage;