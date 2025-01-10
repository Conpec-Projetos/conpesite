'use client'

import { useActionState, useEffect, useRef } from 'react'
import NextForm from 'next/form'
import Image from 'next/image'

import { handleForm } from '@/app/actions'
import style from './form.module.css'
import bgImage from '@/assets/forms_bg.jpg'
import Button from './Button'
import CloseMenu from './svg/CloseMenu'

export default function Form({ title }: { title: string }) {
  const [state, formAction, pending] = useActionState(handleForm, {})

  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (!pending && state.ok !== undefined) dialogRef.current?.show()
  }, [pending, state.ok])

  const formResponse = (
    <dialog
      ref={dialogRef}
      open={state.ok !== undefined}
      className={`${style.dialog} ${state.ok === true && style.ok}`}
      aria-live="assertive"
    >
      <p>{state?.error || 'Formulário enviado! Iremos entrar em contato em breve.'}</p>
      <form method="dialog">
        <button><CloseMenu /></button>
      </form>
    </dialog>
  )

  return (
    <>
      {formResponse}
      <section className={style.sectForm} id="form">
        <Image src={bgImage} alt="" />
        <div>
          <hgroup>
            <p>Entre em contato conosco</p>
            <h2>{title}</h2>
          </hgroup>
          <p>É só preencher as informações e entraremos em contato em breve para dar início ao seu projeto.</p>
        </div>
        <NextForm action={formAction}>
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

          <Button theme="fill" type="submit" disabled={pending}>Enviar</Button>
        </NextForm>
      </section>
    </>
  )
}
