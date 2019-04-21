import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    font-family: 'Berkshire Swash', cursive;
    color: white;
    text-align: center;
    margin: 0;
`

/**
 * A title that groups content (possibly options).
 */
const Title = (props) => <H1 {...props} />

export default Title;
