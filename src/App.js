import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  hideToggle() {
    var selectorId = document.querySelector(".mdl-layout");
    selectorId.MaterialLayout.toggleDrawer();
  }

  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Quintal Urbano" scroll>
            <Navigation>
              <Link to="/">Página Inicial</Link>
              <Link to="/sobre">Quem Somos</Link>
              <Link to="/contato">Contato</Link>
              <Link to="/produtos">Produtos</Link>
            </Navigation>
          </Header>
          <Drawer title="Quintal Urbano">
            <Navigation>
              <Link to="/" onClick={() => this.hideToggle()}>
                Página Inicial
              </Link>
              <Link to="/sobre" onClick={() => this.hideToggle()}>
                >Quem Somos
              </Link>
              <Link to="/contato" onClick={() => this.hideToggle()}>
                >Contato
              </Link>
              <Link to="/produtos" onClick={() => this.hideToggle()}>
                >Produtos
              </Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
