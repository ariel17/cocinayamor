import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const defaultNavData = {
    brand: {
        href: "/",
        text: "C&A",
    },
    items: [
        {key: "home", href: "/", text: "Inicio", active: false},
        {key: "budgets", href: "/budgets/", text: "Presupuestos en PDF", active: false},
        {key: "faq", href: "/faq/", text: "FAQ", active: false},
        {key: "contact", href: "/contact/", text: "Contacto", active: false}
    ]
}

function enableNavItem(key) {
    let nav = { ...defaultNavData };
    nav.items.forEach(function(i) {
        i.active = i.key === key;
    })
    return nav;
}


class NavItem extends React.Component {
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


const NavRoot = styled.nav`
    padding: 0;
`

const NavbarBrand = styled.a`
    font-family: 'Berkshire Swash', cursive;
`

/**
 * Navigation bar, for whole site.
 */
class Nav extends React.Component {
    static propTypes = {
        /**
         * Indicates the navigation item that must be enabled by name, to
         * highlight current page location.
         */
        enabled: PropTypes.string,
        /**
         * Contains the brand link configuration.
         */
        brand: PropTypes.shape({
            /** The URL to redirect. */
            href: PropTypes.string,
            /** The text to show in link. */
            text: PropTypes.string
        }),
        items: PropTypes.arrayOf(PropTypes.shape({
            /** The unique item identification as key index. */
            key: PropTypes.string,
            /** The URL to the section in page. */
            href: PropTypes.string,
            /** The text to show as section name. */
            text: PropTypes.string
        }))
    }

    constructor(props) {
        super(props);
        this.state = this.props;
    }

    render() {
        let data = enableNavItem(this.state.enabled)

        return (
            <NavRoot className="navbar navbar-expand-lg navbar-dark">
                <NavbarBrand className="navbar-brand" href={data.brand.href}>{data.brand.text}</NavbarBrand>
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
            </NavRoot>
        );
    }
}

export default Nav;
