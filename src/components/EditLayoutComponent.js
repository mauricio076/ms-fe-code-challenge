import React, {Component} from 'react';
import { Card, CardText, CardBody, CardTitle} from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class EditLayout extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.changeTweetsPerColumn = this.changeTweetsPerColumn.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            dropdownOpen: false,
            tweetsPerColumn: 30
        };
    }

    handleChange(e) {
        this.props.onTweetsPerColumnChange(e.target.value);
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    changeTweetsPerColumn(event) {
        event.preventDefault();
        this.setState({
            //dropdownOpen: !this.state.dropdownOpen,
            tweetsPerColumn: event.currentTarget.value
        });
    }

    render() {
        const tweetsPerColumn = this.props.tweetsPerColumn;
        return (
            <div className="flex float-right d-inline-flex p-2">
                <Card className="mt-3">
                    <CardBody>
                        <CardTitle>
                            Modify Layout
                        </CardTitle>

                        <CardBody>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} size="sm" >
                                <DropdownToggle caret>
                                    Tweets per column
                                </DropdownToggle>
                                <DropdownMenu >
                                    <DropdownItem onClick={this.handleChange} value={10}>10</DropdownItem>
                                    <DropdownItem onClick={this.handleChange} value={20}>20</DropdownItem>
                                    <DropdownItem onClick={this.handleChange} value={30}>30</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </CardBody>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
