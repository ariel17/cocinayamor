class Section extends React.Component {
    render() {
        let data = this.props.data;
        let title;
        if (data.title != "") { 
            title = <SectionTitle key="title" text={data.title} />;
        }
        let section = <div key="section" className="row row-full">
            {data.options.map((option, key) => {
                return <SectionOption key={option.key} className={option.className} onClick={() => this.props.onClick(option)} text={option.text} />
            })}
        </div>;
        return [title, section];
    }
}
