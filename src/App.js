import './App.css'
import About from './Sections/About/About';
import Contact from './Sections/Contact/Contact';
import Experience from './Sections/Experience/Experience';
 import Home from './Sections/Home/Home';
import Work from './Sections/Work/Work';
import Navbar from './Components/Navbar/Navbar';
 import ContactBar from './Components/ContactBar/ContactBar' ;
import Footer from './Components/Footer/Footer';

import Fade from 'react-reveal/Fade';


function App(){
  return(
    <main className='main'>
      
     <Navbar></Navbar>
      <div className='app_section_container'>
      <Fade left>
        <Home></Home> 
        </Fade>

        <Fade top>
        <About></About>
        </Fade>

        <Fade top>
       <Experience></Experience>
       </Fade>

       <Fade top>
        <Work></Work>
        </Fade>
        <Fade top>
         <Contact></Contact>
         </Fade>

      </div>
      <ContactBar></ContactBar>
      <Footer></Footer> 
      
    </main>
  );
}
export default App
