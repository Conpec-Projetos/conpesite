import Image from 'next/image'
import ImagemAlvorada from '@/assets/alvorada.jpg'

import style from './page.module.css'
import { mvv, coorde } from '@/constants'

function renderValor(valor: typeof mvv.valores[number], id: number): JSX.Element {
  return (
    <li key={id}>
      <Image src={valor.imagem} alt={valor.imagemAlt} />
      <div>
        <h3>{valor.titulo}</h3>
        <p>{valor.descricao}</p>
      </div>
    </li>
  )
}

function renderCoorde(membro: typeof coorde[number], id: number): JSX.Element {
  return (
    <li key={id}>
      <Image src={membro.imagem} alt="" />
      <div>
        <h3>{membro.nome}</h3>
        <p>{membro.cargo}</p>
      </div>
    </li>
  )
}

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
      <section>
        <ul className={style.sectValores}>
          <div><h2>Temos <span>valores</span>.</h2></div>
          {mvv.valores.map((valor, i) => renderValor(valor, i))}
        </ul>
      </section>
      <section className={style.sectCoorde}>
        <h2>Nossos líderes, junto com a <span>equipe Conpec</span>, estão comprometidos em tirar o seu projeto do papel.</h2>
        <ul>
          {coorde.map((membro, i) => renderCoorde(membro, i))}
        </ul>
      </section>
    </main>
  )
}
