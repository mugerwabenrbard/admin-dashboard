import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    width:100vw;
    height:100vh;
    background: linear-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0.7)), 
    url("https://cdn.pixabay.com/photo/2018/07/12/21/32/subscribe-3534409_960_720.jpg")
     center no-repeat;
    background-size: cover;
    display:flex;
    align-items:center;
    justify-content: center;
`
const Wrapper = styled.div`
    width:25%;
    padding: 20px;
    background-color:white;
    ${mobile({
        width: '75%',
    })}
`

const Title = styled.h1`
    font-size:24px;
    font-weight:00px;
`

const Form = styled.form`
    display:flex;
    flex-direction:column;
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
const Link = styled.a`
    margin: 5px 0px;
    font-size:12px;
    text-decoration:underline;
    cursor:pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>LOGIN</Title>
            <Form>
                <Input placeholder="Username Or Email"/>
                <Input placeholder="Password"/>
                <Button>Login</Button>
                <Link>Forgot password</Link>
                <Link>Create a new account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login