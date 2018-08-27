import React from 'react';


class NavBrand extends React.Component {
    render() {
        let data = this.props.data;
        return (
            <a className="navbar-brand" href={data.href}>{data.text}</a>
        );
    }
}
