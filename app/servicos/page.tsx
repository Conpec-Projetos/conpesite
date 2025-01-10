import keyboardImg from '@/assets/keyboard.png'

import Button from '@/components/Button'
import style from './page.module.css'
import Image from 'next/image'
import LightbulbIcon from '@/components/svg/LightbulbIcon'
import StarIcon from '@/components/svg/StarIcon'
import ConsultoriaIcon from '@/components/svg/ConsultoriaIcon'
import ProtoIcon from '@/components/svg/ProtoIcon'
import DevIcon from '@/components/svg/DevIcon'
import Form from '@/components/Form'

export default function Servicos() {
  return (
    <main>
      <section className={style.sectHero}>
        <div className={style.blackBg}></div>
        <Image src={keyboardImg} alt="" priority />
        <h1>Serviços em TI e Consultoria</h1>
        <p>
          Oferecemos consultoria técnica, prototipação e desenvolvimento personalizado para
          transformar ideias em soluções digitais de alto desempenho e impacto.
        </p>

        <Button href="#form" theme="fill">Entre em contato</Button>
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
      <section className={style.sectProcesso}>
        <h2>Nosso Processo de Criação</h2>
        <ol>
          <li>
            <h3>Reunião de extração</h3>
            <p>Aqui, iremos entender melhor qual o objetivo do seu projeto e como poderemos te ajudar!</p>
          </li>
          <li>
            <h3>Precificação</h3>
            <p>Iremos calcular o custo do seu projeto para apresentar uma proposta comercial.</p>
          </li>
          <li>
            <h3>Proposta</h3>
            <p>Estamos quase lá! Iremos apresentar o que pensamos para o seu projeto, baseado nas etapas anteriores.</p>
          </li>
          <li>
            <h3>Projeto</h3>
            <p>O momento chegou: iniciamos o nosso trabalho, juntamente com o seu sonho!</p>
          </li>
        </ol>
        {svgProcessoCriacao()}
      </section>
      <Form title="Gostou dos nossos serviços?" />
    </main>
  )
}

// ícones, linhas, e outras coisinhas bonitinhas da seção de processo de criação
function svgProcessoCriacao() {
  return (
    <svg aria-hidden="true" viewBox="0 0 907 532" fill="none" stroke="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M783.751 264.571L780.924 262.868L787.735 251.562L776.429 244.751L778.132 241.924L789.438 248.735L796.249 237.429L799.076 239.132L792.265 250.438L803.571 257.249L801.868 260.076L790.562 253.265L783.751 264.571Z" fill="currentColor" />
      <path d="M713.232 119.967L732.648 118.159V118.159C755.144 116.065 777.328 111.414 798.77 104.296L806.445 101.749M806.445 101.749L829.081 88.4047C835.507 84.6164 841.12 79.5935 845.595 73.6255L845.776 73.3842C849.739 68.0989 852.716 62.1411 854.561 55.7977L854.816 54.9222C856.574 48.88 857.177 42.5605 856.594 36.2948L856.217 32.2408C855.765 27.3886 854.221 22.7013 851.701 18.5303L851.216 17.727C848.223 12.7741 843.827 8.82136 838.585 6.3702V6.3702C833.881 4.17021 828.674 3.26425 823.503 3.74566L817.057 4.34567C810.763 4.93163 804.669 6.87125 799.194 10.0317L796.966 11.318C792.305 14.0082 788.364 17.7852 785.479 22.3272V22.3272C781.512 28.5708 779.732 35.9552 780.417 43.3205L781.306 52.8683L781.564 55.6386C782.54 66.1203 786.889 76.0029 793.958 83.8029V83.8029C795.649 85.6684 797.193 87.6623 798.575 89.7667L806.445 101.749ZM812 106.5L837.45 124.489C841.195 127.137 845.169 129.445 849.323 131.388L852.309 132.784C856.29 134.645 860.016 137.008 863.398 139.813L864.095 140.391C865.674 141.702 867.15 143.132 868.509 144.67L873.191 149.966C875.751 152.862 877.325 156.498 877.683 160.348V160.348C878.131 165.161 876.649 169.956 873.562 173.676L872.081 175.461C870.571 177.28 868.8 178.865 866.824 180.162L854.661 188.152L849.451 191.392C844.761 194.31 839.456 196.095 833.957 196.607V196.607C828.328 197.131 822.906 198.988 818.138 202.025L811.167 206.467C808.989 207.854 806.512 208.703 803.94 208.942V208.942C798.878 209.413 794.328 212.227 791.643 216.545L790.176 218.905C787.659 222.955 786.535 227.718 786.977 232.466L787.964 243.07" stroke="currentColor" strokeDasharray="5 5" />
      <path d="M50 347.5L41.4386 355.004C20.7878 373.106 7.05563 397.81 2.58371 424.905V424.905C1.52967 431.291 1 437.753 1 444.225V453.008C1 462.929 2.7021 472.777 6.03222 482.123L9.08919 490.702C13.8796 504.146 23.2031 515.502 35.4574 522.818V522.818C44.9748 528.5 55.8526 531.5 66.9371 531.5H72.0933C83.8856 531.5 95.5324 528.897 106.202 523.875L121.301 516.77C128.755 513.262 135.917 509.165 142.719 504.517L162.5 491L172.507 485.103C184.391 478.1 197.513 473.452 211.155 471.414V471.414C226.213 469.164 241.577 470.141 256.228 474.282L257 474.5" stroke="currentColor" strokeDasharray="5 5" />
      <path d="M349.437 395.253L345.626 389.315C343.229 385.579 341.663 381.37 341.035 376.975L340.994 376.693C340.085 370.329 341.239 363.842 344.285 358.181V358.181C346.903 353.316 350.81 349.266 355.578 346.475L359.056 344.439C364.061 341.509 369.591 339.587 375.334 338.782L379.154 338.246C386.106 337.271 393.172 337.447 400.067 338.767L407.665 340.222C413.95 341.426 420 343.635 425.582 346.764L429.207 348.796C434.885 351.98 439.745 356.442 443.4 361.829V361.829C447.056 367.216 451.915 371.678 457.594 374.861L462.036 377.352C467.991 380.69 474.444 383.046 481.148 384.33L485.893 385.238C492.304 386.466 498.877 386.587 505.328 385.596L508.4 385.124C515.484 384.036 522.2 381.253 527.978 377.012V377.012C532.345 373.806 536.091 369.829 539.03 365.278L541.271 361.806C545.936 354.582 549.166 346.527 550.783 338.081L551.438 334.663L552.362 329.837C553.933 321.632 552.061 313.142 547.185 306.358V306.358L538.959 297.537C537.125 295.57 535.152 293.736 533.056 292.05V292.05C525.854 286.255 517.34 282.316 508.261 280.577L505.883 280.122L491.15 277.301L467.578 272.787V272.787C458.55 271.058 449.235 271.571 440.45 274.28L436.515 275.493L435.086 275.81C420.596 279.027 405.601 279.246 391.023 276.454V276.454L387.505 275.78C377.843 273.93 368.674 270.084 360.585 264.487V264.487C355.894 261.241 351.614 257.44 347.837 253.166L344.318 249.183L343.727 248.563C336.348 240.82 331.217 231.213 328.886 220.774V220.774V220.774C326.415 210.911 326.126 200.628 328.038 190.641L328.426 188.614C328.583 187.795 329.498 183.015 331.906 170.444C332.455 167.576 333.21 164.832 334.083 162.263C338.464 149.363 349.124 140.1 360.127 132.067V132.067L380.416 119.154C380.417 119.153 380.418 119.152 380.419 119.15V119.15" stroke="currentColor" strokeDasharray="5 5" />
      <path d="M72.7502 482.5C71.9863 482.5 71.337 482.233 70.8022 481.698C70.2675 481.163 70.0002 480.514 70.0002 479.75C70.0002 478.986 70.2675 478.337 70.8022 477.802C71.337 477.267 71.9863 477 72.7502 477C73.514 477 74.1634 477.267 74.6981 477.802C75.2328 478.337 75.5002 478.986 75.5002 479.75C75.5002 480.514 75.2328 481.163 74.6981 481.698C74.1634 482.233 73.514 482.5 72.7502 482.5ZM55.3335 484.333C52.2779 484.333 49.6807 483.974 47.5418 483.256C45.4029 482.538 44.3335 481.675 44.3335 480.667C44.3335 479.964 44.8377 479.338 45.846 478.788C46.8543 478.238 48.1835 477.794 49.8335 477.458V480.667H53.5002V447.667L68.1668 454.817L57.1668 460.5V477.092C59.7946 477.244 61.9793 477.649 63.721 478.306C65.4627 478.963 66.3335 479.75 66.3335 480.667C66.3335 481.675 65.264 482.538 63.1252 483.256C60.9863 483.974 58.389 484.333 55.3335 484.333Z" fill="currentColor" />
      <path d="M898.75 109.5C897.986 109.5 897.337 109.233 896.802 108.698C896.268 108.163 896 107.514 896 106.75C896 105.986 896.268 105.337 896.802 104.802C897.337 104.267 897.986 104 898.75 104C899.514 104 900.163 104.267 900.698 104.802C901.233 105.337 901.5 105.986 901.5 106.75C901.5 107.514 901.233 108.163 900.698 108.698C900.163 109.233 899.514 109.5 898.75 109.5ZM881.333 111.333C878.278 111.333 875.681 110.974 873.542 110.256C871.403 109.538 870.333 108.675 870.333 107.667C870.333 106.964 870.838 106.338 871.846 105.788C872.854 105.238 874.183 104.794 875.833 104.458V107.667H879.5V74.6667L894.167 81.8167L883.167 87.5V104.092C885.795 104.244 887.979 104.649 889.721 105.306C891.463 105.963 892.333 106.75 892.333 107.667C892.333 108.675 891.264 109.538 889.125 110.256C886.986 110.974 884.389 111.333 881.333 111.333Z" fill="currentColor" />
      <path d="M474.25 343.5C475.014 343.5 475.663 343.233 476.198 342.698C476.732 342.163 477 341.514 477 340.75C477 339.986 476.732 339.337 476.198 338.802C475.663 338.267 475.014 338 474.25 338C473.486 338 472.837 338.267 472.302 338.802C471.767 339.337 471.5 339.986 471.5 340.75C471.5 341.514 471.767 342.163 472.302 342.698C472.837 343.233 473.486 343.5 474.25 343.5ZM491.667 345.333C494.722 345.333 497.319 344.974 499.458 344.256C501.597 343.538 502.667 342.675 502.667 341.667C502.667 340.964 502.162 340.337 501.154 339.787C500.146 339.237 498.817 338.794 497.167 338.458V341.667H493.5V308.667L478.833 315.817L489.833 321.5V338.092C487.205 338.244 485.021 338.649 483.279 339.306C481.537 339.963 480.667 340.75 480.667 341.667C480.667 342.675 481.736 343.538 483.875 344.256C486.014 344.974 488.611 345.333 491.667 345.333Z" fill="currentColor" />
    </svg>
  )
}
