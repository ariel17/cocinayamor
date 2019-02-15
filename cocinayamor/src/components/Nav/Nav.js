import React from 'react';
import styled from 'styled-components';
import '../../Colors.css';
import PropTypes from 'prop-types'

const defaultNavData = {
    brand: {
        href: "/",
        text: "C&A",
    },
    items: [
        {key: "home", href: "/", text: "Inicio"},
        {key: "budgets", href: "/budgets/", text: "Presupuestos en PDF"},
        {key: "faq", href: "/faq/", text: "FAQ"},
        {key: "contact", href: "/contact/", text: "Contacto"}
    ]
}

function enableNavItem(key) {
    let nav = { ...defaultNavData };
    if (key !== "") {
        nav.items.forEach(function(i) {
            i.active = i.key === key;
        })
    }
    return nav;
}


class Item extends React.Component {
    getClassName() {
        let className = "nav-item";
        if (this.props.data.active) {
            return className + " active";
        }
        return className;
    }

    render() {
        let className = this.getClassName();
        let data = this.props.data;
        return (
            <li className={className}>
                <a className="nav-link" href={data.href}>{data.text}</a>
            </li>
        );
    }
}


const Root = styled.nav`
    padding: 0;
`

const Brand = styled.a`
    font-family: 'Berkshire Swash', cursive;
`

/**
 * Navigation bar, for whole site. Brand and items properties are immutable.
 */
class Nav extends React.Component {
    static propTypes = {
        /**
         * Indicates the navigation item that must be enabled by name, to
         * highlight current page location. It can take one of the following
         * values:
         *
         * * `home`
         * * `budgets`
         * * `faq`
         * * `contact`
         */
        enabled: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = this.props;
    }

    render() {
        let data = enableNavItem(this.state.enabled)

        return (
            <Root className="navbar navbar-expand-lg navbar-dark bg-color-primary-0">
                <Brand className="navbar-brand" href={data.brand.href}>{data.brand.text}</Brand>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav ml-auto">
                        {data.items.map((item, key) => {
                            return <Item key={'nav-' + key} data={item} />;
                        })}
                    </ul>
                </div>
            </Root>
        );
    }
}

export default Nav;
