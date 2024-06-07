import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import web from "../../Assets/Projects/web.png";
import erp from "../../Assets/Projects/erp.png";
import Hackaton from "../../Assets/Projects/Hackaton.png";
import vivienda from "../../Assets/Projects/vivienda.png";
import api from "../../Assets/Projects/odooapi.png";
import energy from "../../Assets/Projects/energía.png";
import iot from "../../Assets/Projects/iot.png";
import lma from "../../Assets/Projects/lma.png";
import acueducto from "../../Assets/Projects/acueducto.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Trabajos </strong> recientes
        </h1>
        <p style={{ color: "white" }}>
          Algunos de los proyectos en los que he trabajado recientemente por cada area específica.
        </p>
        <h2 style = {{textAlign:"left"}}> 
         <p style = {{color:"white"}}> Datos e Inteligencia Artificial </p> 
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vivienda}
              isBlog={false}
              title="Predicción de precio de viviendas"
              description="Utilizando técnicas avanzadas de regresión, logré predecir con éxito los precios finales de venta de casas en el conjunto de datos proporcionado por el concurso de Kaggle House Prices - Advanced Regression Techniques. El proceso incluyó la preprocesamiento de datos, ingeniería de características y selección de modelos. Apliqué métodos como regresión lineal múltiple, regularización, y modelos de ensamble para mejorar la precisión de las predicciones"
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={energy}
              isBlog={false}
              title="Comportamiento energético de los prosumidores"
              description="Reducir significativamente los costes de desequilibrio para mejorar la fiabilidad de la red y hacer eficiente y sostenible la integración de los prosumidores en el sistema energético."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hackaton}
              isBlog={false}
              title="Hackaton Talento Tech"
              description="Se realizo el Reto de EduTech solucionando Análisis Predictivo del Comportamiento Estudiantil en Plataformas de E-learning utilizando Inteligencia Artificial"
              ghLink=""
              demoLink=""              
            />
          </Col>
        <h2 style = {{textAlign:"left"}}> 
        <p style = {{color:"white"}}> Desarrollo Software y Web </p> 
        </h2>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web}
              isBlog={false}
              title="Web Page"
              description="Pagina Web empresarial para visibilidad de los servicios de la empresa de refrigeracion utilizando HTML, CSS, Javascript y Framework Bootstrap "
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={api}
              isBlog={false}
              title="ERP Odoo Integration with Mobile App"
              description=""
              ghLink=""
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={erp}
              isBlog={false}
              title="ERP Module Development"
              description="Desarrolo de módulo de nómina de acuerdo a la normatividad colombiana
              basado en odoo utilizando Python, XML, postgreSQL."
              ghLink=""
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
                  <h2 style = {{textAlign:"left"}}> 
        <p style = {{color:"white"}}> Gestión de proyectos </p> 
        </h2>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={acueducto}
              isBlog={false}
              title="Construcción de Acueducto Rural"
              description="Coordinación de proyecto de acueducto rural
              desde la Fase de diseño, planificación y ejecución  "
              //ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lma}
              isBlog={false}
              title="Cálculo de LMA para EPS"
              description="Se realizó el cálculo de la Liquidación Mensual de Afiliados para la proyección de ingresos por afiliado"
             // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iot}
              isBlog={false}
              title="Sistema de Alerta Temprana con Sistema IoT LoraWan"
              description="Instalación de sistema de alerta temprana con tecnología LoraWan 
              con respaldo de energía solarFV, para el monitoreo de rio en la costa pacifica caucana"
              ghLink=""
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}

export default Projects;
