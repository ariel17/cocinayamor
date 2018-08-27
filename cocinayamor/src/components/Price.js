import React from 'react';


class Price extends React.Component {
    render() {
        return (
            <div className="cya-price">
                <p className="cya-border">{this.props.text}</p>
            </div>
        );
    }
}
