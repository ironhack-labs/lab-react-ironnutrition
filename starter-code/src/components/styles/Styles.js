import styled from 'styled-components'

const StyledCard = styled.article`
width: 50vw;
border: 1px solid black;

img, input{
    width: 80px;
    height: 50px;
    object-fit: cover;
}
div{
    display:flex;
    justify-content: space-between;
}

button{
    width:50px;
    height: 50px;
    background-color: lightblue;

}

`
export default StyledCard