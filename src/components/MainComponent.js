import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import TweetsComponent from "./TweetsComponent";
import {Jumbotron} from 'reactstrap';
import Footer from "./FooterComponent";
import EditLayout from "./EditLayoutComponent";

class Main extends Component {

    constructor(props) {
        super(props);

        this.handleTweetsPerColumnChange = this.handleTweetsPerColumnChange.bind(this);
        this.handleThemeChange = this.handleThemeChange.bind(this);
        this.state = {
            tweetsPerColumn: 30,
            theme: "default"
        };
    }

    handleTweetsPerColumnChange(tweetsPerColumn) {
        this.setState({tweetsPerColumn})
    }

    handleThemeChange(theme) {
        this.setState({theme})
    }


    render() {

        const tweetsPerColumn = this.state.tweetsPerColumn;
        const theme = this.state.theme;

        const themeClass = theme ? theme.toLowerCase() : 'secondary';

        return (
            <div className={`bg-${themeClass}`}>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>Frontend Coding Challenge</title>
                </Helmet>
                <EditLayout onThemeChange={this.handleThemeChange}  onTweetsPerColumnChange={this.handleTweetsPerColumnChange} theme={theme}/>
                <Jumbotron>
                    <h1 className="display-3 text-sm-center text-left">Code challenge</h1>

                </Jumbotron>

                <div className="container ">
                    <div className="row">
                        <div className="col-12 col-lg-4 mt-2">
                            <TweetsComponent screen_name="MakeSchool" tweetsPerColumn={tweetsPerColumn}
                                             theme={themeClass}/>
                        </div>
                        <div className="col-12 col-lg-4 mt-2">
                            <TweetsComponent screen_name="newsycombinator" tweetsPerColumn={tweetsPerColumn}
                                             theme={themeClass}/>
                        </div>
                        <div className="col-12 col-lg-4 mt-2">
                            <TweetsComponent screen_name="ycombinator" tweetsPerColumn={tweetsPerColumn}
                                             theme={themeClass}/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

        );
    }
}

export default Main;
