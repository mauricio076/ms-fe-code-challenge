import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
} from 'reactstrap';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import ThemeSwitcher from './ThemeSwitcherComponent'

export default class EditLayout extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.changeTweetsPerColumn = this.changeTweetsPerColumn.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleThemeChange = this.handleThemeChange.bind(this);
        this.state = {
            dropdownOpen: false,
            tweetsPerColumn: 30,
            theme: this.props.theme
        };
    }

    handleChange(e) {
        this.props.onTweetsPerColumnChange(e.target.value);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    changeTweetsPerColumn(event) {
        event.preventDefault();
        this.setState({
            //dropdownOpen: !this.state.dropdownOpen,
            tweetsPerColumn: event.currentTarget.value
        });
    }

    handleThemeChange = (theme, ev) => {
        this.props.onThemeChange(theme);
    };

    render() {
        const theme = this.state.theme;

        const themeClass = theme ? theme.toLowerCase() : 'secondary';
const dark = themeClass === "dark";

        return (
            <div>

                <Navbar light color="light"  expand="md">

                    <NavbarToggler onClick={this.toggle} className="mr-2" />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Tweets per column
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem onClick={this.handleChange}
                                                  value={10}>10</DropdownItem>
                                    <DropdownItem onClick={this.handleChange}
                                                  value={20}>20</DropdownItem>
                                    <DropdownItem onClick={this.handleChange}
                                                  value={30}>30</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <ThemeSwitcher onThemeChange={this.handleThemeChange}
                                           theme={themeClass}
                                           size="sm"/>
                            {/*<Card className="mt-3">
                            <CardBody>
                                <CardTitle>
                                    Modify Layout
                                </CardTitle>
                                <CardBody>
                                    <div className="container container-fluid">
                                        <div className="row">
                                            <div className="col w-100">
                                                <Dropdown isOpen={this.state.dropdownOpen}
                                                          toggle={this.toggle}
                                                          size="sm"
                                                          className="w-100">
                                                    <DropdownToggle caret>
                                                        Tweets per column
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem onClick={this.handleChange}
                                                                      value={10}>10</DropdownItem>
                                                        <DropdownItem onClick={this.handleChange}
                                                                      value={20}>20</DropdownItem>
                                                        <DropdownItem onClick={this.handleChange}
                                                                      value={30}>30</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                        <div className="row m-1"/>
                                        <div className="row">
                                            <div className="col">
                                                <ThemeSwitcher onThemeChange={this.handleThemeChange}
                                                               theme={themeClass}
                                                               size="sm"/>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </CardBody>
                        </Card>*/}

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
