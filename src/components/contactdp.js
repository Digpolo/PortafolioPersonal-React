import { useForm } from "./hooks/useForm"
import csscontact from "./csscontact.css"
import Message from "./Message";
import logo from '../assets/img/logoSolo.svg';
import Loader from "./Loader";
import { Container, Row, Col } from "react-bootstrap";


const initialForm={
    name: "",
    email: ""
}

const validationsForm=(form)=>{
    let errors ={}; //validaciones

    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    
    if (!form.name.trim()) {//trim para no admitir caracteres como lineas
        errors.name =  'Escribe tu nombre';
    }else if (!regexName.test(form.name.trim())){ //test es un metod de js para validar
        errors.name = "'Nombre' solo acepta letras y espacios en blanco"
        }


    if (!form.email.trim()) {//trim para no admitir caracteres como lineas
        errors.email =   'El campo "Email" es requerido';
    }else if (!regexEmail.test(form.email.trim())){ //test es un metod de js para validar
        errors.email = "Escribe un correo valido "
        }
    
    return errors;   
};

   
export const  Contactdp = () => {
    const{
        form, 
        errors, 
        loading, 
        response, 
        handleChange, 
        handleBlur, 
        handleSubmit
    }=useForm(initialForm, validationsForm) //Para destructurarse del hooks
    
       
    

    return(
    <section className="contactdp">
        <Container>
            <Row className="align- items-center">
                <Col xs={12} md={6} xl={7} >
                

                    <img src={logo} alt="Logo" className="imglogo"/>

                </Col>
                <Col xs={12} md={6} xl={5}>

                    <form onSubmit={handleSubmit} className="formulario">
                        <h1 className="titleForm" >Te contacto</h1>
                        
                    <input type="text" className="formularioInput" placeholder="Nombre" name="name" id="name" 
                        onBlur={handleBlur} 
                        onChange={handleChange}
                        value={form.name} 
                        required/>

                    {errors.name && <p className="errors">{errors.name}</p>}
                    
                        <input type="email" className="formularioInput" placeholder="Correo electrónico" name="email" id="email" 
                        onBlur={handleBlur} 
                        onChange={handleChange}
                        value={form.email} 
                        required/>
                        {errors.email && <p className="errors">{errors.email}</p>}
                        
                        <input type="submit" className="formularioSubmit"
                        value="Enviar"/>
                        
                    </form>
                    {loading&&<Loader/>}

                    {response &&(
                    <Message msg="Los datos han sido enviados"bgColor="#198754"/>
                    )}
                </Col>       
            </Row>
        </Container>
        
     </section>
    
    
    
    )
}