class SectionOption extends React.Component {
    render() {
        return (
            <div className={'col-sm-12 cya-type ' + this.props.className}>
                <div className="cya-overlay">
                    <div className="cya-text">
                        <p className="cya-border"><a onClick={this.props.onClick}>{this.props.text}</a></p>
                    </div>
                </div>
            </div>
        );
    }
}
