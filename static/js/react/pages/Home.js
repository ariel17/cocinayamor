const data = {
    nav: {
        href: "/",
        text: "C&A",
        items: [
            {key: "inicio", href: "#", text: "Inicio", active: true},
            {key: "budget", href: "budgets.html", text: "Presupuestos en PDF", active: false},
            {key: "faq", href: "faq.html", text: "FAQ", active: false},
            {key: "contact", href: "contact.html", text: "Contacto", active: false}
        ]
    },
    section: {
        title: "",
        options: [
            {key: "formal", className: "col-md-3 cya-formal", href: "formal.html", text: "Formal"},
            {key: "informal", className: "col-md-3 cya-informal", href: "informal.html", text: "Informal"},
            {key: "lunch", className: "col-md-3 cya-lunch", href: "lunch.html", text: "Lunch"},
            {key: "country", className: "col-md-3 cya-country", href: "campestre.html", text: "Campestre"}
        ]
    }
}


ReactDOM.render(
  <SectionPage nav={data.nav} section={data.section}/>,
  document.getElementById('root')
);
