import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

type Props = {
    /**
     * The font color to use.
     */
    color?: PropTypes.string
}

const Div = styled.div`
    color: ${(props: Props) => props.color || "white"};
    margin-left: 4%;
    margin-right: 8%;
`
/**
 * A long text description to display.
 */
const Description = (props: Props) => <Div {...props} />

Description.defaultProps = {
  color: 'white'
}

export default Description
