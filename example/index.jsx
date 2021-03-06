import React from 'react';
import { render } from 'react-dom';
import { fontStacks, countries, friends } from './data';
import '../style.css';
import SelectSearch from '../src';

function renderFriend(props, option) {
    const imgStyle = {
        borderRadius: '50%',
        verticalAlign: 'middle',
        marginRight: 10,
    };

    return (
        <button {...props} type="button">
            <span><img alt="" style={imgStyle} width="32" height="32" src={option.photo} /><span>{option.name}</span></span>
        </button>
    );
}

function renderFontValue(valueProps, ref, props) {
    const style = {
        fontFamily: (props && 'stack' in props) ? props.stack : null,
    };

    return (
        <input ref={ref} {...valueProps} style={style} />
    );
}

function renderFontOption(props, { name, stack }) {
    return (
        <button {...props} type="button">
            <span style={{ fontFamily: stack }}>{name}</span>
        </button>
    );
}

class App extends React.PureComponent {
    constructor(props) {
        super(props);

        this.ref = React.createRef();
    }

    state = {
        disabled: false,
        font: 'Playfair Display',
        country: 'SE',
        friends: [],
    };

    clear = () => {
        this.setState({
            font: '',
            country: '',
            friends: [],
        });
    };

    disable = () => {
        this.setState({
            disabled: !this.state.disabled,
        });
    };

    updateFont = (value) => this.setState({ font: value });
    updateCountry = (value) => this.setState({ country: value });
    updateFriends = (value) => this.setState({ friends: value });

    render() {
        const text = (this.state.disabled) ? 'Enable' : 'Disable';

        return (
            <div>
                <div className="test-btns">
                    <button type="button" className="clear" onClick={this.clear}>Clear values</button>
                    <button type="button" className="clear" onClick={this.disable}>{text}</button>
                </div>
                <SelectSearch
                    key="fonts"
                    ref={this.ref}
                    options={fontStacks}
                    value={this.state.font}
                    onChange={this.updateFont}
                    renderValue={renderFontValue}
                    renderOption={renderFontOption}
                    disabled={this.state.disabled}
                />
                <SelectSearch
                    key="countries"
                    value={this.state.country}
                    options={countries}
                    onChange={this.updateCountry}
                    placeholder="Your country"
                    search
                    disabled={this.state.disabled}
                />
                <SelectSearch
                    name="friends"
                    multiple
                    className="select-search-box select-search-box--friends select-search-box--multiple"
                    value={this.state.friends}
                    onChange={this.updateFriends}
                    options={friends}
                    placeholder="Search friends"
                    renderOption={renderFriend}
                    disabled={this.state.disabled}
                    search
                />
            </div>
        );
    }
}

render(
    <App />,
    document.getElementById('app'),
);
