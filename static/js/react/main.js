class Option extends React.Component {
    render() {
        return (
            <div className={'col-sm-12 col-md-3 cya-type ' + this.props.className}>
                <div className="cya-overlay">
                    <div className="cya-text">
                        <p className="cya-border"><a href={this.props.href}>{this.props.text}</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

class Main extends React.Component {
    render() {
        return (
            <div className="row row-full">
                <Option className="cya-formal" href="formal.html" text="Formal" />
                <Option className="cya-informal" href="informal.html" text="Informal" />
                <Option className="cya-lunch" href="lunch.html" text="Luch" />
                <Option className="cya-country" href="campestre.html" text="Campestre" />
            </div>
        );
    }
}

ReactDOM.render(
  <Main />,
  document.getElementById('main')
);
