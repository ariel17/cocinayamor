import React from 'react';


class Note extends React.Component {
    render() {
        return (
            <div className="cya-description cya-margin-40">
                <p>{this.props.text}</p>
            </div>
        );
    }
}
