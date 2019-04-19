class NavBrand extends React.Component {
    render() {
        return (
            <a className="navbar-brand" href={this.props.href}>{this.props.text}</a>
        );
    }
}
