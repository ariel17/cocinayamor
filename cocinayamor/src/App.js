import React, { Component } from 'react';
import Nav from './containers/Nav';
import Section from './containers/Section';

const pagesData = {
    home: {
        type: "section",
        navEnabled: "home",
        data: {
            options: [
                {next: {key: "formal"}, className: "col-md-3 cya-formal", text: "Formal"},
                {next: {key: "informal"}, className: "col-md-3 cya-informal", text: "Informal"},
                {next: {key: "lunch"}, className: "col-md-3 cya-lunch", text: "Lunch"},
                {next: {key: "campestre"}, className: "col-md-3 cya-country", text: "Campestre"}
            ]
        }
    }
}



class App extends Component {
  render() {
    let body;
    if (pagesData.home.type === "section") {
        body = <Section data={pagesData.home.data} />;
    }

    return (
      <div className="container-fluid bg-color-primary-0">
        <Nav enabled={pagesData.home.navEnabled} />
        {body}
      </div>
    );
  }
}

export default App;
