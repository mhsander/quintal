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
        return <div>Salgados</div>;
      case 2:
        return <div>Doces</div>;
      case 3:
        return <div>Farinhas e sementes</div>;
      case 4:
        return <div>Congelados</div>;
      case 5:
        return <div>Cosméticos</div>;
      default:
        return <div>Bebidas</div>;
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
        >
          <Tab>Bebidas</Tab>
          <Tab>Salgados</Tab>
          <Tab>Doces</Tab>
          <Tab>Farinhas e sementes</Tab>
          <Tab>Congelados</Tab>
          <Tab>Cosméticos</Tab>
        </Tabs>

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
