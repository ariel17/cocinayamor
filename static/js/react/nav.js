class NavItem extends React.Component {
    getClassName() {
        var className = "nav-item";
        if (this.props.active == "true") {
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
                        <NavItem href="#" text="Inicio" active="true" />
                        <NavItem href="budgets.html" text="Presupuestos en PDF" />
                        <NavItem href="faq.html" text="FAQ" />
                        <NavItem href="contact.html" text="Contacto" />
                    </ul>
                </div>
            </nav>
        );
    }
}

ReactDOM.render(
  <NavMenu href="index-react.html" />,
  document.getElementById('navMenu')
);
