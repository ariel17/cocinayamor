class Total extends React.Component {
    render() {
        let data = this.props.data;
        let note;
        if (data.note != null) {
            note = <DetailNote text={data.note} />
        }
        return (
            <div className="row row-full">
                <div className={'col-sm-12 col-md-12 cya-type ' + data.className}>
                    <div className="cya-description-background">
                        <DetailTitle text={data.title} />
                        <DetailDescription text={data.description} />
                        <DetailList data={data.items} className="cya-description" />
                        <TotalPersons className={data.options.className} data={data.options.data} />
                        <DetailPrice text={data.price.text} />
                        {note}
                    </div>
                </div>
            </div>
        );
    }
}
