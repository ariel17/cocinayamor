import React from 'react';
import styled from 'styled-components';


const Overlay = styled.div`
    height: 100%;
    width: 110%;
    margin-left: -1em;
    margin-right: -1em;
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
    font-size: 1.5em;
    font-family: 'Berkshire Swash', cursive;
    &:hover {
        font-weight: bold;
        -webkit-transform: scale(1.5);
    }
`

const Boder = styled.p `
    font-family: 'Berkshire Swash', cursive;
    margin: 5% 25%;
    border: 1px solid white;
    & > a {
        font-family: 'Berkshire Swash', cursive;
        text-decoration: none;
        color: white;
    }
`


class Option extends React.Component {
    render() {
        let data = this.props.data;
        return (
            <div className={'col-sm-12 cya-type ' + data.className}>
                <Overlay>
                    <Text>
                        <Boder><a onClick={data.onClick}>{data.text}</a></Boder>
                    </Text>
                </Overlay>
            </div>
        );
    }
}


export default Option;
