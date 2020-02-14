import React from "react";
import { Row, Col, Button } from "reactstrap";

const ShortcutButton = ({ linkTo, buttonText }) => (
  <Row>
    <Col>
      <div>
        <Button color="dark">
          <h2>
            <a href={linkTo} style={{ textDecoration: "none", color: "white" }}>
              {buttonText}
            </a>
          </h2>
        </Button>
      </div>
    </Col>
  </Row>
);

export default ShortcutButton;
