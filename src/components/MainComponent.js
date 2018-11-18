import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import TweetsComponent from "./TweetsComponent";
import { Jumbotron} from 'reactstrap';
//import Header from './HeaderComponent';
//import Footer from './FooterComponent';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>Frontend Coding Challenge</title>
                </Helmet>
                <div className="jumbotron jumbotron-fluid">
                    <h1 className="display-3 text-sm-center text-left">Code challenge</h1>

                </div>
                {/*<div className="float-right">Tweets per column: </div>*/}
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 mt-3">
                            <TweetsComponent screen_name="MakeSchool"/>
                        </div>
                       <div className="col-12 col-md-4 mt-3">
                            <TweetsComponent screen_name="newsycombinator"/>
                        </div>
                        <div className="col-12 col-md-4 mt-3">
                            <TweetsComponent screen_name="ycombinator"/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Main;
