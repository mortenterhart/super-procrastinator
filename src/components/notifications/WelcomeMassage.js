import React, {Component} from 'react';
import { Jumbotron, Button } from 'reactstrap';

class WelcomeMassage extends Component {

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Hello, my friend!</h1>
                    <p className="lead">This is a simple way to waist the most valuable thing in your life, your time. This page consumes a diversity of Webservices form the most popular Time Wasting pages</p>
                    <hr className="my-2" />
                    <p> </p>
                    <p className="lead">
                        <Button color="primary">Learn More</Button>
                    </p>
                </Jumbotron>
            </div>
        );
    }
}

export default WelcomeMassage;
