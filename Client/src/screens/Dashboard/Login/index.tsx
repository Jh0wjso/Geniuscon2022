import { Link } from 'react-router-dom'
import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import './styles.css'

export default function Login() {
  return (
    <div className="login-body">
      <div className="login-position">
        <div className="login-content">
          <form action="" method="post">
            <h1>Login🌱</h1>
            <h3>Bem-vindo</h3>
            <br />
            <label>Email:</label>
            <input type="text" placeholder="Usuário" className="mb-2" />
            <label>Senha:</label>
            <input type="password" placeholder="Senha" />
            <button className="mt-8">Entrar</button>
            <div className="text-center">
              <div className="my-3">
                <Link to="/cadastro" className="text-green-600">
                  Esqueceu a senha?
                </Link>
              </div>

              <div className="redes-sociais grid grid-cols-2 gap-5">
                <button>
                  <FaFacebookF size={30} /> Facebook
                </button>
                <button>
                  <FaGoogle size={30} />
                  Google
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
