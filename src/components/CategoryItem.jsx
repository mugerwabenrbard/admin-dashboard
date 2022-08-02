import React from 'react'

import styled from "styled-components"
import { mobile } from '../responsive'

const Container = styled.div`
    flex:1;
    margin:3px;
    height: 70vh;
    position: relative;
    background-color:#f3f3f3;
    display:flex;
    align-items:center;
`
const Info = styled.div`
    position: absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
`

const Image = styled.img`
 width:100%;
 height:60%;
 object-fit: cover;
 ${mobile({
  height: '30vh'
 })}
`

const Title = styled.h1`
  color:#fbb03b;
  margin-bottom:20px;
  ${mobile({
    textAlign: 'center'
   })}
`

const Button = styled.button`
  border:none;
  padding: 10px;
  background-color: #fbb03b;
  color: #201b56;
  font-weight: bold;
  cursor:pointer;
`

const CategoryItem = ({item}) => {
  return (
    <Container key={item.id}>
        <Image src={item.img}/>
        <Info key={item.id}>
            <Title>{item.title}</Title>
            <Button >BOOK NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem