'use client'

import { FaBriefcase, FaUsers, FaFileContract, FaShieldAlt, FaBalanceScale, FaHeart, FaHandshake, FaGavel } from 'react-icons/fa'

const practiceAreas = [
  {
    icon: FaBriefcase,
    title: 'Direito Trabalhista',
    description: 'É a área que regula as relações entre empregadores e empregados. Ou seja, protege os direitos do trabalhador e organiza os deveres do patrão.',
    featured: true,
    topics: [
      {
        title: 'Contratos de Trabalho',
        details: 'Registro, jornada, salário, férias.'
      },
      {
        title: 'Rescisão Contratual',
        details: 'Direitos em caso de demissão sem justa causa, por justa causa, pedido de demissão.'
      },
      {
        title: 'Verbas Trabalhistas',
        details: 'FGTS, 13º salário, férias, horas extras.'
      },
      {
        title: 'Estabilidade',
        details: 'Gestante, acidentado, dirigente sindical.'
      },
      {
        title: 'Acidente de Trabalho e Doenças Ocupacionais',
        details: 'Responsabilidade do empregador, indenização.'
      },
      {
        title: 'Assédio (moral e sexual)',
        details: 'Ações indenizatórias.'
      },
      {
        title: 'Reclamação Trabalhista',
        details: 'Quando o empregado entra com ação contra a empresa.'
      },
    ]
  },
  {
    icon: FaUsers,
    title: 'Direito de Família',
    description: 'É a área do Direito Civil que trata das relações familiares e sucessórias.',
    featured: true,
    topics: [
      {
        title: 'Casamento e União Estável',
        details: 'Regras, direitos e deveres dos cônjuges/companheiros.'
      },
      {
        title: 'Divórcio',
        details: 'Partilha de bens, pensão alimentícia, guarda dos filhos.'
      },
      {
        title: 'Guarda e Visitação',
        details: 'Regulamentação da convivência dos filhos com os pais.'
      },
      {
        title: 'Alimentos (pensão)',
        details: 'Obrigação de sustento entre parentes (pais e filhos, ex-cônjuges, etc.).'
      },
      {
        title: 'Filiação e Paternidade',
        details: 'Reconhecimento, investigação ou contestação de paternidade.'
      },
      {
        title: 'Sucessões (herança)',
        details: 'Inventário, partilha, testamento.'
      },
    ]
  },
]

export default function PracticeAreas() {
  return (
    <section id="areas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-gray-neutral max-w-2xl mx-auto">
            Especializados em Direito de Família e Direito Trabalhista
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={index}
                className="bg-beige border-2 border-primary/20 rounded-xl p-8 hover:shadow-xl hover:border-primary/40 transition-all"
              >
                <div className="mb-6">
                  <div className="bg-primary p-4 rounded-xl w-fit mb-4">
                    <Icon className="text-white text-3xl" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                    {area.title}
                  </h3>
                  <p className="text-primary text-sm md:text-base leading-relaxed mb-6">
                    {area.description}
                  </p>
                </div>

                <div className="border-t-2 border-primary/20 pt-6">
                  <h4 className="text-lg md:text-xl font-bold text-primary mb-4 flex items-center">
                    <span className="w-4 h-4 bg-primary rounded-full mr-3"></span>
                    Principais temas do {area.title}:
                  </h4>
                  <ul className="space-y-4">
                    {area.topics?.map((topic, topicIndex) => (
                      <li key={topicIndex} className="text-primary">
                        <div className="flex items-start">
                          <span className="font-bold text-sm md:text-base mr-2">• {topic.title}</span>
                          <span className="text-gray-neutral text-sm">→</span>
                        </div>
                        <p className="text-gray-neutral ml-4 text-xs md:text-sm mt-1">
                          {topic.details}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <a
                    href="#contato"
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.getElementById('contato')
                      if (element) {
                        const header = document.querySelector('header')
                        const headerHeight = header ? header.offsetHeight : 120
                        const elementTop = element.getBoundingClientRect().top + window.pageYOffset
                        const offsetPosition = elementTop - headerHeight - 20
                        window.scrollTo({
                          top: Math.max(0, offsetPosition),
                          behavior: 'instant'
                        })
                        window.history.pushState(null, '', '#contato')
                      }
                    }}
                    className="text-primary hover:text-primary-700 font-semibold text-base md:text-lg inline-flex items-center space-x-2 group cursor-pointer"
                  >
                    <span>Entre em contato</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
