import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
import Bebidas from "./bebidas";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    switch (this.state.activeTab) {
      case 0:
        return (
          <div>
            <Bebidas />
          </div>
        );
      case 1:
        return <div>Comidas</div>;
      case 2:
        return <div>Cosméticos</div>;
      default:
        return (
          <div>
            <Bebidas />
          </div>
        );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <br /> <br />
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
        >
          <Tab>Bebidas</Tab>
          <Tab>Comidas</Tab>
          <Tab>Cosméticos</Tab>
        </Tabs>
        <br />
        <h4>
          Esses são apenas alguns dos produtos que oferecemos. Veja mais
          produtos e seus detalhes, no nosso Quintal. Te esperamos lá!{" "}
        </h4>
        <section className="products-grid">
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Products;
