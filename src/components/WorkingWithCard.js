import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Col } from "reactstrap";

const WorkingWithCard = ({ imageSource, vendorName, instagramLink }) => (
  <Col>
    <Card
      style={{
        borderRadius: "30px",
        alignItems: "center",
        background: "transparent",
        borderColor: "transparent"
      }}
    >
      <a href={instagramLink} target="_blank">
        <CardImg
          width="100%"
          src={imageSource}
          style={{
            height: "130px",
            width: "auto",
            marginTop: "10px"
          }}
        />
      </a>
      <CardBody>
        <CardTitle>{vendorName}</CardTitle>
      </CardBody>
    </Card>
  </Col>
);

export default WorkingWithCard;
