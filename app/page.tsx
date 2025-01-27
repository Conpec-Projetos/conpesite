import Image from 'next/image'
import imagemEpej from '@/assets/epej.jpg'

import style from './page.module.css'
import Button from '@/components/Button'
import ConpecIcon from '@/components/svg/ConpecIcon'
import Link from 'next/link'
import ConsultoriaIcon from '@/components/svg/ConsultoriaIcon'
import ProtoIcon from '@/components/svg/ProtoIcon'
import DevIcon from '@/components/svg/DevIcon'
import Relato from '@/components/Relato'

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
            Com as melhores tecnologias disponíveis no mercado, nós damos vida à sua ideia e
            entregamos uma solução de sucesso para o seu negócio.
          </p>
          <div className={style.flexRow}>
            <Button href="/contato" theme="fill">Entre em contato</Button>
            <Button href="/portfolio" theme="outline">Ver projetos</Button>
          </div>
        </div>
        <ConpecIcon hasMask aria-hidden="true" />
      </section>
      <section className={style.sectServicos}>
        <hgroup>
          <small>Os melhores serviços do mercado para você e seu negócio</small>
          <h2>Temos Soluções.</h2>
        </hgroup>
        <menu>
          <li>
            <Link href="/servicos/consultoria">
              <div className={style.iconeServico} aria-hidden="true">
                <ConsultoriaIcon />
              </div>
              <div>
                <h3>Consultoria</h3>
                <p>
                  Impulsionamos seu negócio com nossa consultoria personalizada. Transforme suas
                  dificuldades em vantagens competitivas com as melhores tecnologias do mercado.
                </p>
              </div>
              <div>
                <h4>Ideal para negócios:</h4>
                <ul>
                  <li>Que buscam inovação</li>
                  <li>Que querem otimização</li>
                  <li>Que procuram resolver desafios</li>
                </ul>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/servicos/proto">
              <div className={style.iconeServico} aria-hidden="true">
                <ProtoIcon />
              </div>
              <div>
                <h3>Prototipação</h3>
                <p>
                  Transformamos sua ideia em realidade com nossos protótipos funcionais e atraentes.
                  Valide conceitos de forma eficiente antes de partirmos para a implementação final.
                </p>
              </div>
              <div>
                <h4>Ideal para negócios:</h4>
                <ul>
                  <li>Em ideação inicial</li>
                  <li>Que buscam transformação</li>
                  <li>Em processo de validação</li>
                </ul>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/servicos/dev">
              <div className={style.iconeServico} aria-hidden="true">
                <DevIcon />
              </div>
              <div>
                <h3>Desenvolvimento</h3>
                <p>
                  Elevamos seu projeto com nossas soluções personalizadas com tecnologias de ponta.
                  Ao fim, você terá um produto tecnicamente avançado, confiável e moderno.
                </p>
              </div>
              <div>
                <h4>Ideal para negócios:</h4>
                <ul>
                  <li>Com MVP</li>
                  <li>Que buscam aprimoração</li>
                  <li>Que querem expandir suas plataformas</li>
                </ul>
              </div>
            </Link>
          </li>
        </menu>
      </section>
      <section className={style.sectSobre}>
        <Image
          src={imagemEpej}
          alt="Membros da Conpec estendendo a bandeira da empresa no evento EPEJ."
          sizes="(max-width: 500px) 100vw, (max-width: 900px) 40vw, 45vw"
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
      <section className={style.sectDiferenciais}>
        <hgroup>
          <p className={style.pLowWidth}>Conheça nossos</p>
          <h2>Dife<wbr />ren<wbr />ciais<wbr /></h2>
          <p className={style.pHighWidth}>O que oferecemos para entregar a melhor solução para o seu negócio?</p>
        </hgroup>
        <div className={style.quatroCards}>
          <div>
            <h3>Somos flexíveis.</h3>
            <p>
              Ajudamos em todas as etapas do seu projeto, desde as ideias inicias até
              o lançamento do seu produto.
            </p>
          </div>
          <div>
            <h3>Equipe qualificada.</h3>
            <p>
              Somos jovens profissionais que possuem experiência com as melhores e mais
              modernas tecnologias do mercado.
            </p>
          </div>
          <div>
            <h3>Qualidade Unicamp.</h3>
            <p>
              Somos a Empresa Júnior do melhor curso de computação do país, e nossos
              serviços possuem a melhor qualidade.
            </p>
          </div>
          <div>
            <h3>Proximidade.</h3>
            <p>
              Você acompanha de perto nosso projeto, ajudando a moldar o produto
              de acordo com a sua ideia original.
            </p>
          </div>
        </div>
      </section>
      <section className={style.sectRelatos}>
        <div className={style.relatos}>
          <Relato cite="Murilo Martins, Finança Médica">
            Cotamos um trabalho para desenvolvimento de aplicativo e a Conpec foi a que apresentou a melhor proposta e cumpriu com a melhor solução.
            O aplicativo em si vem dando os resultado que a gente esperava e muito mais.
          </Relato>
          <Relato cite="Matheus Gomes, representante da Cargill">
            Minha experiência com o trabalho da Conpec foi excelente, não posso descrever de outra forma. Acredito que a Conpec não só disponibilizou as
            melhores pessoas para atender o desafio que tínhamos na Cargill, mas convocou uma equipe transparente e eficiente no que se dispunha a entregar.
          </Relato>
        </div>
        <div className={style.cta}>
          <hgroup>
            <p>Nós temos a solução para você</p>
            <h2>Veja como podemos <span>te ajudar</span>.</h2>
          </hgroup>
          <Button href="/contato" theme="fill">Agende um diagnóstico</Button>
        </div>
      </section>
    </main>
  )
}
