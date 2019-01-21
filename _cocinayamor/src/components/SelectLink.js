import React from 'react';


class SelectLink extends React.Component {
    render() {
        let data = this.props.data;
        return (
            <div className="cya-margin-40">
                <a role="button" className="btn btn-primary cya-btn-center cya-btn-primary" onClick={() => data.onClick(data)}>Seleccionar</a>
            </div>
        );
    }
}
