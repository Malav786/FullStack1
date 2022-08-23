import React from "react";
import { Alert } from "react-bootstrap";

export default function MyAlert(props) {
  return (
    props.alert && <Alert variant={props.alert.type}>{props.alert.message}</Alert>
  );
}