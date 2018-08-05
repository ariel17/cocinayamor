class DetailPage extends React.Component {
    render() {
        let data = this.props.data;
        return (
            <div className="container-fluid">
                <Nav href={data.nav.href} text={data.nav.text} items={data.nav.items} />
                <Detail className={data.detail.className} title={data.detail.title} description={data.detail.description} multi={data.detail.multi} max={data.detail.max} items={data.detail.items} note={data.detail.note} price={data.detail.price} next={data.detail.next} onClick={this.props.data.onClick}/>
            </div>
        );
    }
}

