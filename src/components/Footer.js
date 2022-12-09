import { Container, Row, Col } from "react-bootstrap";
import logoWhite from '../assets/img/logoWhite.svg';
import "./Footer.css";


// export const Footer = () => {
//     return ( 
//         <footer className="footer">
//             <Container>
//                 <Row className="align- items-center">
//                     <Col xs={12} md={6} xl={7}>
//                         <img src={logoWhite} alt="Logo" />
//                         <p>Copyright 2022. All Rights Reserved</p>
//                     </Col>
//                 </Row>
//             </Container>
//             <Container>
//                 <Row className="align- items-center">
//                     <Col xs={12} md={6} xl={7}>
//                         <h4>Contacto</h4>
//                         <ul>
//                             <p>Correo</p>
//                             <p>diegopolodev@gmail.com</p> 
//                         </ul>
//                     </Col>
//                </Row>
//             </Container>
//             <Container>
//                 <Row className="align- items-center">
//                     <Col xs={12} md={6} xl={7}>
//                         <h4>Redes Sociales</h4>
//                         <ul>
//                             <li>LinkedIn</li>
//                             <li>Instagram</li> 
//                             <li>GitHub</li> 
//                             <li>Twtweer</li> 

//                         </ul>
//                     </Col>
                    
//                 </Row>
//             </Container>    
//         </footer>
//     )
// }


export const Footer = () => {
    return ( 
        <footer className="footer">
            <Container >
                <Row className="align- items-center">
                    <Col xs={8} md={4} xl={4} className=".columnas" >
                    
                        <img src={logoWhite} alt="Logo" className="footerimg"/>
                        
                        <p>Copyright 2022. All Rights Reserved</p>
                       
                    </Col>

                    <Col xs={8} md={4} xl={4} className=".columnas">
                        <h4>Contacto</h4>
                        <ul>
                            <p>Correo</p>
                            <p>diegopolodev@gmail.com</p>
                            <p>+57 3045865692</p>  
                            
                        </ul>
                    </Col>
        
                    <Col  xs={5} md={4} xl={4} className=".columnas">
                        <h4>Redes Sociales</h4>
                        <ul>
                            <li>LinkedIn</li>
                            <li>Instagram</li> 
                            <li>GitHub</li> 
                            <li>Twtweer</li> 

                        </ul>
                    </Col>  
                </Row>
            </Container>    
        </footer>
    )
}   