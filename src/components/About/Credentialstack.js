import React from "react";
import { Col, Row } from "react-bootstrap";
import agileImage from "../../Assets/agile.png";
import proyectosImage from "../../Assets/proyectos.png";
import inteligenciaImage from "../../Assets/inteligencia.webp";
import webpythonImage from "../../Assets/webpython.png";
import emergingTechImage from "../../Assets/Explore_Emerging_Tech.png";

function Credentialstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.credly.com/badges/31078456-4eb5-47b8-8c44-3554709a3bc0/public_url" target="_blank" rel="noopener noreferrer">
          <img src={agileImage} alt="agile" style={{ width: "100%" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.credly.com/badges/adcf0527-7859-4159-884a-367879ac8031/public_url" target="_blank" rel="noopener noreferrer">
          <img src={proyectosImage} alt="Gestión de proyectos" style={{ width: "100%" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.acreditta.com/credential/fbdefe32-a3ee-4959-8c17-836688986900?utm_source=copy&resource_type=badge&resource=fbdefe32-a3ee-4959-8c17-836688986900" target="_blank" rel="noopener noreferrer">
          <img src={inteligenciaImage} alt="Inteligencia Artificial" style={{ width: "100%" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.credly.com/badges/03cccf8c-f512-4cd7-98d6-218859bcc779/public_url" target="_blank" rel="noopener noreferrer">
          <img src={webpythonImage} alt="Web con python" style={{ width: "100%" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.credly.com/badges/b51fd520-efb9-4c89-8c69-99d30356ba2b/public_url" target="_blank" rel="noopener noreferrer">
          <img src={emergingTechImage} alt="Tecnología emergentes" style={{ width: "100%" }} />
        </a>
      </Col>
    </Row>
  );
}

export default Credentialstack;
