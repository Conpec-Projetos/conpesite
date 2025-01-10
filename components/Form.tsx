import NextForm from 'next/form'
import Image from 'next/image'
import { redirect } from 'next/navigation'

import style from './form.module.css'
import bgImage from '@/assets/forms_bg.jpg'
import Button from './Button'

async function sendSlack(formData: FormData) {
  const ideia = formData.get('ideia')?.toString().replaceAll('\n', '\n> ') // use blockquote for textarea
  const message = `
  *_Nova mensagem do Conpesite_*
  • *Nome*: ${formData.get('nome')}
  • *Telefone*: ${formData.get('tel')}
  • *Email*: ${formData.get('email')}
  • *Como conheceu*: ${formData.get('referrer')}
  • *Orçamento*: a partir de R$${formData.get('orçamento')},00
  • *Ideia*:
  > ${ideia}
`
  const response = await fetch('https://slack.com/api/chat.postMessage', {
    method: 'POST',
    body: JSON.stringify({
      channel: process.env.SLACK_CHANNEL,
      text: message,
    }),
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + process.env.SLACK_TOKEN },
  })

  const response_json = await response.json()

  if (!response_json.ok) {
    throw new Error('Slack: ' + response_json.error)
  }
}

async function handleForm(formData: FormData) {
  'use server'

  try {
    await sendSlack(formData)
  }
  catch (e) {
    if (e instanceof Error) redirect('/enviado?error=' + e.message)
  }

  redirect('/enviado')
}

export default function Form({ title }: { title: string }) {
  return (
    <section className={style.sectForm} id="form">
      <Image src={bgImage} alt="" />
      <div>
        <hgroup>
          <p>Entre em contato conosco</p>
          <h2>{title}</h2>
        </hgroup>
        <p>É só preencher as informações e entraremos em contato em breve para dar início ao seu projeto.</p>
      </div>
      <NextForm action={handleForm}>
        <label>
          Nome
          <input type="text" name="nome" placeholder="Seu nome" required />
        </label>

        <div>
          <label style={{ width: '12ch' }}>
            Telefone
            <input type="tel" name="tel" placeholder="(99) 99999-9999" />
          </label>

          <label style={{ flexGrow: 1 }}>
            Email
            <input type="email" name="email" placeholder="seu@email.com.br" required />
          </label>
        </div>

        <label>
          Como você nos conheceu?
          <select name="referrer" required>
            <option value="">Escolha uma opção</option>
            <option value="MEJ">Movimento Empresa Júnior</option>
            <option value="Indicação">Indicação de amigo</option>
            <option value="Social">Redes Sociais (Instagram, LinkedIn, etc.)</option>
            <option>Unicamp</option>
            <option>Evento</option>
            <option value="Google">Pesquisa no Google</option>
            <option>Outro</option>
          </select>
        </label>

        <label>
          Quanto você deseja investir no projeto?
          <select name="orçamento" required>
            <option value="">Informe seu orçamento</option>
            <option value="0">Até R$1.000,00</option>
            <option value="1000">Entre R$1.000,00 e R$3.000,00</option>
            <option value="3000">Entre R$3.000,00 e R$5.000,00</option>
            <option value="5000">Entre R$5.000,00 e R$10.000,00</option>
            <option value="10000">Acima de R$10.000,00</option>
          </select>
        </label>

        <label>
          Descreva a sua ideia
          <textarea
            name="ideia"
            placeholder="Fale um pouco sobre o que você deseja."
            rows={8}
            required
          />
        </label>

        <Button theme="fill" type="submit">Enviar</Button>
      </NextForm>
    </section>
  )
}
