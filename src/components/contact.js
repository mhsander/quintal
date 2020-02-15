import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ width: "100%", margin: "auto", paddingTop: "2em" }}
      >
        <Grid className="landing-grid">
          <Cell col={12}>
            <h2 style={{ color: "#2BB454" }}>Esperamos a sua visita!</h2>
            <br />
            <div className="banner-text">
              <br />
              <div className="contact-number-icons">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <a
                  style={{ color: "#ffffff", fontSize: 25 }}
                  href="https://www.google.com/maps?ll=-29.779309,-51.14835&z=16&t=m&hl=en-US&gl=US&mapclient=embed&daddr=R.+Medianeira,+83+-+Cristo+Rei+S%C3%A3o+Leopoldo+-+RS+93020-410+Brazil@-29.7793093,-51.1483503"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  Rua Medianeira 83, São Leopoldo, RS
                </a>
                <br />
                <br /> <br />
                <i class="fa fa-mobile" aria-hidden="true"></i>
                <a
                  style={{ color: "#ffffff", fontSize: 25 }}
                  href="https://api.whatsapp.com/send?phone=555189242085&text=&source=&data="
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  (51) 99641-7600 - Ligação e WhatsApp
                </a>
                <br />
                <br />
                <i class="fa fa-phone" aria-hidden="true"></i>
                <p style={{ display: "inline" }}>
                  (51) 3099-4021 - Telefone fixo
                </p>
                <br />
                <br />
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                <p style={{ display: "inline" }}>quintalurbanosl@gmail.com</p>
                <br />
                <br />
              </div>
            </div>
            <h2 style={{ color: "#2BB454" }}>Horário de funcionamento:</h2>
            <br />
            <div className="banner-text">
              <p> Segunda à Sexta: 09:30 às 19:30</p>
              <p> Sábado: 9:30 às 16:30</p>
              <p> Domingo: fechado - dia de descanso</p>
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
                  <i className="fa fa-whatsapp" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
          <Cell col={12}>
            <div className="map">
              <iframe
                title="Mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.93966565675!2d-51.15051278489104!3d-29.779386081979517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951968f7f4c70a7f%3A0x70d537c8928c14d0!2sR.+Medianeira%2C+83+-+Cristo+Rei%2C+S%C3%A3o+Leopoldo+-+RS%2C+Brasil!5e0!3m2!1spt-BR!2sus!4v1516669498376"
                width="600"
                height="415"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
