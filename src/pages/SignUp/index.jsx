import { useState } from 'react' 
import { Link } from 'react-router-dom'

import logo from '../../assets/medicamento.png'
import './signup.css'

function SignUp() {
  const [ nome, setNome ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')


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
          <h1>Crie sua conta</h1>
          <input type="text" placeholder='Digite seu Nome'value={nome} onChange={(e) => setNome(e.target.value)}/>
          <input type="text" placeholder='Digite seu email'value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder='Digite sua Senha'value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type='submit'>Cadastrar</button>
        </form>
        
        <Link to="/">Já tem uma conta? Entre</Link>
        
      </div>
    </div>
  )
}

export default SignUp

