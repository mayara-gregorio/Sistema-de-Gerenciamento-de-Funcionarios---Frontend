import { useEffect, useState } from "react";
import { type ReactNode } from "react";
import { type Usuario } from "../types/Usuario";
import { AuthContext } from "../contexts/authContexts";
import { authService } from "../services/authService";

export function AuthProvider({ children }: { children: ReactNode }) {
    const [usuario, setUsuario] = useState<Usuario | null>(null)
    const [token, setToken] = useState<string | null>(null)
    const [carregando, setCarregando] = useState(true)
    const isAuthenticated = !!usuario

    // ao ser montado, pega o token do localStorage
    useEffect(() => {
        const tokenSalvo = localStorage.getItem("token");
        const usuarioData = localStorage.getItem("usuario")

        if (tokenSalvo && usuarioData) {
            setUsuario(JSON.parse(usuarioData))
            setToken(tokenSalvo)
        }
        setCarregando(false)
    }, [])

    async function login(email: string, senha: string) {
        const response = await authService.login(email, senha)
        const { usuario: usuarioLogado, token: tokenRecebido } = response

        setUsuario(usuarioLogado)
        setToken(tokenRecebido)
        localStorage.setItem("token", tokenRecebido)
        localStorage.setItem("usuario", JSON.stringify(usuarioLogado))
    }

    async function logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("usuario")
        setUsuario(null)
        setToken(null)
    }

    return (
        <AuthContext.Provider value={{ usuario, token, carregando, isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
