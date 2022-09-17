import React from "react";
import { Col, Row, Button } from "react-bootstrap";

export const DatesAction = ({ deleteData, viewData }) => {
  return (
    <div>
      <Row className="justify-content-center">
        <Col sm="8" className="footerRemind d-flex justify-content-between mt-3">
          <Button onClick={deleteData}>مسح الكل</Button>
          <Button onClick={viewData}>عرض البيانات</Button>
        </Col>
      </Row>
    </div>
  );
};
