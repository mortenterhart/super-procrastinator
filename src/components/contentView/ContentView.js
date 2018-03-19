import React, {Component} from 'react';
import {Button, Card, CardBody, CardTitle, Col, Row} from 'reactstrap';
import $ from 'jquery';

import golemIcon from '../../res/golemIcon.png';
import redditIcon from '../../res/redditIcon.png';

import {connect} from "react-redux";
import {checkboxNames} from "../../storage/apis/StorageAPIIdentifiers";

let DEVKEY = "4ef0b5c4164a4c5be46667df84ba4db8";

// Mit diesem key erhält man die richtigen artikel -> Zugriffslimit ist 500/Tag. Zum testen (ohne LImit) den oberen key verwenden
//let DEVKEY = "8d44fd1fafc4d2a95b01ffbdb14f02a8";

class ContentView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            checkboxList: []
        };
    }

    getCheckboxIndexByIdentifier(checkboxList, identifier) {
        let index = 0;
        while (checkboxList[index] !== undefined) {
            const checkbox = checkboxList[index];
            if (checkbox.props.identifier === identifier) {
                return index;
            }
            index++;
        }

        return -1;
    }

    componentWillUpdate() {
        console.log("componentWillUpdate state:");
        console.log("will update");
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps");
        console.log(nextProps);

        this.setState({cards: []});

        let ref = this;
        const checkboxList = nextProps.checkboxList;

        let checkboxIndex = this.getCheckboxIndexByIdentifier(checkboxList, checkboxNames.golem);

        if (checkboxList[checkboxIndex].props.checked) {
            $.getJSON("http://api.golem.de/api/article/latest/?key=" + DEVKEY + "&jsonp=?",
                function (result) {
                    if (result.success) {
                        let newCards = [];
                        let data = result.data;
                        for (let i = 0; i < data.length; i++) {
                            newCards.push({
                                created: data[i].date,
                                card: ref.createGolemCard({
                                    id: "Golem_" + i,
                                    date: data[i].date,
                                    title: data[i].headline,
                                    imgUrl: data[i].leadimg.url,
                                    imgHeight: data[i].leadimg.height,
                                    imgWidth: data[i].leadimg.width,
                                    url: data[i].url
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
            //this.setState({cards: this.shuffleCards(this.state.cards)});
        }

        checkboxIndex = this.getCheckboxIndexByIdentifier(checkboxList, checkboxNames.reddit);
        if (checkboxList[checkboxIndex].props.checked) {
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

            //this.setState({cards: this.shuffleCards(this.state.cards)});
        }
    }

    shuffleCards(cards) {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards;
    }

    createGolemCard(props) {
        return (
            <Col key={props.id} xs="0" md="4" lg="3" className="mb-3">
                <Card className="myCard">
                    <CardBody>
                        <div>
                            <img className="d-inline img-fluid" height={props.imgHeight} width={props.imgWidth}
                                 src={props.imgUrl} alt="golemCard"/>
                            <img className="d-inline float-right img-fluid rounded-circle" height="80" width="80"
                                 src={golemIcon} alt="golemIcon"/>
                        </div>
                        <CardTitle>{props.title}</CardTitle>
                        <Button target="_blank" href={props.url} color="primary">Continue reading</Button>
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
                            <img className="float-right img-fluid rounded-circle" height="80" width="80"
                                 src={redditIcon} alt="redditIcon"/>
                        </div>
                        <CardTitle>{props.subreddit}</CardTitle>
                        <CardBody>{props.title}</CardBody>
                        <Button target="_blank" href={props.url} color="primary">Continue reading</Button>
                    </CardBody>
                </Card>
            </Col>
        );
    }

    render() {
        return (
            <div>
                <Row>
                    {this.state.cards.map(function (item) {
                        return item.card;
                    })}
                </Row>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        ...state,
        checkboxList: state.checkboxList.checkboxList
    }
};

export default connect(mapStateToProps)(ContentView);
