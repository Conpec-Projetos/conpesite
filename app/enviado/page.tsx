import Button from "@/components/Button";
import style from './page.module.css'

export default async function Enviado({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const error = (await searchParams).error
  const message = error === undefined ? "Obrigado por entrar em contato!" : "Erro ao enviar o formulário"

  if (error !== undefined) console.log("Erro ao enviar formulário:", error)

  return (
    <main className={style.enviado}>
      <h1>{message}</h1>
      {error !== undefined && <p>{error}</p>}
      <Button href="/" theme="fill">Voltar para a página inicial</Button>
    </main>
  )
}
