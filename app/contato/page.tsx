import Form from '@/components/Form'
import { getWebMetadata } from '@/app/metadata'

export const metadata = getWebMetadata({
  title: 'Fale conosco',
  description: 'Gostou dos nossos serviços? Entre em contato com a equipe da Conpec!',
  url: '/contato/',
})

export default function Contato() {
  return <main><Form title="Gostou dos nossos serviços?" priority /></main>
}
