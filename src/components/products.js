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
        return <div>Congelados</div>;
      case 4:
        return <div>Cosméticos</div>;
      default:
        return <div>Bebidas</div>;
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
          <Tab scroll>Bebidas</Tab>
          <Tab scroll>Salgados</Tab>
          <Tab scroll>Doces</Tab>
          <Tab scroll>Congelados</Tab>
          <Tab scroll>Cosméticos</Tab>
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
