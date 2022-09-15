import React, { useState } from "react";
import * as PATHS from "../utils/paths";
import { recoverPassword } from "../services/auth";
import { useNavigate } from "react-router-dom";


export default function RecoverPasswd() {
    const [data, setData] = useState({
        email:''
    });
    const { email } = data;
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    function handleInputChange(event) {
        const { name, value } = event.target;
        return setData({ ...data, [name]: value });
    }
    console.log(data,'data')
    
    function sendData(event){
        event.preventDefault()
        recoverPassword(data)
        .then(res =>{
            console.log(res.status,'res 1')
            if(res.status){ // ? 
                console.log(PATHS.LOGINPAGE,'la ruta')
                navigate(PATHS.LOGINPAGE)
            }
            console.log(res,'el res')
        })
        
    }

    return (<div>
        <form onSubmit={sendData}>
            <lavel>Correo: </lavel>
            <input name='email' value={email} onChange={handleInputChange}/>
            <button type='submit'>Enviar</button>
        </form>
        
    </div>)

}  