class DetailList extends React.Component {
    render() {
        return (
            <ul className={this.props.className}>
                {this.props.data.map((item, key) => {
                    var li = <li key="li-{item.key}">{item.text}</li>;
                    var ul;
                    if (item.data && item.data.length > 0) {
                        ul = <DetailList key="ul-{item.key}" data={item.data} />;
                    }
                    return [li, ul];
                })}
            </ul>
        );
    }
}
