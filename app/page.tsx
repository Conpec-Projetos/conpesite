import Image from 'next/image'
import imagemEpej from '@/assets/epej.jpg'

import style from './page.module.css'
import Button from '@/components/Button'
import ConpecIcon from '@/components/svg/ConpecIcon'

export default function Home() {
  return (
    <main className={style.main}>
      <section className={style.sectHero}>
        <div>
          <hgroup>
            <small>A Empresa Júnior de Computação da Unicamp</small>
            <h1>Tire suas ideias do papel com a <span>Conpec</span>.</h1>
          </hgroup>
          <p>
            Com as melhorias tecnologias disponíveis no mercado, nós damos vida à sua ideia e
            entregamos uma solução de sucesso para o seu negócio.
          </p>
          <div className={style.flexRow}>
            <Button href="/contato" theme="fill">Entre em contato</Button>
            <Button href="/portfolio" theme="outline">Ver projetos</Button>
          </div>
        </div>
        <ConpecIcon aria-hidden="true" />
      </section>
      <section className={style.sectSobre}>
        <Image
          src={imagemEpej}
          alt="Membros da Conpec estendendo a bandeira da empresa no evento EPEJ."
        />
        <div>
          <h2>O que é a <span>Conpec</span>?</h2>
          <p>
            Criada em 1991, a Conpec é a Empresa Júnior dos cursos de Computação da Unicamp,&nbsp;
            <b>os melhores do Brasil</b>.

            Somos uma software house focada no <b>sucesso dos nossos clientes</b>, entregando sempre
            a <b>melhor solução</b> para você.
          </p>
        </div>
      </section>
    </main>
  )
}
