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

class NavMenu extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href={this.props.href}>C&A</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav ml-auto">
                        {this.props.data.map((item, key) => {
                            return <NavItem key={item.key} href={item.href} text={item.text} active={item.active} />;
                        })}
                    </ul>
                </div>
            </nav>
        );
    }
}
