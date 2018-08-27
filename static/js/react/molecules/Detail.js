class Detail extends React.Component {
    render() {
        let data = this.props.data;
        let note;
        if (data.note != null) {
            note = <DetailNote text={data.note} />
        }
        let list;
        if (data.multi) {
            list = <DetailMultiSelect max={data.max} data={data.items} className="cya-description" />;
        } else {
            list = <DetailList data={data.items} className="cya-description" />;
        }
        return (
            <div className="row row-full">
                <div className={'col-sm-12 col-md-12 cya-type ' + data.className}>
                    <div className="cya-description-background">
                        <DetailTitle text={data.title} />
                        <DetailDescription text={dataa.description} />
                        {list}
                        {note}
                        <DetailPrice text={data.price.text} />
                        <DetailSelect next={data.next} onClick={data.onClick} />
                    </div>
                </div>
            </div>
        );
    }
}
