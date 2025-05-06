import React from "react";
import { Table, Container } from "react-bootstrap";
import myImg from "../assets/images/display.avif"
import { getAll_StudentAPI, delete_StudentAPI } from "../services/api";
import { useState, useEffect } from "react";


function Display({setStudId}){

  const [students, setStudents] = useState()
  
  async function displayStudents(){
    let result = await getAll_StudentAPI()
    if(result.status > 199 && result.status < 300){
      setStudents(result.data)
    }
    // console.log(result)
  }

  useEffect(() => {
    displayStudents()
  })


  async function delete_student(id){
    let result = await delete_StudentAPI(id)
    if (result.status > 199 && result.status < 300){
      displayStudents()

    }
  }

  function get_student_data(id){
    console.log(id)
    setStudId(id)
  }

  return (
    <div
    style={{
      backgroundImage: `url(${myImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100vh",  // Full screen height
      width: "100%",   // Full screen width
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    }}
  >
    <Container className="mt-4" id="Display">
      <h1 className="mb-3 text-center">Display Data</h1>
      <Table striped bordered hover responsive className="shadow">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Place</th>
            <th>College</th>
            <th>Course</th>
            <th>Mobile</th>
            <th>Action</th>
          </tr>
        </thead>
          <tbody>
            
            {
              students && students.map((i) =>(
                <tr>
                  <td>{i.Name}</td>
                  <td>{i.Age}</td>
                  <td>{i.Place}</td>
                  <td>{i.College}</td>
                  <td>{i.Course}</td>
                  <td>{i.Mobile}</td>
                  <td>
                    <a className="btn btn-outline-primary" onClick={() => get_student_data(i.id)} >Edit</a>
                    <a className="btn btn-outline-danger" onClick={() => delete_StudentAPI(i.id)} >Delete</a>
                  </td>
                </tr>
              ))
            }

          </tbody>
      </Table>
    </Container>
    </div>
  );
};

export default Display;
