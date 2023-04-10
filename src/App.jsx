import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Alert from './components/Alert'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [mensaje, setMensaje] = useState({
    mje:"",
    color: ""
  }
  ) ;

  return (
    <div className="App">
      <Login setMensaje={setMensaje}/>
      <Alert mensaje={mensaje}/>    
    </div>
  )
}

export default App
