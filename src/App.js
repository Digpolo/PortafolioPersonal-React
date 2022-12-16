//import logo from './logo.svg';
import './App.css';


import { NavBar } from './components/NavBar';
import { Banner} from './components/Banner';
import { Projects } from './components/Projects';
import { Projectsm } from './components/Projectsm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Projects/>
      <Projectsm/>
      <Contact/>
      <Footer/>
    </div>
  ); 
}

export default App;
