import imgEmpatia from '@/assets/valor_empatia.png'
import imgOusadia from '@/assets/valor_ousadia.jpg'
import imgComprometimento from '@/assets/valor_comprometimento.jpg'
import imgCooperatividade from '@/assets/valor_cooperatividade.jpg'
import imgCuriosidade from '@/assets/valor_curiosidade.jpg'

export const social = {
  whatsapp: '(21) 96825-3902',
  whatsappRaw: '5521968253902',
  email: 'contato@conpec.com.br',
  instagram: 'conpec.ej',
}

export const address = 'R. Josué de Castro, 100 — Cidade Universitária, Campinas — SP, 13083-861'

export const mvv = {
  missao: 'Desenvolver membros autônomos e inovadores capazes de transformar ideias em soluções tecnológicas impactantes.',
  visao: 'Ser uma EJ formada por membros de destaque que nos torne referência nacional.',
  valores: [
    {
      titulo: 'Empatia',
      descricao: 'Ter a capacidade de se por no lugar do outro e agir melhor a partir desse entendimento.',
      imagem: imgEmpatia,
      imagemAlt: 'Três pessoas olham sorrindo para a câmera. Uma delas está usando um chapéu laranja, escrito "Fica de boa".',
    },
    {
      titulo: 'Ousadia',
      descricao: 'Quem tem medo de errar, também não tem chances de acertar.',
      imagem: imgOusadia,
      imagemAlt: 'Um grupo de pessoas com a camisa da Conpec assistem uma palestra. Um homem, no meio do grupo, fala num microfone.',
    },
    {
      titulo: 'Comprometimento',
      descricao: 'Ter responsabilidade e compromisso com realizar o seu melhor.',
      imagem: imgComprometimento,
      imagemAlt: 'Um grupo de quinze pessoas comemora uma premiação em frente a um palco. Elas erguem a bandeira da Conpec.',
    },
    {
      titulo: 'Cooperatividade',
      descricao: 'Sempre estender a mão para outro membro quando ele precisar de ajuda e nunca dizer “esse não é meu trabalho”.',
      imagem: imgCooperatividade,
      imagemAlt: 'Quatro pessoas com a camisa da Conpec sorriem para a câmera, mostrando um troféu na mão. Um pou triste está no canto.',
    },
    {
      titulo: 'Curiosidade',
      descricao: 'A mente que se expande nunca volta ao tamanho original.',
      imagem: imgCuriosidade,
      imagemAlt: 'Um homem com a camisa do Movimento Empresa Júnior assiste à uma palestra, anotando num caderno.',
    },
  ],
}
