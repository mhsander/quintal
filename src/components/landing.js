import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="./assets/logo.png"
              alt="Quintal Urbano logo"
              className="logo-img"
            />
            <div className="banner-text">
              <h1>Seja muito bem-vindo!</h1>

              <hr />
              {/* <p>Produtos naturais, orgânicos e veganos</p> */}
              <p>Almoço quentinho</p>
              <p>Tele-entrega</p>
              <div className="social-links">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/quintalurbanosl"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/quintalurbanosl"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
                {/* Pinterest */}
                <a
                  href="https://www.pinterest.com/quintalurbanosl"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-pinterest-square" aria-hidden="true" />
                </a>
                <a
                  href="https://wa.me/555189242085"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fa fa-whatsapp" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
