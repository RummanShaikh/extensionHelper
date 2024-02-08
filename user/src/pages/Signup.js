import { Card, CardBody, CardHeader, Container, Form, FormGroup, Label, Input, Button, Row,Col } from "reactstrap";
import Base from "../components/Base";
import {signup} from "../services/user-service"
import { useEffect, useState } from "react";
import {Link as ReactLink} from "react-router-dom"

const Signup=()=>{

    const [data,setData]=useState({
        name:'',
        email:'',
        password:'',
    })

    const [error,SetError]=useState({
        errors:{},
        isError:false
    })

    

    //handle change
    const handleChange=(event, property)=>{
        setData({...data,[property]:event.target.value})
    }

    const resetData=()=>{
        setData({
            name:'',
        email:'',
        password:'',
    })
    }

    const submitForm=(event)=>{
        event.preventDefault()
        signup(data).then((resp)=>{
            console.log(resp)
            console.log("sucess log")
        }).catch((error)=>{
            console.log(error)
            console.log("Error log")
        })

    }

    return(
        <Base>
        <Container>
            <Row className="mt-4">
                <Col sm={{size:15, offset:1}}>
                <Card color="dark" outline>
                <CardHeader>
                    <h3>Sign Up</h3>
                </CardHeader>

                <CardBody>
    <Form onSubmit={submitForm}>  
      <FormGroup>
        <Label for="name">Enter Name</Label> 
        <Input type="text" id="name" placeholder="Name" name="name" required onChange={(e)=>handleChange(e,'name')} value={data.name}/>
        </FormGroup>
        <FormGroup>
        <Label for="email">Enter Email</Label>
        <Input type="email" id="email" placeholder="Email" name="email" required onChange={(e)=>handleChange(e,'email')} value={data.email}/>
        </FormGroup>
        <FormGroup>
        <Label for="password">Enter Password</Label>
        <Input type="password" id="password" placeholder="Password" name="password" required onChange={(e)=>handleChange(e,'password')} value={data.password}/>
        </FormGroup>
      <Container className="text-center">
     
        <Button color="dark">Register</Button>
        
        <Button onClick={resetData} color="secondary" type="reset" className="ms-2">Reset</Button>
        </Container>
    </Form>
  
  </CardBody>
  </Card>
                </Col>
            </Row>
  </Container>
        </Base>
    );
};
export default Signup;