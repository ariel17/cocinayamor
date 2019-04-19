class SectionPage extends React.Component {
    render() {
        let data = this.props.data;
        return (
            <div className="container-fluid">
                <Nav data={data.nav} />
                <Section data={data.section} />
            </div>
        );
    }
}
