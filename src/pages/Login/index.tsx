import { Button } from "../../components/Button"
import { useLogin } from "../../hooks/useLogin"

export function Login() {
    const { usuario, setUsuario, login } = useLogin()

    return (
        <div>
            <h1>Bem vindos ao Login</h1>
            <div>
                <input
                    type="email"
                    placeholder="Digite o seu email"
                    value={usuario.email}
                    onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Digite sua senha"
                    value={usuario.senha}
                    onChange={(e) => setUsuario({ ...usuario, senha: e.target.value })}
                />
                <Button title="Logar" onClick={login} />
            </div>
        </div>
    )
}
