import React from 'react'
import Announcements from '../components/Announcements'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Newsletter from '../components/Newsletter'
import { mobile } from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
    padding:50px;
    display:flex;
    ${mobile({
        padding:'10px',
        flexDirection: 'column'
    })}
`

const ImageContainer = styled.div`
    flex:1;
`

const Image = styled.img`
    width:100%;
    object-fit:cover;
    ${mobile({
        height:'30vh'
    })}
`

const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
    ${mobile({
        padding:'10px',
    })}
`

const Title = styled.h1`
    font-weight:200;
`

const ProductDescription = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100px;
    font-size:40px;
    ${mobile({
        fontSize:'25px',
    })}
`

const Button = styled.button`
    margin: 0px 50px;
    padding: 10px;
    background-color: #fbb03b;
    border:none;
    cursor:pointer;
    font-weight:700;
    border-radius:5px;
`

const Product = () => {
  return (
    <Container>
        <Announcements/>
        <Navbar/>
        <Wrapper>
            <ImageContainer>
                <Image src="https://www.toyota.co.ug/media/gamme/modeles/images/5cfc7eac09818170f664f1698d76843d.png"/>
            </ImageContainer>
            <InfoContainer>
                <Title>TOYOTA LAND CRUISER 300</Title>
                <ProductDescription>
                    With a 70-year heritage of off-roading, the all-new Toyota Land Cruiser 300 is more powerful than ever. The king of 4x4 features newly developed turbocharged V6 gasoline and diesel engines.
                </ProductDescription>
                <Price>UGX. 450,000 / Day</Price>
                <Button>BOOK TODAY</Button>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
    </Container>
  )
}

export default Product