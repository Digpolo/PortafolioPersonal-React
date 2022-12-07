import { useState } from "react"
import { helpHttp } from "../helpers/helpHttp"


export const useForm =(initialForm, validateForm)=>{
    const [form, setForm]=useState(initialForm);
    const [errors, setErrors]=useState({});
    const [loading, setLoading]=useState(false);
    const [response, setResponse]=useState(null);

    const handleChange = (e)=>{ //Detecta lo que estamos escribiendo  y haga el cambio de los valores//
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]:value,
        });
    } 

    const handleBlur=(e)=>{
        handleChange(e);
        setErrors(validateForm(form));
    }   // Se hacen las validaciones//

    const handleSubmit=(e)=>{ // Envio del fomulario
        e.preventDefault();  // Controlar envio a travez de react 
        setErrors(validateForm(form))  //Verificar si no hay errores
       
        if(Object.keys(errors).length === 0){
                 // Cuando no dectecte error "enviar"
            setLoading(true);
            helpHttp()
            .post("https://formsubmit.co/ajax/diegopolodev@gmail.com",{
                body:form,
                headers: {
                    "Content-Type": "aplication/json",
                    Accept: "aplication/json",
                },
            })
            .then((res) =>{
                setLoading(false);
                setResponse(true);
                setForm(initialForm);
                setTimeout(() => setResponse(false), 5000);
              })
        }else{  
            return;
        }
    } 
    

    return{
        form, 
        errors, 
        loading, 
        response, 
        handleChange, 
        handleBlur, 
        handleSubmit
    }

};

