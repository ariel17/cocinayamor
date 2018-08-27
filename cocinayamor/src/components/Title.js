import React from 'react';


class Title extends React.Component {
    render() {
        let data = this.props.data;
        return <h1 className="text-center cya-title">{data.text}</h1>;
    }
}
