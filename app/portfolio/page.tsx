import styles from './portfolio.module.css'
import Image from 'next/image'
import LogosClientes from './svg/Logos'


import logoImunolab from './assets/Imunolab.png'
import LogoTaikon from './svg/Taikon'
import LogoLymphoderma from './svg/LymphodermaLogo'
import LogoCookworking from './svg/CookworkingLogo'

import pngAgility from './assets/Agility_Brasil.png'
import pngBanespa from './assets/Banespa.png'
import pngCookworking from './assets/CookWorking.png'
import pngDestinos from './assets/Destinos_Inteligentes.png'
import pngFeec from './assets/Feec.png'
import pngGriaule from './assets/Griaule.png'
import pngInova from './assets/Inova.png'
import pngNano from './assets/Nano_Cell.png'
import pngPeG from './assets/P&G.png'
import pngSocialmentes from './assets/Social_Mentes.png'
import pngTaikon from './assets/Taikon.png'
import mockupsImunolab from './assets/MockupsImunolab.png'
import MockupsCW from './svg/CookWorkingMockups'
import MockupsLympho from './svg/LymphodermaMockups'
import mockupsTaikon from './assets/MockupsTaikon.png'



export default function Portfolio() {
  const bannerLogos = [
    pngAgility,
    pngBanespa,
    pngCookworking,
    pngDestinos,
    pngFeec,
    pngGriaule,
    pngInova,
    pngNano,
    pngPeG,
    pngSocialmentes,
    pngTaikon
  ]

  return (
    <>
      {/* Header Nossos Clientes */}
      <div className={styles.mediaDiv}>
        <div className={styles.imageDiv}>
          {/* FAZER A IMAGEM IR PRA CIMA QUANDO MIN-WIDTH */}
          <LogosClientes className={styles.clientLogos}/>
        </div>
          
          <div className={`${styles.textDiv} ${styles.right}`}>
            <p className={styles.subtitle}>CONHEÇA OS</p>
                <h1 className={styles.titles}>NOSSOS CLIENTES</h1>
                <p className={`${styles.text} ${styles.head}`}>Trabalhamos arduamente para entregar um produto de qualidade,
                  baseado em tecnologias de ponta. Conheça alguns de nossos projetos e entenda como 
                  ajudamos nossos clientes a tornar seus projetos realidade.</p>
          </div>
      </div>


      {/* Imunolab */}
      <div className={styles.mediaDiv}>
        <div className={styles.textDiv}>
          <div className={styles.rowContainerDiv}>
            <div className={styles.categoryDiv}>
              Prototipação
            </div>
            <div className={styles.categoryDiv}>
              Desenvolvimento
            </div>  
          </div>
          <div className={styles.rowContainerDiv}>
            <div className={styles.test}>
              <Image
              src={logoImunolab}
              alt='Logo da empresa Imunolab'
              width={55}
              ></Image>  
            </div>
            
            <div>
              <h1 className={styles.titles}>IMUNOLAB</h1>
            </div>
          </div>
            
          <p className={`${styles.text} ${styles.body}`}>Como parte de uma pesquisa <b>FISEX—Unicamp</b>,
            especialistas contrataram a <b>Conpec </b> para a prototipação e
            desenvolvimento de um website e aplicativo que ajude no
            acompanhamento físico de atletas.</p>

        </div>
        <div className={`${styles.imageDiv} ${styles.halfcutImage} `}>
          <Image
            src={mockupsImunolab}
            alt='Imagem mockupsImunolab em um Iphone das telas do aplicativo'
            layout='responsive'
            width={438}
            height={349}
          
          ></Image>
        </div>
      </div>

      {/* CookWorking */}
      <div className={styles.mediaDiv}>
        <div className={styles.imageDiv}>
          {/* FAZER A IMAGEM IR PRA CIMA QUANDO MIN-WIDTH */}
          <MockupsCW/>
        </div>
          
        <div className={styles.textDiv}>
          <div className={styles.rowContainerDiv}>
            <div className={styles.categoryDiv}>
              Prototipação
            </div>
            <div className={styles.categoryDiv}>
              Desenvolvimento
            </div>  
          </div>
          <div className={styles.rowContainerDiv}>
            <LogoCookworking/>
          </div>
            
          <p className={`${styles.text} ${styles.body}`}>Para o CookWorking,
            a Conpec prototipou e desenvolveu um aplicativo de entregas
            recorrentes, entregando uma refeição personalizada todos
            os dias.</p>

        </div>
      </div>

      {/* Taikon */}
      <div className={styles.mediaDiv}>
      <div className={styles.textDiv}>
          <div className={styles.rowContainerDiv}>
            <div className={styles.categoryDiv}>
              Prototipação
            </div>
            <div className={styles.categoryDiv}>
              Desenvolvimento
            </div>  
          </div>
          <div className={styles.rowContainerDiv}>
            <LogoTaikon/>
          </div>
            
          <p className={`${styles.text} ${styles.body}`}>A Taikon atua na
            fabricação de alarmes e placas eletrônicas, e está trabalhando
            com a Conpec para desenvolver uma plataforma que facilite o
            controle remoto de painéis de mensagem variável (PMV).</p>

        </div>
        <div className={styles.imageDiv}>
          {/* FAZER A IMAGEM IR PRA CIMA QUANDO MIN-WIDTH */}
          <Image
            src={mockupsTaikon} 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt='Imagem com os logos dos clientes passados da Conpec'
            layout='responsive'
            >
            
          </Image>
        </div>
      </div>


      {/* Lymphoderma */}
    <div className={styles.mediaDiv}>
      <div className={styles.imageDiv}>
          {/* FAZER A IMAGEM IR PRA CIMA QUANDO MIN-WIDTH */}
          <MockupsLympho/>
      </div>
      <div className={styles.textDiv}>
          <div className={styles.rowContainerDiv}>
            <div className={styles.categoryDiv}>
              Prototipação
            </div>
            <div className={styles.categoryDiv}>
              Desenvolvimento
            </div>  
          </div>
          <div className={styles.rowContainerDiv}>
            <div>
              <LogoLymphoderma/> 
            </div>
            
            <div>
              <h1 className={styles.titles}>Lymphoderma</h1>
            </div>
          </div>
            
          <p className={`${styles.text} ${styles.body}`}>Junto ao
            Lymphoderma, a Conpec prototipou e desenvolveu um
            website e aplicativo móvel que auxilia profissionais
            de saúde no diagnóstico do linfoma cutâneo — um tipo
            de câncer.</p>

      </div>
      
    </div>

      <div className={styles.banner}>
        <div className={styles.logoContainer}>
          {bannerLogos.map((logo, index) => (
            <Image key={index} src={logo} alt={'Logo'} className={styles.logo} width={50} height={25} />
          ))}
        </div>
        <div className={styles.logoContainer}>
          {bannerLogos.map((logo, index) => (
            <Image key={index} src={logo} alt={'Logo'} className={styles.logo} width={50} height={25} />
          ))}
        </div>
      </div>
      
      
    </>

  )
}