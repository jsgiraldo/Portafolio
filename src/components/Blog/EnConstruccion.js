import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import construction from "../../Assets/construction.png";
import Particle from "../Particle";

function EnConstruccion() {
  return (
    <section>
      <Container fluid className="en-construccion-section">
        <Particle />
        <Container className="en-construccion-content">
          <Row className="justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <Col md={12} className="en-construccion-header text-center">
              <h1 className="heading" style={{ fontSize: "3em", marginBottom: "20px", color: "#007bff" }}>
                Página en Construcción
              </h1>
              <p className="subheading" style={{ fontSize: "1.5em", color: "#6c757d" }}>
                Estamos trabajando en esta página. Vuelve pronto.
              </p>
              <img
                src={construction}
                alt="En construcción"
                className="img-fluid"
                style={{ maxWidth: "400px", maxHeight: "400px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default EnConstruccion;

