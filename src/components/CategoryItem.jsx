import styled from "styled-components"

const Container = styled.div`
    flex:1;
    margin:3px;
    height: 70vh;
    position: relative;
`
const Info = styled.div`
    postion: absolute;
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
 height:100%;
 object-fit: cover;
`

const Title = styled.h1`

`

const Button = styled.button`

`

const CategoryItem = ({item}) => {
  return (
    <Container key={item.id}>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>BOOK NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem