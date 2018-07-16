const mainMenuData = [
    {key: "inicio", href: "#", text: "Inicio", active: true},
    {key: "budget", href: "budgets.html", text: "Presupuestos en PDF", active: false},
    {key: "faq", href: "faq.html", text: "FAQ", active: false},
    {key: "contact", href: "contact.html", text: "Contacto", active: false}
]



class Main extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <NavMenu data={mainMenuData} href="index-react.html" />
                <div className="row row-full">
                    <Option className="col-md-3 cya-formal" href="formal.html" text="Formal" />
                    <Option className="col-md-3 cya-informal" href="informal.html" text="Informal" />
                    <Option className="col-md-3 cya-lunch" href="lunch.html" text="Luch" />
                    <Option className="col-md-3 cya-country" href="campestre.html" text="Campestre" />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
