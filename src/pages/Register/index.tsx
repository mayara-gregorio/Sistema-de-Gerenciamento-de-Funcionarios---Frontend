import { useState } from "react"
import { Button } from "../../components/Button"
import { type Usuario } from "../../types/Usuario"
import { useNavigate } from "react-router-dom"
import { authService } from "../../services/authService"

export function Register() {
    // usuário não é array
    const navigate = useNavigate()
    const [usuario, setUsuario] = useState<Usuario>({
        email: "",
        senha: ""
    })
    // useEffect não é necessário quando queremos apenas enviar dados

    async function registro() {
        try {
            const response = await authService.registro(usuario)
            console.log(response)
            navigate("/login", { replace: true })
        } catch (error) {
            console.error('Não foi possível criar usuário', error)
        }
    }

    return (
        <div>
            <h1>Crie sua conta</h1>
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
                <Button title="Cadastrar" onClick={registro} />
            </div>
        </div>
    )
}
