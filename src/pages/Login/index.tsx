import { useState } from "react"
import { Button } from "../../components/Button"
import { type Usuario } from "../../types/Usuario"
import { api } from "../../services/api"

export function Login(){
    //usuário não é array
    const [usuario, setUsuario] = useState<Usuario>({
        email: "",
        senha: ""
    })

    //useEffect não é necessário quando queremos apenas enviar dados
    async function login(){
        try{
            const response = await api.post("/auth/login", usuario)
            console.log(response)
        }catch(error){
            console.error('Não foi possível logar', error)
        }
    }

    return(
        <div>
            <h1>Bem vindos ao Login</h1>  
            <div>
                <input type="email" placeholder="Digite o seu email" onChange={(e) => setUsuario({...usuario, email: e.target.value})}/>
                <input type="password" placeholder="Digite sua senha" onChange={(e) => setUsuario({...usuario, senha: e.target.value})}/>
                <Button title="Logar" onClick={login}/>
            </div>
        </div>
    )
}