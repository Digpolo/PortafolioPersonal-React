import { Container, Col, Row } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import caso from '../assets/img/caso.svg';
import "./Projects.css";


export const Projects = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <div className="skill-bx">
                        <h2>Proyectos</h2>
                        <p>La innovación es el motor para potenciar las industrias</p>                                              
                    </div>
                    <Col xs={12} md={6} xl={7}>
                    <div className="comp">
                      <div className="casoExito">
                        <h3>Caso de éxito</h3>
                        <p>Cliente: Expresión Clinica Odontólogica</p>
                        <p>Con el unico objetivo de convertir a los visitantes en Leads o prospectos de ventas por medio de la landing page </p>
                        <button onClick={() => console.log('connect')}>Leer caso de estudio</button>
                      </div>
                    </div>
                  </Col>

                  <Col xs={12} md={6} xl={5}>
                    <img src={caso} alt="caso" className="imglogo" />
                  </Col>    
                </Row>
            </Container>        
        </section>
      )
}