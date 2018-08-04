const formalMenuData = [
    {key: "inicio", href: "#", text: "Inicio", active: false},
    {key: "budget", href: "budgets.html", text: "Presupuestos en PDF", active: false},
    {key: "faq", href: "faq.html", text: "FAQ", active: false},
    {key: "contact", href: "contact.html", text: "Contacto", active: false}
]


class FormalEntry extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <NavMenu data={formalMenuData} href="index.html" />
                <SectionTitle text="Entrada" />
                <div className="row row-full">
                    <Option className="col-md-3 cya-formal-entry-1" href="formal-entry-1.html" text="Opci&oacute;n #1" />
                    <Option className="col-md-3 cya-formal-entry-2" href="formal-entry-2.html" text="Opci&oacute;n #2" />
                    <Option className="col-md-3 cya-formal-entry-3" href="formal-entry-3.html" text="Opci&oacute;n #3" />
                    <Option className="col-md-3 cya-done" href="formal-principal.html" text="Sin entrada" />
                </div>
            </div>
        );
    }
}


ReactDOM.render(
  <FormalEntry />,
  document.getElementById('root')
);
