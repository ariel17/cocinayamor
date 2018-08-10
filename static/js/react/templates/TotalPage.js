class TotalPage extends React.Component {
    render() {
        let data = this.props.data;
        return (
            <div className="container-fluid">
                <Nav href={data.nav.href} text={data.nav.text} items={data.nav.items} />
                <Total className={data.total.className} title={data.total.title} description={data.total.description} items={data.total.items} options={data.total.options} note={data.total.note} next={data.total.next} onClick={this.props.data.onClick}/>
            </div>
        );
    }
}

