import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/CV_Jordan_GIraldo_Portafolio.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [password, setPassword] = useState("");
  const [showDownload, setShowDownload] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleDownloadClick() {
    const correctPassword = "Tech#2024"; // Reemplaza esto con la contraseña deseada
    if (password === correctPassword) {
      setShowDownload(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Contraseña incorrecta. Solicítala al número 3244346434.");
    }
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          {!showDownload ? (
            <div>
              <input
                type="password"
                placeholder="Ingresa la contraseña"
                value={password}
                onChange={handlePasswordChange}
              />
              <Button onClick={handleDownloadClick} style={{ maxWidth: "250px" }}>
                <AiOutlineDownload />
                &nbsp;Descargar HV
              </Button>
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </div>
          ) : (
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Descargar HV
          </Button>
          )}
        </Row>

        <Row className="resume" style={{ overflowY: "auto", maxHeight: "80vh" }}>
          <Document file={pdf} className="d-flex flex-column align-items-center" onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(Math.min(numPages, 2)), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                scale={width > 786 ? 1.7 : 0.6}
                renderMode="canvas"
                style={{
                  height: "auto",
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
            ))}
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;

