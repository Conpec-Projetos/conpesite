import { social, address } from '@/constants'
import styles from './footer.module.css'
import LogoConpec from '@/assets/LogoConpec'
import LogoWhatsapp from '@/assets/LogoWhatsapp'
import MailIcon from '@/assets/MailIcon'
import LogoInstagram from '@/assets/LogoInstagram'
import PinIcon from '@/assets/PinIcon'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <LogoConpec className={styles.logoConpec} />
      <address className={styles.contato}>
        <h3>Contato</h3>
        <menu>
          <li>
            <Link target="_blank" href={`https://wa.me/${social.whatsappRaw}`}>
              <LogoWhatsapp aria-hidden="true" />
              {social.whatsapp}
            </Link>
          </li>
          <li>
            <Link target="_blank" href={`mailto:${social.email}`}>
              <MailIcon aria-hidden="true" />
              {social.email}
            </Link>
          </li>
          <li>
            <Link target="_blank" href={`https://instagram.com/${social.instagram}`}>
              <LogoInstagram aria-hidden="true" />
              {social.instagram}
            </Link>
          </li>
        </menu>
      </address>
      <address className={styles.endereco}>
        <h3>Endereço</h3>
        <div>
          <PinIcon aria-hidden="true" />
          <p>{address}</p>
        </div>
      </address>
      <nav>
        <h3>Páginas</h3>
        <menu>
          <li><Link href="/">Início</Link></li>
          <li><Link href="/sobre">Sobre nós</Link></li>
          <li><Link href="/servicos">Serviços</Link></li>
          <li><Link href="/portfolio">Portfólio</Link></li>
          <li><Link href="/contato">Fale conosco</Link></li>
        </menu>
      </nav>
      <small>© {new Date().getFullYear()} Conpec. Todos os direitos reservados.</small>
    </footer>
  )
}