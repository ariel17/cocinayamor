const defaultNav = {
    href: "/",
    text: "C&A",
    items: [
        {key: "inicio", href: "index.html", text: "Inicio", active: false},
        {key: "budget", href: "budgets.html", text: "Presupuestos en PDF", active: false},
        {key: "faq", href: "faq.html", text: "FAQ", active: false},
        {key: "contact", href: "contact.html", text: "Contacto", active: false}
    ]
}

const pages = {
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
                    {key: "formal-dessert-1", className: "col-md-6 cya-formal-dessert", next: "formalDessert1", text: "¡Gratis!"},
                    {key: "formal-dessert-2", className: "col-md-6 cya-done", next: "formalAditional", text: "Sin postre"},
                ]
            }
        }
    },
    formalDessert1: {
        type: "detail",
        data: {
            detail: {
                className: "cya-formal-dessert",
                title: "Postres",
                description: "Elegir 1 opción:",
                multi: true,
                max: 1,
                items: [
                    {key:1, text: "Brownie con bocha de helado."},
                    {key:2, text: "Budín de pan con dulce de leche."},
                    {key:3, text: "Capelina con dos gustos de helado."},
                    {key:4, text: "Bombón suizo."},
                    {key:5, text: "Tricolor o almendrado."},
                    {key:6, text: "Ensalada con frutas de estación."},
                ],
                note: "Todos los helados incluyen salsa de chocolate y frutos rojos.",
                price: {
                    text: "¡Gratis!"
                },
                next: "formalAditional",
            }
        }
    },
    formalAditional: {
        type: "section",
        data: {
            section: {
                title: "Adicionales",
                options: [
                    {key: 1, className: "col-md-3 cya-sweet-table", next: "formalSweetTable", text: "Mesa dulce"},
                    {key: 2, className: "col-md-3 cya-aditional-salty", next: "formalSalty", text: "Salado"},
                    {key: 3, className: "col-md-3 cya-aditional-drinks", next: "formalDrinks", text: "Bebidas"},
                    {key: 4, className: "col-md-3 cya-aditional-coffee", next: "formalCoffee", text: "Cafetería"},
                    {key: 4, className: "col-md-12 cya-done", next: "total", text: "¡Listo!"},
                ]
            }
        }
    },
    formalSweetTable: {
        type: "detail",
        data: {
            detail: {
                className: "cya-sweet-table",
                title: "Mesa dulce",
                description: "1 tarta cada 10 personas:",
                items: [
                    {key: 1, text: "Lemon pie."},
                    {key: 2, text: "Chocotorta."},
                    {key: 3, text: "Tarta frutal."},
                    {key: 4, text: "Coco y dulce de leche."},
                    {key: 5, text: "Pasta frola."},
                    {key: 6, text: "Appel crumble."},
                    {key: 7, text: "Invertida de manzana."},
                    {key: 8, text: "Cheese cake."},
                    {key: 9, text: "Ricota."},
                    {key: 10, text: "Milhojas."},
                    {key: 11, text: "Brownie."},
                ],
                price: {
                    text: "$50 por persona"
                },
                next: "formalAditional",
            }
        }
    },
    formalSalty: {
        type: "section",
        data: {
            section: {
                title: "Adicionales salados",
                options: [
                    {key: 1, className: "col-md-4 cya-seafood", next: "formalSeafood", text: "Cazuelas"},
                    {key: 2, className: "col-md-4 cya-pernil", next: "formalPernil", text: "Pernil"},
                    {key: 3, className: "col-md-4 cya-kids", next: "formalKids", text: "Menú para niños"},
                ]
            }
        }
    },
    formalSeafood: {
        type: "detail",
        data: {
            detail: {
                className: "cya-seafood",
                title: "Cazuelas",
                description: "Elegir 1 opción:",
                multi: true,
                max: 1,
                items: [
                    {key:1, text: "Pollo y vegetales."},
                    {key:2, text: "Carne y vegetales."},
                    {key:3, text: "Ravioles con salsa de verdeo, champignon o fileto."},
                ],
                price: {
                    text: "$100 por persona"
                },
                next: "formalAditional",
            }
        }
    },
    formalPernil: {
        type: "detail",
        data: {
            detail: {
                className: "cya-pernil",
                title: "Pernil de cerdo",
                description: "El servicio comprende:",
                items: [
                    {key: 1, text: "Pernil de cerdo."},
                    {key: 2, text: "Figazas de manteca."},
                    {key: 3, text: "Salsas: ciboulette, albahaca, queso azul, criolla, provenzal, mayonesa y Savora."},
                ],
                price: {
                    text: "$90 por persona"
                },
                next: "formalAditional",
            }
        }
    },
    formalKids: {
        type: "detail",
        data: {
            detail: {
                className: "cya-kids",
                title: "Menú para niños",
                description: "Para edades entre 5 y 12 años. Elegir 1 opción:",
                multi: true,
                max: 1,
                items: [
                    {key:1, text: "Milanesa de peceto o pollo con papas fritas/noisse."},
                    {key:2, text: "Milanesa de peceto o pollo napolitana con papas fritas/noisse."},
                    {key:3, text: "Hamburguesas con queso chedar y papas fritas."},
                    {key:4, text: "Nugets con papas fritas."},
                ],
                price: {
                    text: "$120 por niño"
                },
                next: "formalAditional",
            }
        }
    },
    formalDrinks: {
        type: "detail",
        data: {
            detail: {
                className: "cya-aditional-drinks",
                title: "Bebidas",
                description: "El servicio comprende:",
                items: [
                    {key: 1, text: "Línea Coca-Cola."},
                    {key: 2, text: "Agua."},
                    {key: 3, text: "Cerveza."},
                    {key: 4, text: "Aperitivos (Gancia y Fernet)."},
                ],
                price: {
                    text: "$50 por persona"
                },
                next: "formalAditional",
            }
        }
    },
    formalCoffee: {
        type: "detail",
        data: {
            detail: {
                className: "cya-aditional-coffee",
                title: "Cafetería",
                description: "El servicio comprende:",
                items: [
                    {key:1, text: "Vajilla (vasos térmicos y cucharitas descartables)."},
                    {key:2, text: "Termos de agua caliente."},
                    {key:3, text: "Termos de café."},
                    {key:4, text: "Caja de madera con distintos gustos de té."},
                    {key:5, text: "Azucar y edulcorante."},
                    {key:6, text: "Leche tibia para cortar."},
                ],
                price: {
                    text: "$50 por persona"
                },
                next: "formalAditional",
            }
        }
    },
    total: {
        type: "total",
        data: {
            total: {
                className: "cya-common",
                title: "Tu presupuesto",
                description: "Servicios elegidos:",
                options: [
                    {key: 1, text: 20, selected: true},
                    {key: 1, text: 30},
                    {key: 1, text: 40},
                    {key: 1, text: 50},
                    {key: 1, text: 60},
                    {key: 1, text: 70},
                    {key: 1, text: 80},
                    {key: 1, text: 90},
                    {key: 1, text: 100},
                    {key: 1, text: 120},
                    {key: 1, text: 140},
                    {key: 1, text: 160},
                    {key: 1, text: 180},
                    {key: 1, text: "200 ó más"},
                ],
                note: "Los precios son válidos durante 30 días.",
                next: "contact",
            }
        }
    },
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
        switch(page.type) {
            case "section":
                return <SectionPage data={page.data} />;
            case "detail":
                return <DetailPage data={page.data} />;
            case "total":
                return <TotalPage data={page.data} />;
        }
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
