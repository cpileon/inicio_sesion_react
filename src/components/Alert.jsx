import Alerta from 'react-bootstrap/Alert';


const Alert = ({mensaje}) => {
    const {mje, color} = mensaje;
    return (
        <Alerta variant={color} className='mt-3'>{mje}</Alerta>
    )
}
export default Alert;