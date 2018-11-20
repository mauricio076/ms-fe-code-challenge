import React, {Component} from 'react';
import {UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

class ThemeSwitcher extends Component {

    constructor(props) {
        super(props);

        this.chooseTheme = this.chooseTheme.bind(this);
        this.resetTheme = this.resetTheme.bind(this);

        this.state = {theme: null, dropdownOpen: false};
    }


    resetTheme = evt => {
        evt.preventDefault();
        this.setState({theme: null});
        this.props.onThemeChange(null);
    };

    chooseTheme = (theme, evt) => {
        evt.preventDefault();
        this.setState({theme});
        this.props.onThemeChange(theme, evt);
    };

    render() {


        const theme = this.state.theme;
        const themeClass = theme ? theme.toLowerCase() : 'secondary';

        return (
            <UncontrolledDropdown nav inNavbar >
                <DropdownToggle nav caret>
                    Theme
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem onClick={e => this.chooseTheme('Dark', e)}>Dark Theme</DropdownItem>
                    <DropdownItem onClick={e => this.chooseTheme('Light', e)}>Light Theme</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );

    }

}

export default ThemeSwitcher;
