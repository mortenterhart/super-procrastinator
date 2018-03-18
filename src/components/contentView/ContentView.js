import React, { Component } from 'react';
import {
    Row, Col, Card, CardBody,
    CardTitle, Button
} from 'reactstrap';
import $ from 'jquery';

import golemIcon from '../../res/golemIcon.png';

let DEVKEY = "4ef0b5c4164a4c5be46667df84ba4db8";

// Mit diesem key erhält man die richtigen artikel -> Zugriffslimit ist 500/Tag. Zum testen (ohne LImit) den oberen key verwenden
//let DEVKEY = "8d44fd1fafc4d2a95b01ffbdb14f02a8";

class ContentView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }

    componentDidMount() {
        let ref = this;

        $.getJSON("http://api.golem.de/api/article/latest/?key=" + DEVKEY + "&jsonp=?",
            function (result) {
                console.log(result);
                if (result.success) {
                    let newCards = [];
                    let data = result.data;
                    console.log(data.url)
                    for (var i = 0; i < data.length; i++) {   
                        newCards.push(ref.createGolemCard({ id: i, date: data[i].date, title: data[i].headline, imgUrl: data[i].leadimg.url, imgHeight: data[i].leadimg.height, imgWidth: data[i].leadimg.width, url: data[i].url}));
                    }
                    ref.setState({ cards: newCards });
                }
            }
        );
    }

    createGolemCard(props) {
        return (
            <Col key={props.id} xs="0" md="4" lg="3" className="mb-3">
                <Card className="myCard">                    
                    <CardBody>
                        <div>
                            <img className="d-inline img-fluid" height={props.imgHeight} width={props.imgWidth} src={props.imgUrl} alt="golemCard"/>
                            <img className="d-inline float-right img-fluid rounded-circle" height="80" width="80" src={golemIcon} alt="golemIcon"/>
                        </div>
                        <CardTitle>{props.title}</CardTitle>                    
                        <Button target="_blank" href={props.url} color="primary" >Erfahre mehr</Button>
                    </CardBody>
                </Card>
            </Col>
        );
    }

    render() {
        return (
            <div>
                <Row>
                    {this.state.cards}
                </Row>
            </div>        
        );
    }
}

export default ContentView;
