import styles from './portfolio.module.css'
import Image from 'next/image'
import logosClientes from '/app/assets/Logos.png'

import logoImunolab from '/app/assets/Imunolab.png'
import mockupsImunolab from '/app/assets/MockupsImunolab.png'
import mockupsCW from '/app/assets/MockupCookWorking.png'
import mockupsLympho from '/app/assets/MockupsLympho.png'
import mockupsTaikon from '/app/assets/MockupsTaikon.png'



export default function Portfolio() {
  const bannerLogos = [
    '/app/assets/Agility_Brasil.png',
    '/app/assets/Banespa.png',
    '/app/assets/CookWorking.png',
    '/app/assets/Destinos_Inteligentes.png',
    '/app/assets/Feec.png',
    '/app/assets/Griaule.png',
    '/app/assets/Inova.png',
    '/app/assets/Nano_Cell.png',
    '/app/assets/P&G.png',
    '/app/assets/Social_Mentes.png',
    '/app/assets/Taikon.png'
  ]

  return (
    <>
      {/* Header Nossos Clientes */}
      <div className={styles.mediaDiv}>
        <div className={styles.imageDiv}>
          {/* FAZER A IMAGEM IR PRA CIMA QUANDO MIN-WIDTH */}
          <Image
            src={logosClientes} 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt='Imagem com os logos dos clientes passados da Conpec'
            layout='responsive'
            width={438}
            height={349}
            >
            
          </Image>
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
            <div>
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
        <div className={styles.imageDiv}>
          <Image
            src={mockupsImunolab}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
          <Image
            src={mockupsCW} 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt='Imagem com os logos dos clientes passados da Conpec'
            layout='responsive'
            width={438}
            height={349}
            >
            
          </Image>
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
              <Image
              src={logoImunolab}
              alt='Logo da empresa Imunolab'
              width={55}
              ></Image>  
            </div>
            
            <div>
              <h1 className={styles.titles}>CookWorking</h1>
            </div>
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
            <div>
              <Image
              src={logoImunolab}
              alt='Logo da empresa Imunolab'
              width={55}
              ></Image>  
            </div>
            
            <div>
              <h1 className={styles.titles}>Taikon</h1>
            </div>
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
            width={438}
            height={349}
            >
            
          </Image>
        </div>
      </div>


      {/* Lymphoderma */}
      <div className={styles.mediaDiv}>
        <div className={styles.imageDiv}>
          {/* FAZER A IMAGEM IR PRA CIMA QUANDO MIN-WIDTH */}
          <Image
            src={logosClientes} 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt='Imagem com os logos dos clientes passados da Conpec'
            layout='responsive'
            width={438}
            height={349}
            >
            
          </Image>
        </div>
          
          <div className={`${styles.textDiv} ${styles.right}`}>
            <p className={styles.subtitle}>CONHEÇA OS</p>
                <h1 className={styles.titles}>NOSSOS CLIENTES</h1>
                <p className={styles.text}>Junto ao Lymphoderma, a Conpec
                  prototipou e desenvolveu um website e aplicativo móvel que
                  auxilia profissionais de saúde no diagnóstico do linfoma
                  cutâneo — um tipo de câncer.</p>
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