import { getWebMetadata } from '@/app/metadata'

import Button from '@/components/Button'
import styles from './not-found.module.css'

export const metadata = getWebMetadata({
  title: '404 — Página não encontrada',
})

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
