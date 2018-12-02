import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import {
  GoogleApiWrapper,
  Map,
  InfoWindow,
  Marker,
  MapContainer
} from "google-maps-react";

class Contact extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner-text">
              <h2>Venha conhecer o nosso Quintal!</h2>

              <hr />
              <p> Rua Medianeira 83, São Leopoldo, RS</p>
              <p> 51 98924-2085 - ligação e WhatsApp</p>
              <p>quintalurbanosl@gmail.com</p>
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
          <Cell>
            <div className="map">
              <Map
                google={this.props.google}
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
              </Map>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD0TgD9PApBv2xhejfMcCvxayoH_d4kTuM"
})(Contact, MapContainer);
