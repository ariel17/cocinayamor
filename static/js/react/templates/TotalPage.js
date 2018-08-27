class TotalPage extends React.Component {
    render() {
        let data = this.props.data;
        return (
            <div className="container-fluid">
                <Nav data={data.nav} />
                <Total data={data.total} />
            </div>
        );
    }
}

