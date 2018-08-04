const data = {
    nav: {
        href: "/",
        text: "C&A",
        items: [
            {key: "inicio", href: "#", text: "Inicio", active: false},
            {key: "budget", href: "budgets.html", text: "Presupuestos en PDF", active: false},
            {key: "faq", href: "faq.html", text: "FAQ", active: false},
            {key: "contact", href: "contact.html", text: "Contacto", active: false}
        ]
    },
    section: {
        title: "Recepción",
        options: [
            {key: 1, className: "col-md-4 cya-formal-reception-1", href: "formal-reception-1.html", text: "Opción #1"},
            {key: 2, className: "col-md-4 cya-formal-reception-2", href: "formal-reception-2.html", text: "Opción #2"},
            {key: 3, className: "col-md-4 cya-formal-reception-3", href: "formal-reception-3.html", text: "Opción #3"},
        ]
    }
}


ReactDOM.render(
  <SectionPage nav={data.nav} section={data.section}/>,
  document.getElementById('root')
);
