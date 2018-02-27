import React, {Component} from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';

class WelcomeMassage extends Component {

    render() {
        return (
            <div>
                <button type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <Jumbotron fluid>

                    <Container fluid>
                    <h1 className="display-3">Hello, my friend!</h1>
                    <p className="lead">This is a simple way to waist the most valuable thing in your life, your time. This page consumes a diversity of Webservices form the most popular Time Wasting pages</p>
                    <hr className="my-2" />
                    <p> </p>
                    <p className="lead">
                        <Button color="primary">Learn More</Button>
                    </p>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default WelcomeMassage;
