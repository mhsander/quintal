import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import Modal from "./components/Modal";
import { Link } from "react-router-dom";

class App extends Component {
  state = {
    modalVisible: true
  };

  handleClick = () => {
    this.setState({
      modalVisible: false
    });
  };

  setTimeout = () => {
    this.setState({ modalVisible: false }, 2000);
  };

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
              <Link to="/">Página Inicial</Link>
              <Link to="/sobre">Quem Somos</Link>
              <Link to="/contato">Contato</Link>
              <Link to="/produtos">Produtos</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
        {this.state.modalVisible && (
          <Modal>
            <div className="Modal" onClick={this.handleClick}>
              <h2>Pode entrar! Te esperamos no nosso Quintal!</h2>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
