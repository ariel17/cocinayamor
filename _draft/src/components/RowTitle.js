import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    font-family: 'Berkshire Swash', cursive;
    color: white;
    padding: 10px 15px;
`

class RowTitle extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-12 col-md-12 cya-section">
                    <Div className="text-center">{this.props.text}</Div>
                </div>
            </div>
        );
    }
}


