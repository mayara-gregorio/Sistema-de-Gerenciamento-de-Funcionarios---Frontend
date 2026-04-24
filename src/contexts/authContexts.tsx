//Ponto principal da autenticação pois expõe o usuário autenticado a tudo

import { createContext } from "react";
import { type Usuario } from "../types/Usuario";


interface AuthContextType{
    usuario: Usuario | null;
    token: string | null;
    carregando: boolean;
    isAuthenticated: boolean;
    //tem o método login, que recebe as propriedades email e senha e é uma Promise pq depende de uma chamada de api
    //void quer dizer que não haverá retorno
    login: (email: string, senha: string) => Promise<void>;
    logout: () => void

}

//criei o contexto
export const AuthContext = createContext<AuthContextType>({
    usuario: null,
    token: null,
    carregando: true,
    isAuthenticated: false,
    login: async () => {},
    logout: () => {}
})

//exportar o contexto com um provedor


