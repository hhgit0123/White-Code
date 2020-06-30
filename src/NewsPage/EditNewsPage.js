import React from "react";
import { Form, Button, Modal, FormFile } from "react-bootstrap";
export default function EditNewsPage(props) {
  return (
    <Form onSubmit={props.handleSubmit} noValidate>
      <a href={"#/news/"}>
        <Button variant="danger">Назад</Button>
      </a>
      <Modal.Body>
        <Form.Group>
          <Form.Label>Заголовок</Form.Label>
          <Form.Control
            name="title"
            value={props.title}
            onChange={props.handleChange}
            isInvalid={props.validationErrors.title}
            type="text"
            placeholder="title"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Описание</Form.Label>
          <Form.Control
            name="description"
            value={props.description}
            onChange={props.handleChange}
            isInvalid={props.validationErrors.description}
            type="text"
            placeholder="description"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Картинка</Form.Label>
          <FormFile custom>
            <FormFile.Input
              name="image"
              isInvalid={props.validationErrors.image}
              onChange={props.handleChange}
            />
            <FormFile.Label>Добавить картинку</FormFile.Label>
            <img alt="Preview" width="50" height="50" src={props.image} />
          </FormFile>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button letiant="primary" type="submit">
          Cохранить
        </Button>
      </Modal.Footer>
    </Form>
  );
}
