import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="about-grid" />

        <div className="about-text">
          <h2>Quem é o Quintal Urbano?</h2>
          <hr />
          <p>
            O Quintal Urbano surgiu através das vivências e desejos de dois
            biólogos, apaixonados pela vida, e amantes da natureza, que
            resolveram estender suas salas de aulas para além do currículo
            tradicional.
            <br />
            <br />
            Nossas viagens, nossos estudos, e dia a dia, foram traçando nossos
            caminhos, até a ideia de manter a biologia de maneira permanente em
            nossas vidas. Para isso, começamos a visitar feiras agroecológicas,
            conhecer as histórias de vida de agricultores familiares, o que nos
            fez entender a importância deles, para que o alimento chegue a nossa
            mesa e, principalmente a importância ambiental que desempenham na
            cadeia produtiva.
            <br />
            <br />
            Hoje, acreditamos em ações educativas, orientadas para conservação
            ambiental, através do comércio de produtos naturais, orgânicos e
            veganos. Pois o uso de produtos que são naturais, sem incremento de
            insumos artificiais e ou, pesticidas mantém o ambiente saudável e em
            equilíbrio, assim como, a saúde do agricultor e de quem os consome.
            <br />
            <br />
            Deste modo, o Quintal Urbano passa a ser um novo espaço para
            integrar pessoas, que tem o mesmo objetivo que o nosso, de conservar
            o ambiente, manter a saúde, e compartilhar estas relações e
            informações com outras pessoas. Portanto, não focamos somente em
            vendas, e sim, criamos mais um espaço de compartilhamento de
            vivencias, de trocas de saberes, onde você possa se sentir bem, e
            que esse compartilhar do dia a dia, contribua para melhoraria da
            nossa Terra Mãe.
          </p>
          <h2>Visão</h2>
          <hr />
          <br />
          <p />
          <ul>
            <li>
              Temos como base 4 pilares de sustentabilidade, com produtos e
              práticas:
            </li>{" "}
            <br />
            <li>Ecologicamente corretos</li>
            <li> Economicamente viáveis</li>
            <li> Socialmente justos</li>
            <li> Culturalmente diversos</li>
            <br />
          </ul>
          <br />
          <h2>Missão</h2>
          <hr />
          <p style={{ textAlign: "center" }}>
            A nossa missão é fornecer produtos de alta qualidade e com preço
            justo, que respeitem a vida durante sua produção, para pessoas
            antenadas com a sua saúde e com práticas sustentáveis.
          </p>
          <br />
        </div>
      </div>
    );
  }
}

export default About;
