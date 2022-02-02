import React from "react";
import {
  Container,
  Title,
  Button,
  Background,
  Input,
  Item,
  Error,
  Text,
  TextSmall,
  Link,
  Submit,
  Base,
} from "./style/form";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Container = function FormContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Form.Background = function FormBackground({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Button = function FormButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Form.Item = function FormItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps} />;
};
