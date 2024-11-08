import Image from 'next/image'
import ImagemAlvorada from '@/assets/alvorada.jpg'

import style from './page.module.css'
import { mvv } from '@/constants'

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
      <section className={style.sectMVV}>
        <div>
          <h2>Temos um <strong>propósito</strong>.</h2>
          <p>{mvv.missao}</p>
        </div>
        <div>
          <h2>Temos uma <strong>visão do futuro</strong>.</h2>
          <p>{mvv.visao}</p>
        </div>
      </section>
    </main>
  )
}
