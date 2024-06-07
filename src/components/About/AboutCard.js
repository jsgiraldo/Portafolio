import React from "react";
import Card from "react-bootstrap/Card";
import { FaBicycle, FaRegLightbulb, FaTools } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy <span className="purple">Jordan Giraldo </span>
            de <span className="purple"> Popayán, Colombia 🇨🇴</span>
            <br />
            Actualmente, trabajo como Software Developer en Inndico.
            <br />
            Me encuentro en culminación de la carrera en Ingeniería en Automatica Industrial
            en Universidad del Cauca
            <br />
            <br />
            Además de codificar, hay otras actividades que me encanta hacer:
          </p>
          <ul>
            <li className="about-activity">
              <FaRegLightbulb /> Participar en eventos, foros de técnología
            </li>
            <li className="about-activity">
              <FaTools /> Desarrollos Eléctronicos IoT y Domóticos
            </li>
            <li className="about-activity">
              <FaBicycle /> CicloMontañismo - Downhill
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            {" "}
          </p>
          <footer className="blockquote-footer"> </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
