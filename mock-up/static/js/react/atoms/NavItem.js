class NavItem extends React.Component {
    getClassName() {
        var className = "nav-item";
        if (this.props.active) {
            className += " active";
        }
        return className;
    }

    render() {
        return (
            <li className={this.getClassName()}>
                <a className="nav-link" href={this.props.href}>{this.props.text}</a>
            </li>
        );
    }
}
