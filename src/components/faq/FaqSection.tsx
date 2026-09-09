import React from 'react'
import { EditorialRule } from '../common/EditorialRule.tsx'
import { SectionIntro } from '../common/SectionIntro.tsx'
import { FaqItem } from './FaqItem.tsx'

export const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: 'O Daily.News dispara as mensagens automaticamente?',
      answer:
        'Não. A plataforma gera o texto e abre seu WhatsApp Web; você mantém a decisão e o envio pessoal.',
      defaultOpen: true,
    },
    {
      question: 'Como funciona o período de teste de 7 dias?',
      answer:
        'Você usa todos os recursos durante sete dias e pode cancelar antes da primeira cobrança.',
    },
    {
      question: 'Preciso instalar alguma coisa?',
      answer:
        'Não. O Daily.News funciona no navegador, em computador ou celular.',
    },
    {
      question: 'A IA é segura para o mercado financeiro?',
      answer:
        'Ela não emite recomendações nem toma decisões: apenas filtra e resume fatos publicados pelas fontes acompanhadas.',
    },
  ]

  return (
    <section id="faq" className="w-[min(1120px,calc(100%-48px))] max-w-[1120px] mx-auto py-16 md:py-[72px] max-md:py-12 grid grid-cols-1 md:grid-cols-[0.75fr_1fr] gap-10 md:gap-[100px]">
      <div className="reveal">
        <EditorialRule />
        <SectionIntro
          eyebrow="Perguntas frequentes"
          title="Você continua no controle."
          helperText="Tem outra dúvida? Use o teste para descobrir na prática."
        />
      </div>

      <div className="border-t border-black/10 reveal">
        {faqs.map((faq, idx) => (
          <FaqItem
            key={idx}
            question={faq.question}
            answer={faq.answer}
            defaultOpen={faq.defaultOpen}
          />
        ))}
      </div>
    </section>
  )
}
