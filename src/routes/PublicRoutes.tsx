import { useAuth } from "../hooks/useAuth";

import { Navigate, Outlet } from "react-router-dom";


export function PublicRouter(){
    const {isAuthenticated} = useAuth()
    //usamos a autenticacação do userContext para verificar se nosso usuário existe, se existir, exibimos nossa página, senão, vai para o login
    return isAuthenticated ? <Navigate to="/home" replace/> : <Outlet/>
}