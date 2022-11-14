import { Col } from "react-bootstrap"

export const Banner = () => {
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items=center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bienvenido a mi portafolio</span>
                        <h1>{'Hola mi nombre es Diego Polo'}
                        <span className="wrap">Desarrollador web</span></h1>
                        <p>'Desarrollador Front-end con ganas de escribi 
                            código sin error para una grande compañia'</p>
                        <button onCanPlay={() => console.log('connect')}>Contáctame</button>   
                    </Col>
                </Row>
            </Container>
        </section>
    )
}