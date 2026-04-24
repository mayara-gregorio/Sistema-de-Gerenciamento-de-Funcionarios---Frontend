
// Registros e Logins são adicionados aqui
// aqui chamamos a api de login e registro

import { api } from "./api"
import type { Usuario } from "../types/Usuario"

export const authService = {
    async login(email: string, senha: string) {
        const response = await api.post("/auth/login", { email, senha })
        return response.data
    },

    async registro(usuario: Usuario) {
        const response = await api.post("/auth/registro", usuario)
        return response.data
    }
}
