import CategoryItem from "./CategoryItem"
import { Category } from "../data"
import styled from "styled-components"

const Container = styled.div`
    display:flex;
    padding: 20px;
    justify-content: space-between;
`

const Categories = () => {
  return (
    <Container>
        {Category.map(item=>(
            <CategoryItem item={item}/>
        ))}
    </Container>
  )
}

export default Categories