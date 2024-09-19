import { social, address } from '@/constants'
import styles from './footer.module.css'
import LogoConpec from '@/assets/LogoConpec'
import LogoWhatsapp from '@/assets/LogoWhatsapp'
import MailIcon from '@/assets/MailIcon'
import LogoInstagram from '@/assets/LogoInstagram'
import PinIcon from '@/assets/PinIcon'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <LogoConpec className={styles.logoConpec} />
      <address className={styles.contato}>
        <h2>Contato</h2>
        <ul>
          <li>
            <a target="_blank" href={`https://wa.me/${social.whatsappRaw}`}>
              <LogoWhatsapp aria-hidden="true" />
              {social.whatsapp}
            </a>
          </li>
          <li>
            <a target="_blank" href={`mailto:${social.email}`}>
              <MailIcon aria-hidden="true" />
              {social.email}
            </a>
          </li>
          <li>
            <a target="_blank" href={`https://instagram.com/${social.instagram}`}>
              <LogoInstagram aria-hidden="true" />
              {social.instagram}
            </a>
          </li>
        </ul>
      </address>
      <address className={styles.endereco}>
        <h2>Endereço</h2>
        <div>
          <PinIcon aria-hidden="true" />
          <p>{address}</p>
        </div>
      </address>
      <nav>
        <h2>Páginas</h2>
        <ul>
          <li><a href="/">Início</a></li>
          <li><a href="/sobre">Sobre nós</a></li>
          <li><a href="/servicos">Serviços</a></li>
          <li><a href="/portfolio">Portfólio</a></li>
          <li><a href="/contato">Fale conosco</a></li>
        </ul>
      </nav>
      <small>© {new Date().getFullYear()} Conpec. Todos os direitos reservados.</small>
    </footer>
  )
}
