import React, { Component } from 'react';
import {
    Row, Col, Card, CardBody,
    CardTitle, Button
} from 'reactstrap';
import $ from 'jquery';

import golemIcon from '../../res/golemIcon.png';
import redditIcon from '../../res/redditIcon.png';

import {storage} from '../../storage/ReduxStorage';
import {checkboxNames} from '../../storage/apis/StorageAPIIdentifiers'
import {connect} from "react-redux";

let DEVKEY = "4ef0b5c4164a4c5be46667df84ba4db8";

// Mit diesem key erhält man die richtigen artikel -> Zugriffslimit ist 500/Tag. Zum testen (ohne LImit) den oberen key verwenden
//let DEVKEY = "8d44fd1fafc4d2a95b01ffbdb14f02a8";

class ContentView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            checkboxList: []
        }

    }

    componentWillUpdate() {
        //this.state.checkboxList = storage.getState().checkboxList.checkboxList;
        //console.log("will update");
    }

    componentDidMount() {
        let ref = this;

        this.state.cards = [];

        if (true) {//this.state.checkboxList[1].props.checked) {
            $.getJSON("http://api.golem.de/api/article/latest/?key=" + DEVKEY + "&jsonp=?",
                function (result) {
                    if (result.success) {
                        let newCards = [];
                        let data = result.data;
                        for (let i = 0; i < data.length; i++) {
                            newCards.push({created: data[i].date,card: ref.createGolemCard({ id: "Golem_" + i, date: data[i].date, title: data[i].headline, imgUrl: data[i].leadimg.url, imgHeight: data[i].leadimg.height, imgWidth: data[i].leadimg.width, url: data[i].url})});
                        }
                        ref.setState({ cards: ref.state.cards.concat(newCards) });

                        ref.setState(prevState => {
                            ref.state.cards.sort((a, b) => b.created - a.created);
                        });
                    }
                }
            );
        }

        if (true) {//this.state.checkboxList[0].props.checked) {
            $.getJSON("https://www.reddit.com/r/redditdev/.json",
                function (result) {
                    if (result) {
                        console.log(result);
                        let newCards = [];
                        let data = result.data.children;
                        for (let i = 0; i < 10; i++) {
                            newCards.push({
                                created: data[i].data.created_utc,
                                card: ref.createRedditCard({
                                    id: "Reddit_" + i,
                                    title: data[i].data.title,
                                    url: data[i].data.url,
                                    subreddit: data[i].data.subreddit
                                })
                            });
                        }
                        ref.setState({cards: ref.state.cards.concat(newCards)});

                        ref.setState(prevState => {
                            ref.state.cards.sort((a, b) => b.created - a.created);
                        });
                    }
                }
            );
        }
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
                        <Button target="_blank" href={props.url} color="primary" >Continue reading</Button>
                    </CardBody>
                </Card>
            </Col>
        );
    }

    createRedditCard(props) {
        return (
            <Col key={props.id} xs="0" md="4" lg="3" className="mb-3">
                <Card className="myCard">
                    <CardBody>
                        <div>
                            <img className="float-right img-fluid rounded-circle" height="80" width="80" src={redditIcon} alt="redditIcon"/>
                        </div>
                        <CardTitle>{props.subreddit}</CardTitle>
                        <CardBody>{props.title}</CardBody>
                        <Button target="_blank" href={props.url} color="primary" >Continue reading</Button>
                    </CardBody>
                </Card>
            </Col>
        );
    }

    render() {
        return (
            <div>
                <Row>
                    {this.state.cards.map(function(item) {
                        return item.card;
                    })}
                </Row>
            </div>        
        );
    }
}

let mapStateToProps = (state) => {
    console.log("test");
    return {
        ...state,
        checkboxList: state.checkboxList.checkboxList
    }
};

export default connect(mapStateToProps)(ContentView);
