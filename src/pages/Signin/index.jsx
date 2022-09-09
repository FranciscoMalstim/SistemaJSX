import { useState } from 'react' 
import { Link } from 'react-router-dom'

import logo from '../../assets/medicamento.png'
import './signin.css'
function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  function handleSubmit(e){
    e.preventDefault();
    alert('Clicou')
  }

  return (
    <div className="container-center">
      <div className="login">
        <div className="logo-area">
          <img src={logo} alt="Logo Sistema"  />
        </div>

        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <input type="text" placeholder='Digite seu email'value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder='Digite sua Senha'value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type='submit'>Acessar</button>
        </form>
        
        <Link to="/register">Criar sua conta</Link>
        
      </div>
    </div>
  )
}

export default SignIn
