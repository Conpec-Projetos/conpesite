'use server'

const referrerOpts = ['MEJ', 'Indicação', 'Social', 'Unicamp', 'Evento', 'Google', 'Outro'] as const
const budgetOpts = ['0', '1000', '3000', '5000', '10000'] as const
interface Form {
  name: string
  tel?: string
  email: string
  referrer: typeof referrerOpts[number]
  budget: typeof budgetOpts[number]
  description: string
  timestamp: number
}

interface FormResponse { error?: string, ok?: boolean }

function parseStr(val: FormDataEntryValue | null): string {
  if (typeof val === 'string')
    return val

  if (val === null)
    throw new TypeError('campo não preenchido')
  else
    throw new TypeError('campo inválido')
}

function parseNumber(val: FormDataEntryValue | null): number {
  const n = Number(val)
  if (isNaN(n))
    throw new TypeError('campo inválido')

  return n
}

function parseUnion<T extends string>(union: readonly T[], val: FormDataEntryValue | null): T {
  const isOk = (str: string): str is T => union.some((v) => v === str)

  const str = parseStr(val)

  if (isOk(str))
    return str

  throw TypeError('campo inválido')
}

function parseForm(formData: FormData): Form {
  return {
    name: parseStr(formData.get('nome')),
    tel: parseStr(formData.get('tel') ?? ''),
    email: parseStr(formData.get('email')),
    referrer: parseUnion(referrerOpts, formData.get('referrer')),
    budget: parseUnion(budgetOpts, formData.get('orçamento')),
    description: parseStr(formData.get('ideia')),
    timestamp: parseNumber(formData.get('timestamp')),
  }
}

export async function handleForm(_prevState: FormResponse, formData: FormData): Promise<FormResponse> {
  'use server'

  try {
    const form = parseForm(formData)

    // se o usuário levou menos de três segundos para preencher o formulário, é um bot. ofuscando as
    // mensagens de erro pra evitar que passem por cima tão fácil.
    if (Date.now() - form.timestamp < 3000) {
      return { ok: false, error: 'Erro B2: contate o admnistrador' } // usuário foi muito rápido
    }

    await sendSlack(form)
  }
  catch (e) {
    if (e instanceof Error) return { error: "Erro: " + e.message, ok: false }
  }

  return { ok: true }
}

async function sendSlack(form: Form) {
  const ideia = form.description.replaceAll('\n', '\n> ') // use blockquote for textarea
  const message = `*_Nova mensagem do Conpesite_*
• *Nome*: ${form.name}
• *Telefone*: ${form.tel ?? 'N/A'}
• *Email*: ${form.email}
• *Como conheceu*: ${form.referrer}
• *Orçamento*: a partir de R$${form.budget},00
• *Ideia*:
> ${ideia}`

  const response = await fetch('https://slack.com/api/chat.postMessage', {
    method: 'POST',
    body: JSON.stringify({
      channel: process.env.SLACK_CHANNEL,
      text: message,
    }),
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + (process.env.SLACK_TOKEN ?? '') },
  })

  const response_json = await response.json() as { ok: boolean, error: string }

  if (!response_json.ok) {
    throw new Error('Slack: ' + response_json.error)
  }
}
