import React from 'react'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Container = styled.div``

const Wrapper = styled.div`
    padding:20px;
`

const Title = styled.h1`
    font-weight:300px;
    text-align:center;
`

const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
`

const TopButton = styled.button`
    padding:10px;
    font-weight:600;
    cursor:pointer;

    border:${props=>props.type === 'filled' && 'none'};
    color:${props=>props.type === 'filled' && 'white'};
    background-color:${props=>props.type === 'filled' ? '#fbb03b' : 'white'};
`
const TopTexts = styled.div``

const TopText = styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin:0px 10px;
`

const Bottom = styled.div`
    display:flex;
    justify-content:space-between;
`
const Info = styled.div`
    flex:3;
`
const Summary = styled.div`
    flex:1;
    border:0.5px solid lightgray;
    border-radius: 10px;
    padding:20px;
    height: 50vh;
`

const Product = styled.div`
    display:flex;
    justify-content:space-between;
`

const ProductDetail = styled.div`
    flex:2;
    display:flex;
`

const Image = styled.img`
    width:150px;
`

const Details = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
`

const ProductName = styled.span``

const ProductID = styled.span``

const PriceDetail = styled.span`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`
const ProductAmountContainer = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
`

const ProductAmount = styled.div`
    font-size:18px;
    margin: 5px;
    font-weight:bold;
`

const ProductPrice = styled.div`
    font-size:24px;
    font-weight:200px;
`
const Hr = styled.hr`
    background-color: #eee;
    border:none;
    height:1px;
    margin: 20px 0px;
`

const SummaryTitle = styled.h1`
    font-weight:200px;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display:flex;
    justify-content:space-between;
    font-weight: ${props=>props.type === 'total' && '600'};
    font-size: ${props=>props.type === 'total' && '20px'};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
    width:100%;
    padding:10px;
    background-color: #fbb03b;
    border:none;
    font-weight:bold;
    color:white;
`


const Cart = () => {
  return (
    <Container>
        <Announcements/>
        <Navbar/>
        <Wrapper>
            <Title>YOUR BOOKINGS</Title>
            <Top>
                <TopButton>CONTINUE BOOKING</TopButton>
                <TopTexts>
                    <TopText>Booking List (1)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type='filled'>CHECKOUT</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://www.toyota.co.ug/media/gamme/modeles/images/5cfc7eac09818170f664f1698d76843d.png"/>
                            <Details>
                                <ProductID><b>ID:</b> #59864004</ProductID>
                                <ProductName><b>Product:</b> TOYOTA LAND CRUISER 300</ProductName>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <AddIcon/>
                                <ProductAmount>2</ProductAmount>
                                <RemoveIcon/>
                            </ProductAmountContainer>
                            <ProductPrice>UGX. 700, 000</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src="https://www.toyota.co.ug/media/gamme/modeles/images/bcdb3dfbc1f32e390302a14b153a4ae2.png"/>
                            <Details>
                                <ProductID><b>ID:</b> #59864004</ProductID>
                                <ProductName><b>Product:</b> TOYOTA LAND CRUISER 300</ProductName>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <AddIcon/>
                                <ProductAmount>2</ProductAmount>
                                <RemoveIcon/>
                            </ProductAmountContainer>
                            <ProductPrice>UGX. 700, 000</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal: </SummaryItemText>
                        <SummaryItemPrice>UGX. 1,400,000</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Tax: </SummaryItemText>
                        <SummaryItemPrice>UGX. 400,000</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Discount: </SummaryItemText>
                        <SummaryItemPrice>UGX. -400,000</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total: </SummaryItemText>
                        <SummaryItemPrice>UGX. 1,400,000</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>

    </Container>
  )
}

export default Cart