import React, { Component } from 'react';
import Nav from './containers/Nav';
import Section from './containers/Section';

const navData = {
    brand: {
        href: "/",
        text: "C&A",
    },
    items: [
        {key: "inicio", href: "index.html", text: "Inicio", active: true},
        {key: "budget", href: "budgets.html", text: "Presupuestos en PDF", active: false},
        {key: "faq", href: "faq.html", text: "FAQ", active: false},
        {key: "contact", href: "contact.html", text: "Contacto", active: false}
    ]
}

const sectionData = {
    options: [
        {next: {key: "formal"}, className: "col-md-3 cya-formal", text: "Formal"},
        {next: {key: "informal"}, className: "col-md-3 cya-informal", text: "Informal"},
        {next: {key: "lunch"}, className: "col-md-3 cya-lunch", text: "Lunch"},
        {next: {key: "campestre"}, className: "col-md-3 cya-country", text: "Campestre"}
    ]
}



class App extends Component {
  render() {
    return (
      <div className="container-fluid bg-color-primary-0">
        <Nav data={navData} />
        <Section data={sectionData} />
      </div>
    );
  }
}

export default App;
