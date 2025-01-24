'use client'

import { useState, type ReactNode } from 'react'
import LogoConpec from './svg/LogoConpec'
import style from './header.module.css'
import Link from 'next/link'
import Button from './Button'
import { usePathname } from 'next/navigation'
import HamburguerMenu from './svg/HamburguerMenu'
import CloseMenu from './svg/CloseMenu'
import ConpecIcon from './svg/ConpecIcon'

function NavLink(props: { href: string, children: ReactNode }) {
  const pathname = usePathname()

  return (
    <Link href={props.href} className={pathname == props.href ? style.active : ''}>
      {props.children}
    </Link>
  )
}

export default function Header() {
  const [drawer, setDrawer] = useState(false) // necessário pra remover o drawer quando atualizar a página

  return (
    <header className={style.header}>
      <Link href="/" aria-label="Ir para página inicial">
        <LogoConpec className={style.wordmark} />
        <ConpecIcon className={style.icon} />
      </Link>
      <div>
        <nav>
          {/* leitores de tela não precisam do botão pra ouvir o menu */}
          <input
            type="checkbox"
            aria-hidden="true"
            id="hamburguer"
            checked={drawer}
            onChange={() => { setDrawer(!drawer) }}
          />
          <div id="navDrawer" className={style.navDrawer} onClick={() => { setDrawer(false) }}>
            <NavLink href="/">Início</NavLink>
            <NavLink href="/sobre/">Sobre nós</NavLink>
            <NavLink href="/servicos/">Serviços</NavLink>
            <NavLink href="/portfolio/">Portfólio</NavLink>
          </div>
          <Button href="/contato/" theme="tiny">Fale Conosco</Button>
          <label aria-label="" htmlFor="hamburguer">
            <HamburguerMenu className={style.hamburguer} />
            <CloseMenu className={style.close} />
          </label>
        </nav>
      </div>
    </header>
  )
}
