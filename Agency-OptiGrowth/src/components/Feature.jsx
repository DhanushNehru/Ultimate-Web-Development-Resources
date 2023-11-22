import React from 'react'
import styled from 'styled-components'
import Phone from '../img/app.png'

const Container = styled.div`
display: flex;

@media only screen and (max-width:480px){
    flex-direction: column;
    padding:30px 20px ;
}
`;
const Left = styled.div`
width: 50%;

@media only screen and (max-width:480px){
    display: none;
}
`;

const Image = styled.img`

width: 80%;

`;

const Right= styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;

@media only screen and (max-width:480px){
    width:100% ;
}
`;

const Title = styled.span`
font-size: 70px;

@media only screen and (max-width:480px){
    width:100% ;
    font-size: 50px;
}
`;
const Subtitle = styled.span`
font-size: 24px;
font-style: italic;
color: #333;
margin-top: 30px;

`;
const Desc = styled.p`
font-size: 20px;
color: #777;
margin-top: 30px;
`;
const Button = styled.button`
width: 150px;
border: none;
padding: 15px 20px;
background-color: darkblue;
color: white;
font-size: 20px;
border-radius: 20px;
cursor: pointer;
margin-top: 20px;

`;

const Feature = () => {
  return (
    <Container>
        <Left><Image src={Phone}/></Left>
        <Right>
            <Title>
                <b>good</b> design<br/>
                <b>good</b> business

            </Title>
            <Subtitle>We know that good design means good business</Subtitle>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quasi mollitia tempore! Earum tempora laboriosam illum id obcaecati libero, at cupiditate sapiente, facere optio maiores possimus ipsam autem temporibus. Officiis!

            </Desc>
            <Desc>
                We care for your business and guarantee you to achieve marketing goals.
            </Desc>
            <Button>Learn More</Button>
        </Right>
    </Container>
  )
}

export default Feature