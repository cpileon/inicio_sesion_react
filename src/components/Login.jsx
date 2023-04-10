import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


const Login = ({setMensaje}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const checkStatus = (e) => {
        e.preventDefault();
        if(email == "cpino@gmail.com" && password == "desafioreact2"){
            setMensaje({
                mje: "Inicio de sesión correcto!",
                color: "success"
                    })
        } else {
            setMensaje({
                mje: "Error en el inicio de sesión",
                color: "danger"
            })
        }
        
        setEmail('');
        setPassword('');
    }

    return(
        <form onSubmit={checkStatus}>
            <Container className='formulario p-5 bg-light rounded'>
                <Form.Text><h3 className='mb-4'>Formulario Inicio de Sesión</h3></Form.Text>
            <Row>            
                <Form.Label htmlFor="email">E-mail: </Form.Label>
            </Row>
            <Row>
                <Form.Control id="email" type="email" placeholder="correo@ejemplo.com" value={email} 
                onChange={(e) => setEmail(e.target.value)}/>
            </Row>
            <Row>
                <Form.Label className='mt-4' htmlFor="password">Password: </Form.Label>
            </Row>
            <Row>
                <Form.Control id="password" type="text" placeholder="******" value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </Row>
            <Row>
                    <Button variant='primary' className="mt-4" type="submit" disabled={!email.trim() || !password.trim()}>Iniciar sesión</Button>
            </Row>
        </Container>
      </form>


    )
}

    
    export default Login;