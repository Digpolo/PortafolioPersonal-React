import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import "./Projectsm.css";

import logo from "../assets/img/logo.svg"
//import 'animate.css';
//import TrackVisibility from 'react-on-screen';




export const Projectsm = () => {

    
    
    return (
        <section className="project" id='project'>
            <Container>
                <Row>
                    <Col> 
                        <div className="titulo">
                          <h3>Potenciamos a estas compañias</h3>
                        </div>
                          
                          <div className="subtitulo">
                          <p >Con el  objetivo de dar soluciones reales mediante el software</p>
                          </div>
                        
                        <div className="cardsContainer">
                          <div className="cards">
                            <h4>Desarrollo de software 
                              Diseño UX/UI</h4>
                            <img src={logo} alt="caso" />
                            <div className="linea"/>
                            <p className="classp">Expresión es una landign page convertir los visitantes en Leads o prospectos de ventas por medio de la landing page </p>
                          </div>
                          <div className="cards">
                            <h4>Desarrollo de software
                              Diseño UX/UI</h4>
                            <img src={logo} alt="caso" />
                            <div className="linea"/>
                            <p className="classp">Expresión es una landign page convertir los visitantes en Leads o prospectos de ventas por medio de la landing page </p>
                          </div>
                          <div className="cards">
                            <h4>Desarrollo de software
                              Diseño UX/UI</h4>
                            <img src={logo} alt="caso" />
                            <div className="linea"/>
                            <p className="classp">Expresión es una landign page convertir los visitantes en Leads o prospectos de ventas por medio de la landing page </p>
                          </div>

                        </div>
                        
                        {/* <Tab.Container id="projects-tabs" defaultActiveKey="first">

                        
                         <Tab.Content>
                          <Tab.Pane eventKey="first">
                            <Row>
                                {
                                projects.map((project, index) => {
                                    return (
                                    <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                                    )
                                })
                                }
                            </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="section">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                            </Tab.Pane>
                         </Tab.Content>
                        </Tab.Container> */}
                    </Col>
                        
                    
                </Row>
            </Container>
           
        </section>

    )
}