import styles from './portfolio.module.css'
import Image from 'next/image'
import logosClientes from '/app/assets/Logos.png'
import logoImunolab from '/app/assets/Imunolab.png'
import mockups from '/app/assets/Mockups.png'


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
            src={mockups}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt='Imagem Mockups em um Iphone das telas do aplicativo'
            layout='responsive'
            width={438}
            height={349}
          
          ></Image>
        </div>
      </div>
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
                <p className={styles.text}>Trabalhamos arduamente para entregar um produto de qualidade,
                  baseado em tecnologias de ponta. Conheça alguns de nossos projetos e entenda como 
                  ajudamos nossos clientes a tornar seus projetos realidade.</p>
          </div>
      </div>

      <div className={styles.mediaDiv}>
        <div className={`${styles.textDiv} ${styles.right}`}>
            <p className={styles.subtitle}>CONHEÇA OS</p>
                <h1 className={styles.titles}>NOSSOS CLIENTES</h1>
                <p className={styles.text}>Trabalhamos arduamente para entregar um produto de qualidade,
                  baseado em tecnologias de ponta. Conheça alguns de nossos projetos e entenda como 
                  ajudamos nossos clientes a tornar seus projetos realidade.</p>
        </div>
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
      </div>

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
                <p className={styles.text}>Trabalhamos arduamente para entregar um produto de qualidade,
                  baseado em tecnologias de ponta. Conheça alguns de nossos projetos e entenda como 
                  ajudamos nossos clientes a tornar seus projetos realidade.</p>
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