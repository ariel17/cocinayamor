class DetailPage extends React.Component {
    render() {
        let data = this.props.data;
        return (
            <div className="container-fluid">
                <Nav data={data.nav} />
                <Detail data={data.detail} />
            </div>
        );
    }
}

