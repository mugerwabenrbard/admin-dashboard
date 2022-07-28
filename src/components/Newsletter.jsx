import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60vh;
    background-color:#f3f3f3;
    display:flex;
    align-items:center;
    justify-content:center;
`
const Title = styled.h1``
const Description = styled.p``
const InputContainer = styled.div``
const Input = styled.input``
const Button = styled.button``

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
