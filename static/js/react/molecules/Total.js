class Total extends React.Component {
    render() {
        let note;
        if (this.props.note != null) {
            note = <DetailNote text={this.props.note} />
        }
        return (
            <div className="row row-full">
                <div className={'col-sm-12 col-md-12 cya-type ' + this.props.className}>
                    <div className="cya-description-background">
                        <DetailTitle text={this.props.title} />
                        <DetailDescription text={this.props.description} />
                        <DetailList data={this.props.items} className="cya-description" />
                        <TotalPersons className={this.props.options.className} data={this.props.options.data} />
                        <DetailPrice text={this.props.price.text} />
                        {note}
                    </div>
                </div>
            </div>
        );
    }
}
