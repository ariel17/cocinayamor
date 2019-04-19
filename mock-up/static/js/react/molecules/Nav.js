class Nav extends React.Component {
    render() {
        let data = this.props.data;
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <NavBrand href={data.href} text={data.text} />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav ml-auto">
                        {data.items.map((item, key) => {
                            return <NavItem key={item.key} href={item.href} text={item.text} active={item.active} />;
                        })}
                    </ul>
                </div>
            </nav>
        );
    }
}
