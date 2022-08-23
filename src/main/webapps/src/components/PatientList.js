import React, { useEffect, useState } from "react";
import { Card, Container, Table, ButtonGroup, Button } from "react-bootstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'

export default function PatientList(props) {
  const [patients, setpatients] = useState([]);

  useEffect(() => {
    getpatients();
  }, []);

  let getpatients = () => {
    axios
      .get("http://localhost:8080/patient")
      .then((response) => setpatients(response.data))
      .catch((error) => alert(error));
  };

  let deletepatient = (patientId) => {
    axios.delete("http://localhost:8080/patient/"+patientId)
    .then(response=> {
      if (response.data !== null){
        props.showAlert("success", "Record deleted successfully")
        setpatients(patients.filter(patient=>patient.id!==patientId));
      }
    })
  }

  return (
    <div className="my-3">
      <Container>
        <Card.Header>
          <h3>patients List</h3>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Patient Id</th>
                <th>Patient Name</th>
                <th>Patient Age</th>
                <th>Patient Address</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              {patients.length === 0 ? (
                <tr>
                  <td colSpan={4}>{patients.length} Studnets Available!!!</td>
                </tr>
              ) : (
                patients.map((patient)=>
                <tr key={patient.id}>
                  <td>{patient.id}</td>
                  <td>{patient.name}</td>
                  <td>{patient.age}</td>
                  <td>{patient.address}</td>
                  <td>
                    <ButtonGroup>
                      <Link to={"/patient/"+patient.id}><Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faEdit}> Edit </FontAwesomeIcon></Button></Link>{ ' '}
                      <Button size="sm" variant="outline-danger" onClick={deletepatient.bind(this,patient.id)}><FontAwesomeIcon icon={faTrash}> Delete </FontAwesomeIcon></Button>
                      {/* <Button size="sm" variant="outline-danger" onClick={()=>deletepatient(patient.id)}><FontAwesomeIcon icon={faTrash}> Delete </FontAwesomeIcon></Button> */}
                    </ButtonGroup>
                  </td>
                </tr>
                )
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Container>
    </div>
  );
}