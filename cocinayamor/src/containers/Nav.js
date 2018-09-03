import React from 'react';
import NavBrand from '../components/NavBrand';
import NavItem from '../components/NavItem';


class Nav extends React.Component {
    render() {
        let data = this.props.data;
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <NavBrand data={data.brand} />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav ml-auto">
                        {data.items.map((item, key) => {
                            return <NavItem key={'nav-' + key} data={item} />;
                        })}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;
