const formalMenuData = [
    {key: "inicio", href: "#", text: "Inicio", active: false},
    {key: "budget", href: "budgets.html", text: "Presupuestos en PDF", active: false},
    {key: "faq", href: "faq.html", text: "FAQ", active: false},
    {key: "contact", href: "contact.html", text: "Contacto", active: false}
]

const formalReception3Data = [
    {key: 1, text: "Tabla de fiambres con panes caseros."},
    {key: 2, text: "Empanadas gustos a elecci&oacute;n (carne, pollo, jam&oacute;n y queso)."},
    {key: 3, text: "Canastitas gustos a elecci&oacute;n (verdura, capresse, humita y at&uacute;n)."},
    {key: 4, text: "Brusquetas surtidas."},
    {key: 5, text: "Grisines con dips (ciboulette, albahaca, queso azul)."}
]


class FormalReception3 extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <NavMenu data={formalMenuData} href="index.html" />
                <div className="row row-full">
                    <div className="col-sm-12 col-md-12 cya-type cya-formal-reception-3">
                        <div className="cya-description-background">
                            <DetailTitle text="Recepci&oacute;n #2" />
                            <DetailDescription text="El servicio comprende:" />
                            <DetailList key="list" data={formalReception3Data} className="cya-description" />
                            <DetailPrice text="$150 por persona" />
                            <DetailSelect href="formal-entry.html" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
  <FormalReception3 />,
  document.getElementById('root')
);
