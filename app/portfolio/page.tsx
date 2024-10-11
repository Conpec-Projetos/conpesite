import styles from './portfolio.module.css'
import Image from 'next/image'
import logosClientes from '/app/assets/Logos.png'

export default function Portfolio() {
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
                <p className={styles.text}>Trabalhamos arduamente para entregar um produto de qualidade,
                  baseado em tecnologias de ponta. Conheça alguns de nossos projetos e entenda como 
                  ajudamos nossos clientes a tornar seus projetos realidade.</p>
          </div>
      </div>
      <div className={styles.mediaDiv}>
        <div className={styles.textDiv}>
          <h1 className={styles.titles}>IMUNOLAB</h1>
          <p className={styles.text}>Trabalhamos arduamente para entregar um produto de qualidade,
            baseado em tecnologias de ponta. Conheça alguns de nossos projetos e entenda como 
            ajudamos nossos clientes a tornar seus projetos realidade.</p>

        </div>
        <div className={styles.imageDiv}>
          <Image
            src={logosClientes}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt='Imagem com os logos dos clientes passados da Conpec'
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
      
      
    </>

  )
}