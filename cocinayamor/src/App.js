import React, { Component } from 'react';
import Nav from './containers/Nav';
import Section from './containers/Section';

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

const pagesData = {
    home: {
        type: "section",
        nav: enableNavItem("home"),
        data: {
            options: [
                {next: {key: "formal"}, className: "col-md-3 cya-formal", text: "Formal"},
                {next: {key: "informal"}, className: "col-md-3 cya-informal", text: "Informal"},
                {next: {key: "lunch"}, className: "col-md-3 cya-lunch", text: "Lunch"},
                {next: {key: "campestre"}, className: "col-md-3 cya-country", text: "Campestre"}
            ]
        }
    }
}



class App extends Component {

  constructor(props) {
      super(props);
      this.state = pagesData.home;
  }

  render() {
    let body;
    if (this.state.type === "section") {
        body = <Section data={this.state.data} />;
    }

    return (
      <div className="container-fluid bg-color-primary-0">
        <Nav data={this.state.nav} />
        {body}
      </div>
    );
  }
}

export default App;
