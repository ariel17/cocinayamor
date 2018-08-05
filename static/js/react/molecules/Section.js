class Section extends React.Component {
    render() {
        let title;
        if (this.props.title != "") { 
            title = <SectionTitle key="title" text={this.props.title} />;
        }
        let section = <div key="section" className="row row-full">
            {this.props.options.map((option, key) => {
                return <SectionOption key={option.key} className={option.className} onClick={() => this.props.onClick(option.next)} text={option.text} />
            })}
        </div>;
        return [title, section];
    }
}
