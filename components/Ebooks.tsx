import { FaDownload } from 'react-icons/fa'
//
const ebooks = [
  {
    title: 'E-book sobre o marco legal da aprendizagem e os desafios na Construção Civil',
    description: 'Material completo sobre o marco legal da aprendizagem e seus desafios na construção civil.',
  },
  {
    title: 'E-book sobre forma de remuneração variável (prêmio) e sua aplicação na Construção Civil',
    description: 'Entenda as formas de remuneração variável e sua aplicação prática na construção civil.',
  },
  {
    title: 'E-book sobre a instituição do Programa Emprega + Mulheres',
    description: 'Conheça os detalhes do Programa Emprega + Mulheres e suas implicações.',
  },
  {
    title: 'E-book sobre a Medida Provisória 1.116/22',
    description: 'Análise completa sobre a MP 1.116/22 e seus impactos.',
  },
  {
    title: 'E-book sobre a derrubada da MP 1045 pelo Senado Federal',
    description: 'Entenda o processo de derrubada da MP 1045 e suas consequências.',
  },
  {
    title: 'E-book sobre Direito das gestantes e lactantes',
    description: 'Guia completo sobre os direitos das gestantes e lactantes no ambiente de trabalho.',
  },
  {
    title: 'E-book Fashion Law',
    description: 'Conheça as particularidades do Direito aplicado à moda e à indústria fashion.',
  },
]

export default function Ebooks() {
  return (
    <section id="ebooks" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            E-books gratuitos para download
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Reforçando nosso compromisso em manter você e sua empresa sempre atualizados, disponibilizamos E-books e outros materiais sobre os mais relevantes temas jurídicos discutidos no momento.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ebooks.map((ebook, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {ebook.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {ebook.description}
              </p>
              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center space-x-2">
                <FaDownload />
                <span>Baixe gratuitamente!</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

