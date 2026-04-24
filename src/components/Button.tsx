import type { ButtonHTMLAttributes } from "react"

// importar os styles padrão do button e juntar com nosso tipo
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string
}

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <button {...rest}>{title}</button>
    )
}
