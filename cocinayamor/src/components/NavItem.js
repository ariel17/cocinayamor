import React from 'react';


class NavItem extends React.Component {
    getClassName() {
        let className = "nav-item";
        if (this.props.data.active) {
            return className + " active";
        }
        return className;
    }

    render() {
        let className = this.getClassName();
        let data = this.props.data;
        return (
            <li className={className}>
                <a className="nav-link" href={data.href}>{data.text}</a>
            </li>
        );
    }
}

export default NavItem;
