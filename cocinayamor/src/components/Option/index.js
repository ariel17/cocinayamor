import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const Container = styled.div`
    padding: 0;
`

const Overlay = styled.div`
    height: 100%;
    width: 100%;
    transition: 0.5s;
    display: table;
    &:hover {
        background: rgba(3, 92, 161, 0.6);
        z-index: 2;
    }
`

const Text = styled.div`
    height: 100%;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    color: white;
    transition: 0.5s;
    font-family: 'Berkshire Swash', cursive;
    font-size: 1.5em;
    &:hover {
        font-weight: bold;
        -webkit-transform: scale(1.5);
    }
`

const Boder = styled.p `
    font-family: 'Berkshire Swash', cursive;
    margin: 5% 25%;
    border: 1px solid white;
    & > button {
        font-family: 'Berkshire Swash', cursive;
        color: white;
        font-size: 1.5em;
    }
`

const Link = styled.button`
    text-decoration: none !important;
    &:hover {
        color: white !important;
    }
`

/**
 * It shows a choosable option inside a section.
 */
class Option extends React.Component {
    static propTypes = {
        /** CSS class name to customize styles, if present. */
        className: PropTypes.string,
        /** On-click event to fire on user selection. */
        onClick: PropTypes.func.isRequired,
        /** Option name to show. */
        text: PropTypes.string.isRequired
    }

    static defaultProps = {
        className: ""
    }

    constructor(props) {
        super(props);
        this.state = this.props;
    }

    render() {
        return (
            <Container className={'col-sm-12 cya-type bg-color-primary-0 ' + this.state.className}>
                <Overlay>
                    <Text>
                        <Boder><Link type="button" className="btn btn-link" onClick={this.state.onClick}>{this.state.text}</Link></Boder>
                    </Text>
                </Overlay>
            </Container>
        );
    }
}


export default Option;
