import React from "react";
import { Col, Row } from "react-bootstrap";

export const DateCount = ({ myData }) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="py-1 pt-3">
        لديك اليوم {myData.length} مواعيد
      </Col>
    </Row>
  );
};
