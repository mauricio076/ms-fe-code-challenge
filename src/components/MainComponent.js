import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import * as TWEETS1 from "../shared/MakeSchool.json";
import * as TWEETS2 from "../shared/NewsYC.json";
import * as TWEETS3 from "../shared/YCombinator.json";
import TweetColum from "./ColumnComponent";
//import Header from './HeaderComponent';
//import Footer from './FooterComponent';

class Main extends Component {

    constructor(props){
        super(props);

        this.state = {
            tweets: null
        };
    }

    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>Frontend Coding Challenge</title>
                </Helmet>
                <h1>code challenge</h1>
                <div className="container bg-light">
                    <div className="row">
                        <div  className="col-12 col-md-4 mt-3">
                            <TweetColum tweets={TWEETS1}/>
                        </div>
                        <div  className="col-12 col-md-4 mt-3">
                            <TweetColum tweets={TWEETS2}/>
                        </div>
                        <div  className="col-12 col-md-4 mt-3">
                            <TweetColum tweets={TWEETS3}/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Main;
