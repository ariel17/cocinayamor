const defaultNav = {
    href: "/",
    text: "C&A",
    items: [
        {key: "inicio", href: "index.html", text: "Inicio", active: false},
        {key: "budget", href: "budgets.html", text: "Presupuestos en PDF", active: false},
        {key: "faq", href: "faq.html", text: "FAQ", active: false},
        {key: "contact", href: "contact.html", text: "Contacto", active: false}
    ]
},
pages = {
    home: {
        type: "section",
        data: {
            nav: {
                href: "#",
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
                    {key: "formal", className: "col-md-3 cya-formal", next: "formal", text: "Formal"},
                    {key: "informal", className: "col-md-3 cya-informal", next: "informal", text: "Informal"},
                    {key: "lunch", className: "col-md-3 cya-lunch", next: "lunch", text: "Lunch"},
                    {key: "country", className: "col-md-3 cya-country", next: "campestre", text: "Campestre"}
                ]
            }
        }
    },
    formal: {
        type: "section",
        data: {
            section: {
                title: "Recepción",
                options: [
                    {key: "formal-reception-1", className: "col-md-4 cya-formal-reception-1", next: "formalReception1", text: "Opción #1"},
                    {key: "formal-reception-2", className: "col-md-4 cya-formal-reception-2", next: "formalReception2", text: "Opción #2"},
                    {key: "formal-reception-3", className: "col-md-4 cya-formal-reception-3", next: "formalReception3", text: "Opción #3"},
                ]
            }
        }
    },
    formalReception1: {
        type: "detail",
        data: {
            detail: {
                className: "cya-formal-reception-1",
                title: "Recepción #1",
                description: "El servicio comprende:",
                items: [
                    {key: 1, text: "Tablas de fiambre con panes caseros."},
                    {key: 2, text: "Empanadas gustos a elección:", data: [
                        {key: 3, text: "Carne."},
                        {key: 4, text: "Pollo."},
                        {key: 5, text: "Jamón y queso."}
                    ]},
                ],
                price: {
                    text: "$110 por persona"
                },
                next: "formalEntry",
            }
        }
    },
    formalReception2: {
        type: "detail",
        data: {
            detail: {
                className: "cya-formal-reception-2",
                title: "Recepción #2",
                description: "El servicio comprende:",
                items: [
                    {key: 1, text: "Tablas de fiambre con panes caseros."},
                    {key: 2, text: "Empanadas gustos a elección:", data: [
                        {key: 3, text: "Carne."},
                        {key: 4, text: "Pollo."},
                        {key: 5, text: "Jamón y queso."}
                    ]},
                    {key: 6, text: "Brochettes de pollo, carne, cerdo y vegetales marinados en salsa de soja."}
                ],
                price: {
                    text: "$130 por persona"
                },
                next: "formalEntry",
            }
        }
    },
    formalReception3: {
        type: "detail",
        data: {
            detail: {
                className: "cya-formal-reception-3",
                title: "Recepción #3",
                description: "El servicio comprende:",
                items: [
                    {key: 1, text: "Tabla de fiambres con panes caseros."},
                    {key: 2, text: "Empanadas gustos a elección (carne, pollo, jamón y queso)."},
                    {key: 3, text: "Canastitas gustos a elección (verdura, capresse, humita y atún)."},
                    {key: 4, text: "Brusquetas surtidas."},
                    {key: 5, text: "Grisines con dips (ciboulette, albahaca, queso azul)."}
                ],
                price: {
                    text: "$150 por persona"
                },
                next: "formalEntry",
            }
        }
    },
    formalEntry: {
        type: "section",
        data: {
            section: {
                title: "Entrada",
                options: [
                    {key: "formal-entry-1", className: "col-md-3 cya-formal-entry-1", next: "formalEntry1", text: "Opción #1"},
                    {key: "formal-entry-2", className: "col-md-3 cya-formal-entry-2", next: "formalEntry2", text: "Opción #2"},
                    {key: "formal-entry-3", className: "col-md-3 cya-formal-entry-3", next: "formalEntry3", text: "Opción #3"},
                    {key: "formal-entry-4", className: "col-md-3 cya-done", next: "formalPrincipal", text: "Sin entrada"},
                ]
            }
        }
    },
    formalEntry1: {
        type: "detail",
        data: {
            detail: {
                className: "cya-formal-entry-1",
                title: "Entrada #1",
                description: "El servicio comprende:",
                items: [
                    {key: 1, text: "Cazuelas a elección:", data: [
                        {key: 2, text: "Pollo y vegetales."},
                        {key: 3, text: "Carne y vegetales."},
                        {key: 4, text: "Ravioles con salsa de verdeo, champignon o fileto."},
                    ]},
                ],
                price: {
                    text: "$100 por persona"
                },
                next: "formalPrincipal",
            }
        }
    },
    formalEntry2: {
        type: "detail",
        data: {
            detail: {
                className: "cya-formal-entry-2",
                title: "Entrada #2",
                description: "El servicio comprende:",
                items: [
                    {key: 1, text: "Rodajas de ballotine de ave con ensalada rusa."}
                ],
                price: {
                    text: "$100 por persona"
                },
                next: "formalPrincipal",
            }
        }
    },
    formalEntry3: {
        type: "detail",
        data: {
            detail: {
                className: "cya-formal-entry-3",
                title: "Entrada #3",
                description: "El servicio comprende:",
                items: [
                    {key: 1, text: "Tortilla de papa española con ensalada de hojas verdes."}
                ],
                price: {
                    text: "$100 por persona"
                },
                next: "formalPrincipal",
            }
        }
    },
    formalPrincipal: {
        type: "section",
        data: {
            section: {
                title: "Plato principal",
                options: [
                    {key: "formal-principal-1", className: "col-md-6 cya-formal-entry-1", next: "formalPrincipal1", text: "Opción #1"},
                    {key: "formal-principal-2", className: "col-md-6 cya-formal-entry-2", next: "formalPrincipal2", text: "Opción #2"},
                ]
            }
        }
    },
    formalPrincipal1: {
        type: "detail",
        data: {
            detail: {
                className: "cya-formal-principal-1",
                title: "Plato principal #1",
                description: "Elegir 1 opción:",
                multi: true,
                max: 1,
                items: [
                    {key:1, text: "Agnolotis de jamón, ricota y nueces o verdura."},
                    {key:2, text: "Canelones de jamón, ricota y nueces o verdura."},
                    {key:3, text: "Ravioles de jamon y ricota o verdura."},
                    {key:4, text: "Salsas de verdeo."},
                    {key:5, text: "Verdeo."},
                    {key:6, text: "Champignon."},
                    {key:7, text: "Bolognesa."},
                    {key:8, text: "Parisienne."},
                ],
                price: {
                    text: "$210 por persona"
                },
                next: "formalDessert",
            }
        }
    },
    formalPrincipal2: {
        type: "detail",
        data: {
            detail: {
                className: "cya-formal-principal-2",
                title: "Plato principal #2",
                description: "Elegir 1 opción:",
                multi: true,
                max: 1,
                items: [
                    {key:1, text: "Agnolotis de jamón, ricota y nueces o verdura."},
                    {key:2, text: "Canelones de jamón, ricota y nueces o verdura."},
                    {key:3, text: "Ravioles de jamon y ricota o verdura."},
                    {key:4, text: "Salsas de verdeo."},
                    {key:5, text: "Verdeo."},
                    {key:6, text: "Champignon."},
                    {key:7, text: "Bolognesa."},
                    {key:8, text: "Parisienne."},
                ],
                note: "Podés combinar la carne, la guarnición y salsas como más te guste o dejar los platos como los presentamos nosotros.",
                price: {
                    text: "$210 por persona"
                },
                next: "formalDessert",
            }
        }
    },
    formalDessert: {
        type: "section",
        data: {
            section: {
                title: "Postre",
                options: [
                    {key: "formal-dessert-1", className: "col-md-6 cya-formal-dessert-1", next: "formalDessert1", text: "¡Gratis!"},
                    {key: "formal-dessert-2", className: "col-md-6 cya-done", next: "formalAditional", text: "Sin postre"},
                ]
            }
        }

    },
    formalDessert1: {},
    formalAditional: {},
    total: {},
    contact: {}
}


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            key: "home"
        }
        this.onClick = this.onClick.bind(this)
    }

    onClick(next) {
        this.setState({
            key: next 
        })
    }

    render() {
        console.log("Rendering page: " + this.state.key);
        let page = pages[this.state.key];
        page.data.onClick = this.onClick;
        if (page.data.nav == null) {
            page.data.nav = defaultNav;
        }
        if (page.type == "section") { 
            return <SectionPage data={page.data} />
        }
        if (page.type == "detail") { 
            return <DetailPage data={page.data} />
        }
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
