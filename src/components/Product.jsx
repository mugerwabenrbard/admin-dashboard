import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Search from '@mui/icons-material/Search';
import { FavoriteBorderOutlined } from '@material-ui/icons';

const Info = styled.div`
    opacity:0;
    width: 100%;
    height: 100%;
    position:absolute;
    top:0;
    left:0;
    z-index:3;
    display:flex;
    background-color: rgba(0,0,0,0.2);
    align-items:center;
    justify-content:center;
    transition: all 0.5s ease;
    cursor:pointer;
`

const Container = styled.div`
    flex:1;
    margin: 5px; 
    min-width: 285px;
    height: 350px;
    display:flex;
    align-items:center;
    justify-content:centre;
    position: relative;

    &:hover ${Info}{
        opacity:1;
    }
`
// const Circle = styled.div`
//     width:200px;
//     height:200px;
//     border-radius: 50%;
//     background-color: #f3f3f3;
//     position:absolute;
//     `
    const Image = styled.img`
    height:55%;
    z-index:2;
`
const Icon = styled.div`
    width:40px;
    height:40px;
    border-radius: 50%;
    display:flex;
    background-color: #201b56;
    color:white;
    align-items:center;
    justify-content:center;
    margin:10px;
    transition: all 0.5s ease; 
    
    &:hover{
        background-color: #fbb03b;
        color:black;
        transform: scale(1.1);
    }
`

const Product = ({item}) => {
  return (
    <Container>
        {/* <Circle/> */}
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlinedIcon/>
            </Icon>
            <Icon>
                <Search/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product