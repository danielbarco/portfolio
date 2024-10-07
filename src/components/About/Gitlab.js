import React from "react";
import GitlabCalendar from "react-gitlab-calendar";
import { Row } from "react-bootstrap";

function Gitlab() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitlabCalendar
        username="danielbarco"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Gitlab;
