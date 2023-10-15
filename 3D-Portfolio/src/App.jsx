import { BrowserRouter } from "react-router-dom";
import { Hero, Navbar, StarsCanvas, About, Experience, Works, Feedbacks, Contact } from "./components";
import './App.css'; // Import your custom styles

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-container'>
        <div className='hero-background'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        <Feedbacks />
        <div className='stars-container'>
          <StarsCanvas />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
