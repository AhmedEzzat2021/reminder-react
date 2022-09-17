import React from "react";
import { Col, Row } from "react-bootstrap";
export const ListReminder = ({ myData }) => {
  return (
    <div>
      <Row className="justify-content-center">
        <Col sm="8" className="listRemind">
          {myData.length ? (
            myData.map((item, index) => {
              return (
                <div className="contentList d-flex justify-content-start my-2 py-2 align-items-center" key={item.id}>
                  <div className="image-person">
                    <img src={item.img} alt="person" />
                  </div>
                  <div className="textCont mx-2">
                    <h5 className="mb-0">{item.theName}</h5>
                    <p className="mb-0">{item.date}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h3 className="p-5 text-center">لا توجد مواعيد</h3>
          )}
        </Col>
      </Row>
    </div>
  );
};
