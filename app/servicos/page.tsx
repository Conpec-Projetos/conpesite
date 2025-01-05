import keyboardImg from '@/assets/keyboard.png'

import Button from '@/components/Button'
import style from './page.module.css'
import Image from 'next/image'

export default function Servicos() {
  return (
    <main>
      <section className={style.sectHero}>
        <div className={style.blackBg}></div>
        <Image src={keyboardImg} alt="" />
        <h1>Serviços em TI e Consultoria</h1>
        <p>
          Oferecemos consultoria técnica, prototipação e desenvolvimento personalizado para
          transformar ideias em soluções digitais de alto desempenho e impacto.
        </p>

        <Button href="#cta" theme="fill">Entre em contato</Button>
      </section>
    </main>
  )
}
