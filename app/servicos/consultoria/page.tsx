import Form from '@/components/Form'
import style from '../single.module.css'
import Button from '@/components/Button'
import Image from 'next/image'
import stockImage from '@/assets/consultoria_stock.png'
import resultImage from '@/assets/consultoria_servico.png'

export default function Consultoria() {
  return (
    <main>
      <section style={{ backgroundColor: '#050505' }} className={style.sectHero}>
        <div>
          <h1>Consultoria Técnica</h1>
          <p>Descubra as melhores tecnologias para o seu negócio!</p>
          <Button href="#form" theme="fill">Entre em contato</Button>
        </div>
        <Image src={stockImage} alt="Homem visualiza um gráfico na tela de um computador." priority />
      </section>
      <section className={style.sectDesc}>
        <Image src={resultImage} alt="Dois homens, usando a camisa da Conpec, discutem em frente à um computador." />
        <div>
          <p>
            Com a <strong>consultoria técnica Conpec</strong>, você terá um acompanhamento detalhado dos seus processos
            e irá descobrir como a tecnologia pode ser usada ao seu favor!
          </p>
          <p>
            Seja para otimizar programas muito lentos, organizar a sua empresa no novo meio digital,
            ou tirar dúvidas sobre o funcionamento do seu site e aplicativo, <em>pode contar conosco</em>!
          </p>
        </div>
      </section>
      <Form />
    </main>
  )
}
