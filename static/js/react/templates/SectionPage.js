class SectionPage extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Nav href={this.props.data.nav.href} text={this.props.data.nav.text} items={this.props.data.nav.items} />
                <Section title={this.props.data.section.title} options={this.props.data.section.options} onClick={this.props.data.onClick}/>
            </div>
        );
    }
}
