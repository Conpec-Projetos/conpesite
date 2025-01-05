import keyboardImg from '@/assets/keyboard.png'

import Button from '@/components/Button'
import style from './page.module.css'
import Image from 'next/image'
import LightbulbIcon from '@/components/svg/LightbulbIcon'
import StarIcon from '@/components/svg/StarIcon'
import ConsultoriaIcon from '@/components/svg/ConsultoriaIcon'
import ProtoIcon from '@/components/svg/ProtoIcon'
import DevIcon from '@/components/svg/DevIcon'

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
      <section className={style.sectPassos}>
        <h2>O que podemos fazer pelo <strong>seu negócio</strong>?</h2>
        <ol className={style.listaPassos}>
          <div className={style.hlinePassos}></div>
          <li className={style.passoComplementar}>
            Ideia
            <div className={style.icon}>
              <LightbulbIcon />
            </div>
          </li>
          <li>
            Estratégia
            <div className={style.icon}>
              <ConsultoriaIcon />
            </div>
          </li>
          <li>
            Visualização
            <div className={style.icon}>
              <ProtoIcon />
            </div>
          </li>
          <li>
            Concepção
            <div className={style.icon}>
              <DevIcon />
            </div>
          </li>
          <li className={style.passoComplementar}>
            Sucesso
            <div className={style.icon}>
              <StarIcon />
            </div>
          </li>
        </ol>
        <ol className={style.listaServicos}>
          <li>
            <hgroup>
              <p>Estratégia</p>
              <h3>Consultoria</h3>
            </hgroup>
            <ul>
              <li><strong>Orientação Completa</strong>: Suporte em todas as fases do projeto.</li>
              <li><strong>Escolha de Tecnologias</strong>: Identificação das melhores soluções tecnológicas para sua empresa.</li>
              <li><strong>Resolução de Desafios</strong>: Solução de problemas complexos de desenvolvimento.</li>
              <li><strong>Soluções Alinhadas</strong>: Garantia de que as soluções atendem às suas metas estratégicas.</li>
            </ul>
            <Button href="/servicos/consultoria" theme="white">Saiba Mais</Button>
          </li>
          <li>
            <hgroup>
              <p>Visualização</p>
              <h3>Prototipação</h3>
            </hgroup>
            <ul>
              <li><strong>Transformação de Ideias</strong>: Convertemos conceitos em modelos tangíveis.</li>
              <li><strong>Modelos Interativos</strong>: Criamos protótipos que permitem validação e feedback.</li>
              <li><strong>Iteração Rápida</strong>: Ajustamos rapidamente com base nas necessidades.</li>
              <li><strong>Atendimento às Expectativas</strong>: Garantimos que a solução final atenda às necessidades dos clientes.</li>
            </ul>
            <Button href="/servicos/proto" theme="white">Saiba Mais</Button>
          </li>
          <li>
            <hgroup>
              <p>Concepção</p>
              <h3>Desenvolvimento</h3>
            </hgroup>
            <ul>
              <li><strong>Identidade da Marca</strong>: Desenvolvemos soluções que destacam a marca do cliente.</li>
              <li><strong>Impulso ao Crescimento</strong>: Criamos ferramentas que fomentam o crescimento do negócio.</li>
              <li><strong>Soluções Eficientes e Escaláveis</strong>: Oferecemos tecnologia adaptada às necessidades específicas.</li>
              <li><strong>Objetivos Estratégicos</strong>: Alinhamos as soluções aos objetivos de negócios dos clientes.</li>
            </ul>
            <Button href="/servicos/dev" theme="white">Saiba Mais</Button>
          </li>
        </ol>
      </section>
    </main>
  )
}
