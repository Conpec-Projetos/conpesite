import Image from 'next/image'
import ImagemAlvorada from '@/assets/alvorada.jpg'

import style from './page.module.css'

export default function Sobre() {
  return (
    <main>
      <section className={style.sectHero}>
        <div>
          <h1>Nós somos a <span>Conpec</span>.</h1>
          <p>
            A primeira Empresa Júnior de Computação do Brasil, na Universidade Estadual de Campinas —
            desde 1991 entregando os melhores projetos para nossos clientes.
          </p>
        </div>
        <Image src={ImagemAlvorada} alt="Membros da Conpec posam para foto no evento regional Alvorada." />
      </section>
    </main>
  )
}
