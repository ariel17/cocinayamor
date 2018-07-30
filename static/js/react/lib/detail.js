class DetailTitle extends React.Component {
    render() {
        return <h1 className="text-center cya-title">{this.props.text}</h1>;
    }
}


class DetailDescription extends React.Component {
    render() {
        return (
            <div className="cya-description">
                <p>{this.props.text}</p>
            </div>
        );
    }
}


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


class DetailPrice extends React.Component {
    render() {
        return (
            <div className="cya-price">
                <p className="cya-border">${this.props.text}</p>
            </div>
        );
    }
}


class DetailSelect extends React.Component {
    render() {
        return (
            <div className="cya-margin-40">
                <a href={this.props.href} role="button" className="btn btn-primary cya-btn-center cya-btn-primary">Seleccionar</a>
            </div>
        );
    }
}
