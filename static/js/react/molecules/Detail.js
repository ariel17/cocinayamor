class Detail extends React.Component {
    render() {
        let note;
        if (this.props.note != null) {
            note = <DetailNote text={this.props.note} />
        }
        let list;
        if (this.props.multi) {
            list = <DetailMultiSelect max={this.props.max} data={this.props.items} className="cya-description" />;
        } else {
            list = <DetailList data={this.props.items} className="cya-description" />;
        }
        return (
            <div className="row row-full">
                <div className={'col-sm-12 col-md-12 cya-type ' + this.props.className}>
                    <div className="cya-description-background">
                        <DetailTitle text={this.props.title} />
                        <DetailDescription text={this.props.description} />
                        {list}
                        {note}
                        <DetailPrice text={this.props.price.text} />
                        <DetailSelect next={this.props.next} onClick={this.props.onClick} />
                    </div>
                </div>
            </div>
        );
    }
}
