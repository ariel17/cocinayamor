const formalMenuData = [
    {key: "inicio", href: "#", text: "Inicio", active: false},
    {key: "budget", href: "budgets.html", text: "Presupuestos en PDF", active: false},
    {key: "faq", href: "faq.html", text: "FAQ", active: false},
    {key: "contact", href: "contact.html", text: "Contacto", active: false}
]


class Formal extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <NavMenu data={formalMenuData} href="index.html" />
                <SectionTitle text="Recepci&oacute;n" />
                <div className="row row-full">
                    <Option className="col-md-4 cya-formal-reception-1" href="formal-reception-1.html" text="Opci&oacute;n #1" />
                    <Option className="col-md-4 cya-formal-reception-2" href="formal-reception-2.html" text="Opci&oacute;n #2" />
                    <Option className="col-md-4 cya-formal-reception-3" href="formal-reception-3.html" text="Opci&oacute;n #3" />
                </div>
            </div>
        );
    }
}


ReactDOM.render(
  <Formal />,
  document.getElementById('root')
);
