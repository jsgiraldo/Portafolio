import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Días de <strong className="purple">Código</strong>
      </h1>
      <GitHubCalendar
        username="jsgiraldo"
        blockSize={15}
        blockMargin={5}
        color="#6F00FF"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
