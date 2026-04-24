// CORREÇÃO: renomeei de useAuth.tsx para useAuth.ts.
// Mesmo motivo do authService: este arquivo não tem JSX,
// então a extensão correta é .ts. Pequeno detalhe, mas ajuda
// a manter o projeto organizado.

import { useContext } from "react";
import { AuthContext } from "../contexts/authContexts";

// exportamos o uso do nosso contexto
export function useAuth() {
    return useContext(AuthContext)
}
