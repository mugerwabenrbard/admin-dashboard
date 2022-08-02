import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width:100vw;
    height:100vh;
    background: linear-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0.7)), 
    url("https://cdn.pixabay.com/photo/2021/07/02/09/39/cars-6381364_960_720.jpg")
     center no-repeat;
    background-size: 100%;
    display:flex;
    align-items:center;
    justify-content: center;
`
const Wrapper = styled.div`
    width:40%;
    padding: 20px;
    background-color:white;
`

const Title = styled.h1`
    font-size:24px;
    font-weight:00px;
`

const Form = styled.form`
    display:flex;
    flex-wrap:wrap;
`

const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0px 0px;
    padding:10px
`

const Button = styled.button`
    margin-top:20px;
    padding: 10px 15px;
    width: 40%;
    border:none;
    font-weight: 700;
    font-size: 14px;
    background-color: #fbb03b;
    cursor:pointer;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="First Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="Username"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Button>Register</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register