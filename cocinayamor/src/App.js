import React, { Component } from 'react';
import Nav from './containers/Nav';

const defaultNav = {
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



class App extends Component {
  render() {
    return (
      <div className="App bg-color-primary-0">
        <Nav data={defaultNav} />
      </div>
    );
  }
}

export default App;
