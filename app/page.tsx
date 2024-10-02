import Image from 'next/image'
import imagemEpej from '@/assets/epej.jpg'

import style from './page.module.css'

export default function Home() {
  return (
    <main>
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
