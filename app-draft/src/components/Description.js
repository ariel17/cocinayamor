import React from 'react';


class Description extends React.Component {
    render() {
        return (
            <div className="cya-description">
                <p>{this.props.text}</p>
            </div>
        );
    }
}
