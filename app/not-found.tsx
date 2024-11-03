import Button from '@/components/Button'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <main className={styles.notFound}>
      <hgroup>
        <h1>404</h1>
        <p>Página não encontrada</p>
      </hgroup>
      <Button theme="fill" href="/">Voltar para página inicial</Button>
    </main>
  )
}
