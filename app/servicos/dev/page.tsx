import Form from '@/components/Form'
import style from '../single.module.css'
import Button from '@/components/Button'
import Image from 'next/image'
import stockImage from '@/assets/dev_stock.png'
import resultImage from '@/assets/dev_servico.jpg'

export default function Consultoria() {
  return (
    <main>
      <section style={{ backgroundColor: '#050501' }} className={style.sectHero}>
        <div>
          <h1>Desenvolvimento</h1>
          <p>Veja sua ideia se tornar realidade!</p>
          <Button href="#form" theme="fill">Entre em contato</Button>
        </div>
        <Image src={stockImage} alt="Tela de um computador mostra linhas de código." priority />
      </section>
      <section className={style.sectDesc}>
        <Image src={resultImage} alt="Dois homens, usando a camisa da Conpec, discutem em frente à um computador." />
        <div>
          <p>
            Com o <strong>desenvolvimento Conpec</strong>, a sua ideia vai finalmente se tornar um produto real!
          </p>
          <p>
            Nós nos preocupamos em desenvolver, testar e publicar seus websites e aplicativos,
            enquanto você se preocupa em operar o seu negócio.
          </p>
          <Button href="/portfolio" theme="outline">Confira mais cases de sucesso</Button>
        </div>
      </section>
      <Form title="Interessou-se pelo desenvolvimento?" />
    </main>
  )
}
