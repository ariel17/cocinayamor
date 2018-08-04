class SectionPage extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Nav href={this.props.nav.href} text={this.props.nav.text} items={this.props.nav.items} />
                <Section title={this.props.section.title} options={this.props.section.options} />
            </div>
        );
    }
}
