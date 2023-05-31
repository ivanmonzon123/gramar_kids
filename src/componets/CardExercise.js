import React from "react";
import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import "../styles/CardExercise.css";
import ModalExercise from "./ModalExercise";

export default function CardExercise({ Nombre, foto }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Card className="Cont-Card">
      {/* <Card.Title>{}</Card.Title> */}
      <div
        style={{
          height: "14rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card.Img
          variant="top"
          src={foto}
          alt="Foto exercise"
          style={{ maxHeight: "100%", width: "14rem" }}
        />
      </div>
      <Card.Body>
        <Card.Title>{Nombre}</Card.Title>
        <Card.Text>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="tu respuesta"
              name="respuesta"
            />

            {/* <ModalExercise 
            active={false} 
            close={false} /> */}
          </Form>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
