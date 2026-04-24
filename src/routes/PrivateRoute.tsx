import type { ReactNode } from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";


export function PrivateRouter({children}: {children: ReactNode}){
    const {usuario, carregando} = useAuth()
    if (carregando) {
        return <div>Carregando...</div>
    }
    //usamos a autenticacação do userContext para verificar se nosso usuário existe, se existir, exibimos nossa página, senão, vai para o login
    return usuario ? <>{children}</> : <Navigate to="/login"/>
}