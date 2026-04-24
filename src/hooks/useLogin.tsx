import { useState } from "react"
import { type Usuario } from "../types/Usuario"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./useAuth"

// toda a lógica é dentro de service
// o Login tem de chamar o login do authProvider pq lá está sendo feita a lógica de autenticação,
// e o authProvider tem de chamar o login do authService pq lá está sendo feita a chamada da api
export function useLogin() {
    const navigate = useNavigate()

    // CORREÇÃO: antes o arquivo importava useContext e AuthContext diretamente
    // e fazia "const { login } = useContext(AuthContext)".
    // Isso funciona, mas você JÁ TEM um hook chamado useAuth() criado justamente
    // para encapsular essa chamada. Usar useAuth() aqui:
    //   1) deixa o código mais limpo (uma linha só);
    //   2) mantém o padrão DRY (Don't Repeat Yourself);
    //   3) se no futuro você mudar algo no useAuth (ex.: validar se o contexto
    //      existe), todos os lugares se beneficiam automaticamente.
    const { login } = useAuth()

    // usuário não é array
    const [usuario, setUsuario] = useState<Usuario>({
        email: "",
        senha: ""
    })

    // useEffect não é necessário quando queremos apenas enviar dados
    // chamamos a lógica de login que está no AuthProvider e seguimos de acordo com a resposta
    async function handleLogin() {
        try {
            await login(usuario.email, usuario.senha)
            navigate("/home")
        } catch (error) {
            console.error('Não foi possível logar', error)
        }
    }

    return (
        { usuario, setUsuario, login: handleLogin }
    )
}
