import React from 'react';


class RowTitle extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-12 col-md-12 cya-section">
                    <div className="text-center cya-title">{this.props.text}</div>
                </div>
            </div>
        );
    }
}


