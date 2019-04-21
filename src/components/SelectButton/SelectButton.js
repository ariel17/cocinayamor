import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const A = styled.a`
    /* center */
    display: block;
    margin: 0 auto;

    /* primary customization */
    color: white !important;
    background-color: #90DBFB;
    border-radius: 30px;
    text-decoration: none;
    font-size: 1.2em;
`

/**
 * Select button for option confirmation.
 */
class SelectButton extends React.Component {
    static propTypes = {
        /** On-click event to fire on user selection. */
        onClick: PropTypes.func.isRequired,
    }

    constructor (props) {
        super(props);
        this.state = this.props;
    }

    render() {
        return (
            <div>
                <A role="button" className="btn btn-primary" onClick={this.state.onClick}>{this.props.children}</A>
            </div>
        );
    }
}

export default SelectButton
