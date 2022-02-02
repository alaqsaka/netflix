import React from "react";
import { Form } from "../components";

export function SigninForm() {
  return (
    <Form.Container>
      <Form.Background>
        <Form.Item>
          <Form.Title>Sign In</Form.Title>
          <Form.Input placeholder="Email or phone number"></Form.Input>
          <Form.Input placeholder="Password"></Form.Input>
        </Form.Item>
      </Form.Background>
    </Form.Container>
  );
}
