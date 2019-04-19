class TotalPersons extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <p>
                    {this.props.text}
                    <select className="form-control cya-select">
                        {this.props.data.map((item, key) => {
                            let selected = "";
                            if (item.selected) {
                                selected = "selected";
                            }
                            return <option key={'option-' + item.key} selected={selected}>{item.text}</option>;
                        })}
                    </select>
                </p>
            </div>
        );
    }
}
