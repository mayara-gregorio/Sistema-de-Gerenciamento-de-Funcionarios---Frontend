import { useEffect, useState } from "react"
import { type Tarefa } from "../../types/Tarefa"
import { api } from "../../services/api"

export function TarefaComponente() {
    const [tarefas, setTarefas] = useState<Tarefa[]>([])

    // resposta da requisição
    useEffect(() => {
        async function getTarefas() {
            try {
                const response = await api.get<Tarefa[]>("/tarefas")
                setTarefas(response.data)
            } catch (error) {
                console.error("Erro ao buscar tarefas:", error)
            }
        }

        getTarefas()
        // guardo a resposta na tarefa
    }, [])

    return (
        <div>
            {tarefas.map(item => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    )
}

export function Home() {
    return (
        <div>
            <h1>Bem vindos a Home</h1>
            <TarefaComponente />
        </div>
    )
}
