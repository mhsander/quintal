import React, { Component } from "react";
import { Card } from "react-mdl";

class Bebidas extends Component {
  render() {
    return (
      <div>
        <Card
          shadow={0}
          style={{
            width: "256px",
            height: "256px",

            background:
              "url(http://www.fitup.com.br/Administrativo/Site/CHAGASTEMP2/da25801f-d5ba-412b-a674-0392f5e85b4b.jpg) center / cover"
          }}
        />
        <Card
          shadow={0}
          style={{
            width: "256px",
            height: "256px",

            background:
              "url(https://www.partiucoco.com/c7da8961-pack_0f00dk0ep0dk005000.jpg) center / cover"
          }}
        />
        <Card
          shadow={0}
          style={{
            width: "256px",
            height: "256px",

            background:
              "url(https://http2.mlstatic.com/leite-de-coco-em-po-original-150g-D_NQ_NP_973808-MLB26883997757_022018-F.jpg) center / cover"
          }}
        />
        <Card
          shadow={0}
          style={{
            width: "256px",
            height: "256px",

            background:
              "url(https://static1.squarespace.com/static/574cdfff2fe1312abdee230e/574db22e37013bf11bdd0462/59964130893fc06d209d7079/1534894696501/S28_01Abr_2017_IG+%281%29.jpg) center / cover"
          }}
        />
      </div>
    );
  }
}

export default Bebidas;
