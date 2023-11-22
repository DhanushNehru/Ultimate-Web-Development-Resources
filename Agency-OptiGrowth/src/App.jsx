import styled, { css } from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Feature from "./components/Feature";
import AnimatedShapes from "./components/AnimatedShapes";
import Service from "./components/Service";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  

  
`;

const Shape = css`

width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: -1;

`;

const IntroShape = styled.div`
${Shape}
background-color: crimson;
clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 55% 100%);
`;

const FeatureShape = styled.div`
${Shape}
background-color: pink;
clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
`;
const ServiceShape = styled.div`
${Shape}
background-color: #f88497;
clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
`;
const PriceShape = styled.div`
${Shape}
background-color: crimson;
clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
`;

const App = () => {

const smallScreen = window.screen.width <= 480 ? true : false;

  return (
    <>
  <Container>
    <Navbar/>
    <Intro/>
    <IntroShape/>
  </Container>

  <Container>
      <Feature/>
      <FeatureShape/>
      <AnimatedShapes/>
  </Container>

  <Container>
     <Service/>
     {!smallScreen && <ServiceShape/>}
  </Container>

  <Container>
     <Price/>
     <PriceShape/>
  </Container>

  <Container>
     <Contact/>
     <Footer/>
  </Container>

  
    </>
  );
};

export default App;