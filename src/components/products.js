import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText } from "react-mdl";

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
            {/* Bah Kombucha */}
            <Card shadow={2}>
              <CardTitle
                expand
                style={{
                  color: "#fff",
                  height: "176px",
                  div: "100px",
                  background:
                    "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
                }}
              >
                Kombucha
              </CardTitle>
              <CardText>
                Bá Kombucha! Deliciosa bebida milenar, naturalmente gaseificada,
                frisante e com sabor de frutas.
              </CardText>
            </Card>
            {/*Agua de coco */}
            <Card shadow={2}>
              <CardTitle
                expand
                style={{
                  color: "#fff",
                  height: "176px",
                  div: "100px",
                  backgroud:
                    "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
                }}
              >
                Agua de coco
              </CardTitle>
              <CardText>Sem conservantes</CardText>
            </Card>
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
          ripple
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
