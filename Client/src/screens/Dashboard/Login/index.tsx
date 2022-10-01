import { Link } from 'react-router-dom'
import './styles.css'

export default function Login() {
  return (
    <div className="login-body">
      <div className="login-position">
        <div className="login-content">
          <form action="" method="post" >
            <h1>Login🌱</h1>
            <h3>Bem-vindo ao Login👋</h3>
            <p>Por favor, insira email e senha</p>
            <label>Email:</label>
            <input type="text" placeholder="Usuário" />
            <label>Senha:</label>
            <input type="password" placeholder="Senha" />
            <input type="submit" value="Entrar" />
            <p>Possui cadastro?</p>
            <Link to="/cadastro" className='text-green-600'>Cadastre-se</Link>
          </form>
        </div>
      </div>
    </div>
  )
}