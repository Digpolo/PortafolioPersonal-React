import { useState } from "react"
import { Container, Row } from "react-bootstrap";
import contacImg from "../assets/img/Contac-img.svg";

export const Contac = () => { 
    const formInitialDetails ={
        firsName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }    
    
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttomText, setButtonTex] = useState('send');
    const [status, setStatus] = useState({});
    const onFormupdate =(category, value) =>{
        setFormDetails({
            ...formDetails,
            [category] : value
        })
    }

    const handlSubmit = () =>

    return (
        <section className="contact" id='connect'>
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contacImg} alt='Contacto'/>
                    </Col> 
                    <Col md={6}>
                        <h2>Pongase en contacto</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={formDetails.firtsName} plaseholder="Firts Name" onChange={(e) => onFormupdate('firstName', e.target.value)}/>
                                </Col>

                                <Col sm={6} className='px-1'>
                                    <input type='text' value={formDetails.lastName} plaseholder="Last Name" onChange={(e) => onFormupdate('lastName', e.target.value)}/>
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='email' value={formDetails.email} plaseholder="Email Adres" onChange={(e) => onFormupdate('email', e.target.value)}/>
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='tel' value={formDetails.phone} plaseholder="Phone N0." onChange={(e) => onFormupdate('phone', e.target.value)}/>
                                </Col>
                                <Col>
                                    <textarea row='6' value={formDetails.message} placeholder="Message" onChange={(e) => onFormupdate('message', e.target.value)}> </textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.succes === false ? 'danger' : 'succes'}>{satatus.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}