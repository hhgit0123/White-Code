import React from "react";
import { Form, Button } from "react-bootstrap";
export default function LoginForm(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <Form onSubmit={props.handleSubmit} noValidate>
        <Form.Group>
          <Form.Label>Login</Form.Label>
          <Form.Control
            name="login"
            value={props.login}
            onChange={props.handleChange}
            isInvalid={props.validationErrors.login}
            type="text"
            placeholder="login"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            value={props.password}
            onChange={props.handleChange}
            isInvalid={props.validationErrors.password}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
