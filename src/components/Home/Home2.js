import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMITAME <span className="purple"> PRESENTARME </span>
            </h1>
            <p className="home-about-body">
              Soy un apasionado por la programación, las técnologías emergentes y la sostenibilidad
              cada día aprendo algo nuevo 👨‍💻
              <br />
              <br />Soy fluido en lenguajes como
              <i>
                <b className="purple"> Python y Javascript. </b>
              </i>
              <br />
              <br />
              Mis campos de interés son el mundo de los&nbsp;
              <i>
                <b className="purple">Datos, la Inteligencia Artificial y el software </b> y
                las areás relacionadas a la{" "}
                <b className="purple">
                  Ciencia de Datos, NLP, Machine Learning, Deep Learning, Internet de las cosas (IoT).
                </b>
              </i>
              <br />
              <br />
              Siempre que tengo la oportunidad, aplico mi pasión en el desarrollo
              de productos en el Campo de los Datos y la Inteligencia Artificial utilizando <b className="purple">Python</b> y
              <i>
                <b className="purple">
                  {" "}
                  Bibliotecas - FrameWorks
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> Numpy, Pandas, Matplotlib,Seaborn,Tensorflow, PyTorch, y Scikit-learn</b>
              </i> 
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Encuéntrame en </h1>
            <p>
              ¡Hagamos equipo! <span className="purple">contáctame </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/jsgiraldo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jordangiraldo/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
