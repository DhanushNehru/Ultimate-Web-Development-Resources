import React, { useState } from 'react'
import styled from 'styled-components'
import How from '../img/how.png'
import MiniCard from './MiniCard'
import Play from '../img/play.png'



const Container = styled.div`
display: flex;
height: 100%;

@media only screen and (max-width:480px){
    flex-direction: column;
}
`;
const Right = styled.div`
width: 50%;
@media only screen and (max-width:480px){
    width:100% ;
}
`;

const Image = styled.img`
display: ${(Props) => Props.open && "none"};
height: 100%;
margin-left: -1px;


`;

const Left = styled.div`
width: 50%;
position: relative;

@media only screen and (max-width:480px){
   display: none;
}
`;

const Wrapper = styled.div`
padding: 50px;
display: flex;
flex-direction: column;

@media only screen and (max-width:480px){
    padding: 20px;
    
}
`;

const Title = styled.h1`

`;
const Desc = styled.p`
font-size: 20px;
margin-top: 20px;
color: #555;
`;

const CardContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 50px;
`;

const Button = styled.button`
width: 180px;
border: none;
border-radius: 10px;
background-color: darkblue;
color: white;
font-size: 20;
padding: 15px;
margin-top: 15px;
cursor: pointer;
display: flex;
align-items: center;
`;

const Icon = styled.img`
width: 20px;
margin-right: 10px;
`;

const Video = styled.video`
display: ${(Props) => !Props.open && "none"};
height: 300px;
position: absolute;
top: 0;
bottom: 0;
right: 0;
margin: auto;

@media only screen and (max-width:480px){
    width: 100%;
    
}
`;

const Modal = styled.div`
width: 100vw;
height: 100vh;
position: absolute;
top: 0;
left: 0;
background-color:rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
 position: absolute;
 background-color: white;
 padding: 5px;
 border: none;
 border-radius: 5px;
 right: 5px;
 top: 30%;
`;



const Service = () => {

    
    const[open, setOpen] = useState(false);
    //we can send our image as prop
    
    const smallScreen = window.screen.width <= 480 ? true : false;

  return (
    <Container>
        <Left>
            <Image open={open}src={How}/>  
            <Video open={open} autoPlay loop controls src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"/>
        </Left>
        <Right>
            <Wrapper>
                <Title>Simple process to start</Title>
                <Desc>
                    We provide digital experience digital services to startups and small businesses
                    looking for a partner of their digital media, design & development, lead generation
                    and communications requirements. We work with you, not for you. Although we have amazing resources.
                </Desc>
                <CardContainer>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                </CardContainer>
                <Button onClick={() => setOpen(true)}>
                    <Icon src={Play}/>How it works
                </Button>
            </Wrapper>
        </Right>
        {smallScreen && open && (// if its small screen and open then show me the video
            <Modal>
                 <Video open={open} 
                   autoPlay 
                   loop 
                   controls 
                   src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"/>
                
                <CloseButton onClick = {() => setOpen(false)}>Close</CloseButton>
            </Modal>
        )}
    </Container>
  )
}

export default Service