import type { MouseEventHandler, ReactNode } from 'react'

import styles from './button.module.css'
import Link from 'next/link'

interface BaseProps {
  children: ReactNode
  theme: 'fill' | 'outline' | 'tiny' | 'white'
}

interface LinkProps extends BaseProps {
  href: string
}

interface ButtonProps extends BaseProps {
  href?: never
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

type Props = LinkProps | ButtonProps

// Esse botão que pode ser usado tanto para links quanto como um `<button>` mesmo. Tudo está
// definido no TypeScript acima, que, na prática, constrói dois tipos diferentes de `Props`
// extendendo um objeto base, que tem elementos comuns à ambos, e então usa a união desses valores.
// Moral da história: tudo que não tem `href` é um `<button>`, e o `onClick` só pode ser utilizado
// em `<button>`. Não tem como mesclar as propriedades dos dois.
export default function Button(props: Props) {
  if (props.href === undefined) {
    return (
      <button
        className={`${styles.button} ${styles[props.theme]}`}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    )
  }
  return <Link className={`${styles.button} ${styles[props.theme]}`} href={props.href}>{props.children}</Link>
}
