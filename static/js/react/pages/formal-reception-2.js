const formalMenuData = [
    {key: "inicio", href: "#", text: "Inicio", active: false},
    {key: "budget", href: "budgets.html", text: "Presupuestos en PDF", active: false},
    {key: "faq", href: "faq.html", text: "FAQ", active: false},
    {key: "contact", href: "contact.html", text: "Contacto", active: false}
]

const formalReception2Data = [
    {key: 1, text: "Tablas de fiambre con panes caseros."},
    {key: 2, text: "Empanadas gustos a elecci&oacute;n:", data: [
        {key: 3, text: "Carne."},
        {key: 4, text: "Pollo."},
        {key: 5, text: "Jam&oacute;n y queso."}
    ]},
    {key: 6, text: "Brochettes de pollo, carne, cerdo y vegetales marinados en salsa de soja."}
]


class FormalReception2 extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <NavMenu data={formalMenuData} href="index.html" />
                <div className="row row-full">
                    <div className="col-sm-12 col-md-12 cya-type cya-formal-reception-2">
                        <div className="cya-description-background">
                            <DetailTitle text="Recepci&oacute;n #2" />
                            <DetailDescription text="El servicio comprende:" />
                            <DetailList key="list" data={formalReception2Data} className="cya-description" />
                            <DetailPrice text="$130 por persona" />
                            <DetailSelect href="formal-entry.html" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
  <FormalReception2 />,
  document.getElementById('root')
);
