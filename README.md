# Conpesite

O protótipo está no [Figma](https://www.figma.com/design/XwVQnNcbmC0xRJv4eOKuhT/%5BMKT%5D%5B2024%5D-Site-institucional?node-id=191-352&m=dev).

- `npm install`: instala o Next e outras dependências
- `npm run dev`: roda o servidor de desenvolvimento
- `npm run lint && npm run build`: verifica se não nem nenhum erro _(execute antes de dar commit/push!)_

## Configuração
O website precisa de algumas variáveis de ambiente para funcionar corretamente. As variáveis podem ser adicionadas pelo arquivo `.env.local`, em caso de desenvolvimento. Cuidado para não enviar as credenciais para o Github...

- `SLACK_TOKEN`: OAuth Token de um bot do Slack. É específico para cada _workspace_.
- `SLACK_CHANNEL`: ID do canal a serem enviadas as mensagens do formulário. Note que o bot precisa ser adicionado ao canal para que funcione.

## Layout geral
- `/`
- `/sobre`
- `/servicos`
  - `/servicos/consultoria`
  - `/servicos/proto`
  - `/servicos/dev`
- `/portfolio`
- `/contato`
