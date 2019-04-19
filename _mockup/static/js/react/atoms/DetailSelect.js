class DetailSelect extends React.Component {
    render() {
        return (
            <div className="cya-margin-40">
                <a role="button" className="btn btn-primary cya-btn-center cya-btn-primary" onClick={() => this.props.onClick(this.props)}>Seleccionar</a>
            </div>
        );
    }
}
