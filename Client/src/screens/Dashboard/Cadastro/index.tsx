import './styles.css'

export default function cadastro() {
  return (
    <div className="cadastro-body">
      <div className="cadastro-position">
        <div className="cadastro-content">
          <form action="" method="post">
            <h1>Cadastro</h1>
            <h3>Bem-vindo ao Cadastro👋</h3>
            <p>Por favor, insira as informações pedidas.</p>
            <label>CPF:</label>
            <input type="text" name="cpf" placeholder="CPF" />
            <label>Email:</label>
            <input type="text" name="email" placeholder="Usuário" />
            <label>Senha:</label>
            <input type="password" name="senha" placeholder="Senha" />
            <label>Confirmar a senha</label>
            <input
              type="password"
              name="confirmarSenha"
              placeholder="Confirmar a senha"
            />
            <input type="submit" value="Cadastrar" />
          </form>
        </div>
      </div>
    </div>
  )
}
