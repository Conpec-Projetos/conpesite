import type { ReactNode } from 'react'

import Aspas from '@/components/svg/Aspas'
import styles from './relato.module.css'

export default function Relato({ cite, children }: { cite: string, children: ReactNode }) {
  return (
    <div className={styles.relato}>
      <Aspas aria-hidden="true" />
      <blockquote>{children}</blockquote>
      <cite>{cite}</cite>
    </div>
  )
}
