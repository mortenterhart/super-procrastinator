import React from 'react';
import './Subscription.css';

class SubscriptionOptions extends React.Component {

    render() {
        return (
            <div className="SubscriptionOptions">
                <h1>Subscriptions</h1>

                <table className="table table-hover">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">Service</th>
                        <th scope="col">Description</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>reddit.com</td>
                        <td>is an American social news aggregation, web content rating, and discussion website.
                            Registered members submit content to the site such as links, text posts, and images, which
                            are then voted up or down by other members.
                        </td>
                        <td>
                            <div className="container-fluid">
                                <button type="button" className="btn btn-success">Subscribe</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>golem.com</td>
                        <td>ist ein Web-Portal der Golem Media GmbH, einer Tochtergesellschaft der Computec Media Group,
                            für Nachrichten aus dem IT-Bereich. Neben den Neuigkeiten aus der IT-Welt bietet es weitere
                            Themenbereiche, beispielsweise ein Video- oder Fotoportal. Außerdem sind zu allen Artikeln
                            eigene Foren vorhanden, in denen Leser Kommentare veröffentlichen können.
                        </td>
                        <td>
                            <div className="container-fluid">
                                <button type="button" className="btn btn-success">Subscribe</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>twitter.com</td>
                        <td> Twitter is an online news and social networking service where users post and interact with
                            messages, known as "tweets".
                        </td>
                        <td>
                            <div className="container-fluid">
                                <button type="button" className="btn btn-success">Subscribe</button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SubscriptionOptions;
