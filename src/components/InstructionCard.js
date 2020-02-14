import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Col } from "reactstrap";

const InstructionCard = ({ imageSource, titleText, bodyText }) => (
  <Col style={{ width: "250px", marginBottom: "5px" }}>
    <Card
      style={{
        borderRadius: "30px",
        alignItems: "center",
        background: "rgba(1,1,1,0.6)",
        borderColor: "transparent"
      }}
    >
      <CardImg
        width="100%"
        src={imageSource}
        style={{ width: "130px", marginTop: "10px" }}
      />
      <CardBody>
        <CardTitle>
          <h3>{titleText}</h3>
        </CardTitle>
        <CardText>{bodyText}</CardText>
      </CardBody>
    </Card>
  </Col>
);

export default InstructionCard;
