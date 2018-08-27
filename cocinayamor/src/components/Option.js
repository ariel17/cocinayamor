import React from 'react';


class Option extends React.Component {
    render() {
        let data = this.props.data;
        return (
            <div className="col-sm-12 cya-type {data.className}">
                <div className="cya-overlay">
                    <div className="cya-text">
                        <p className="cya-border"><a onClick={data.onClick}>{data.text}</a></p>
                    </div>
                </div>
            </div>
        );
    }
}
