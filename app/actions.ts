'use server'

type FormResponse = { error?: string, ok?: boolean }

export async function handleForm(_prevState: FormResponse, formData: FormData): Promise<FormResponse> {
  'use server'

  try {
    await sendSlack(formData)
  }
  catch (e) {
    if (e instanceof Error) return { error: e.message, ok: false }
  }

  return { ok: true }
}

async function sendSlack(formData: FormData) {
  const ideia = formData.get('ideia')?.toString().replaceAll('\n', '\n> ') // use blockquote for textarea
  const message = `*_Nova mensagem do Conpesite_*
• *Nome*: ${formData.get('nome')}
• *Telefone*: ${formData.get('tel')}
• *Email*: ${formData.get('email')}
• *Como conheceu*: ${formData.get('referrer')}
• *Orçamento*: a partir de R$${formData.get('orçamento')},00
• *Ideia*:
> ${ideia}`

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
