import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import { mobile } from '../responsive'

const Container = styled.div``
const Title = styled.h1`
    margin:20px;
`
const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
`
const Filter = styled.div`
    margin:20px;
    ${mobile({
        width: '0px 20px',
        display:'flex',
        flexDirection:'column'
    })}
`

const FilterText = styled.span`
    font-size:20px;
    font-weight:600;
    ${mobile({
        marginRight:'0px'
    })}
`
const Select = styled.select`
    padding:10px;
    margin-right:20px;
    ${mobile({
        margin:'10px 0px'
    })}
`
const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
        <Announcements/>
        <Navbar/>
        <Title>Cars For Booking</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter:</FilterText>
                <Select>
                    <option disabled selected>Model</option>
                    <Option>City</Option>
                    <Option>Sedan</Option>
                    <Option>SUV Crossover</Option>
                    <Option>Family</Option>
                    <Option>Pickups</Option>
                    <Option>4X4</Option>
                    <Option>Bus</Option>
                </Select>
                <Select>
                    <option disabled selected>Color</option>
                    <Option>Black</Option>
                    <Option>White</Option>
                    <Option>Blue</Option>
                    <Option>Silver</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort:</FilterText>
                <Select>
                    <option selected>Newest</option>
                    <Option>Lowest</Option>
                    <Option>Highest</Option>
                    <Option>Popular</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
    </Container>
  )
}

export default ProductList