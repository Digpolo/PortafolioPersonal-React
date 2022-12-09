//import logo from './logo.svg';
import './App.css';


import { NavBar } from './components/navBar';
import { Banner} from './components/Banner';
import { Stories } from './components/Stories';
import { Projects } from './components/Projects';
import { Contactdp } from './components/contactdp';
import { Footer } from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Stories/>
      <Projects/> 
      <Contactdp/>
      <Footer/>
    </div>
  ); 
}

export default App;
