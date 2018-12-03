import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { GoogleApiWrapper, Map, InfoWindow, Marker } from "google-maps-react";
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker
// } from "react-google-maps";

class Contact extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto", paddingTop: "2em" }}>
        <Grid className="landing-grid">
          <Cell col={6}>
            <h2 style={{ color: "#2BB454" }}>Esperamos a sua visita!</h2>
            <div className="banner-text">
              <hr />
              <p> Rua Medianeira 83, São Leopoldo, RS</p>
              <p> 51 98924-2085 - ligação e WhatsApp</p>
              <p>quintalurbanosl@gmail.com</p>
            </div>
            <h2 style={{ color: "#2BB454" }}>Horário de funcionamento:</h2>
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
                  <i class="fa fa-whatsapp" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
          <Cell col={6}>
            <div className="map">
              {/* <Map
                google={this.props.google}
                styles={{
                  height: "100%",
                  margin: "0",
                  padding: "0"
                }}
                initialCenter={{
                  lat: -29.779104,
                  lng: -51.148403
                }}
                zoom={16}
              >
                <Marker
                  onClick={this.onMarkerClick}
                  title={"Quintal Urbano"}
                  name={"Quintal Urbano"}
                />

                <InfoWindow onClose={this.onInfoWindowClose} />
              </Map> */}
              <iframe
                title="Mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.93966565675!2d-51.15051278489104!3d-29.779386081979517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951968f7f4c70a7f%3A0x70d537c8928c14d0!2sR.+Medianeira%2C+83+-+Cristo+Rei%2C+S%C3%A3o+Leopoldo+-+RS%2C+Brasil!5e0!3m2!1spt-BR!2sus!4v1516669498376"
                width="100%"
                height="100%"
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

export default GoogleApiWrapper({
  apiKey: "AIzaSyD0TgD9PApBv2xhejfMcCvxayoH_d4kTuM"
})(Contact);
