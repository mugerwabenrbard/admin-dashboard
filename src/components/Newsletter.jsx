import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    height: 60vh;
    background-color:#f3f3f3;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom:20px;
    ${mobile({
      textAlign: 'center',
      fontSize: '34px'
     })}
`
const Description = styled.p`
    font-size:24px;
    font-weight:300;
    margin-bottom:20px;
    ${mobile({
      textAlign: 'center',
      fontSize: '20px'
     })}
`
const InputContainer = styled.div`
    width:50%;
    height:40px;
    background-color: white;
    display:flex;
    justify-content:space-between;
    border:1px solid lightgray;
    ${mobile({
      width: '80%',
     })}
`
const Input = styled.input`
    border:none;
    flex:8;
    padding-left:20px;
`
const Button = styled.button`
    border:none;
    background-color:#fbb03b;
    padding: 0px 20px;
    cursor:pointer;
`

const Newsletter = () => {
  return (
    <Container>
      <Title>News Letter</Title>
      <Description>Get Timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder='Enter Email Address'/>
        <Button>
            <Send/>
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
