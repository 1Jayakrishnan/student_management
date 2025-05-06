import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import myImg from "../assets/images/addstds.jpg"
import { get_One_StudentAPI, new_StudentAPI, update_StudentAPI } from '../services/api';

function Student({studId}) {
    
    const [student, setStudents] = useState({
        Name:'',Age:'',Place:'',College:'',Course:'',Mobile:''
    })


    async function get_student(studId){
        let result = await get_One_StudentAPI(studId)
        console.log(result.data)
        if(result.status > 199 && result.status < 300){
            setStudents(result.data)
        }
    }

    useEffect(() => {
        get_student(studId)
    }, [studId])
    
    async function saveStudent() {
        if(studId){
            let result = await update_StudentAPI(studId, student)
        }
        else{
            let result = await new_StudentAPI(student)
        }
    }


    return (
        <div
            style={{
                backgroundImage: `url(${myImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "100vh",  // Full-screen height
                width: "100%",   // Full-screen width
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            id='Student' //give id here!!!!(for render this page while clicking the Student from top navbar)
        >
         <Container className="d-flex justify-content-center align-items-center mt-5" style={{ height: '500px', marginTop: '-100px', marginLeft: '100px', padding: '10px' }}>
            <Card style={{ height: '460px', width: '500px', background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', borderRadius: '15px', padding: '25px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}>
                <h4 className="text-center mb-4">Add Student</h4>
                <Form onSubmit={saveStudent}>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" name="name" placeholder="Name" required className="rounded-pill shadow-sm" 
                        onChange={(e) => setStudents({ ...student, Name:e.target.value })}  value={student.Name}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="number" name="age" placeholder="Age" required className="rounded-pill shadow-sm" 
                        onChange={(e) => setStudents({ ...student, Age:e.target.value })} value={student.Age}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" name="place" placeholder="Place" required className="rounded-pill shadow-sm" 
                        onChange={(e) => setStudents({ ...student, Place:e.target.value })} value={student.Place}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" name="college" placeholder="College" required className="rounded-pill shadow-sm" 
                        onChange={(e) => setStudents({ ...student, College:e.target.value })} value={student.College}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" name="course" placeholder="Course" required className="rounded-pill shadow-sm" 
                        onChange={(e) => setStudents({ ...student, Course:e.target.value })} value={student.Course}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" name="mobile" placeholder="Mobile" required className="rounded-pill shadow-sm" 
                        onChange={(e) => setStudents({ ...student, Mobile:e.target.value })}  value={student.Mobile}/>
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="primary" type="submit" className="w-100 rounded-pill shadow">Save</Button>
                    </div>
                </Form>
            </Card>
        </Container>
        </div>
    );
}

export default Student;
