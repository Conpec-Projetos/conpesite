import Form from '@/components/Form'
import style from '../single.module.css'
import Button from '@/components/Button'
import Image from 'next/image'
import stockImage from '@/assets/proto_stock.png'
import resultImage from '@/assets/proto_servico.png'
import { getWebMetadata } from '@/app/metadata'

export const metadata = getWebMetadata({
  title: 'Prototipação',
  url: '/servicos/proto/',
})

export default function Proto() {
  return (
    <main>
      <section className={style.sectHero}>
        <Image
          src={stockImage}
          alt=""
          priority
          placeholder="blur"
          sizes="60vw"
        />
        <div>
          <h1>Prototipação</h1>
          <p>Faça a sua ideia ganhar forma!</p>
          <Button href="#form" theme="fill">Entre em contato</Button>
        </div>
      </section>
      <section className={style.sectDesc}>
        <div>
          <p>
            A <strong>prototipação Conpec</strong> vai consolidar a sua ideia com a identidade da sua marca
            e a nossa experiência no design de interfaces.
          </p>
          <p>
            O resultado será uma cópia em alta fidelidade do seu produto, pronto para o desenvolvimento!
          </p>
          <Button href="/portfolio" theme="outline">Confira mais cases de sucesso</Button>
        </div>
        <Image
          src={resultImage}
          alt="Três smartphones mostram a prototipação de um aplicativo, feito pela Conpec."
          sizes="55vw"
        />
      </section>
      <Form title="Interessou-se pela prototipação?" />
    </main>
  )
}
