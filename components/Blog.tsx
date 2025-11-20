const blogPosts = [
  {
    title: 'Invasão de dispositivos e cibercrime: o que diz a lei e como denunciar',
    excerpt: 'Entenda as leis que protegem contra invasão de dispositivos e crimes cibernéticos, e saiba como proceder em caso de violação dos seus direitos digitais.',
    date: '27/08/2025',
  },
  {
    title: 'Golpes Digitais: como se proteger e o que fazer se você for vítima',
    excerpt: 'Aprenda a identificar golpes digitais comuns e as medidas preventivas que você pode tomar para proteger seus dados e informações pessoais.',
    date: '27/08/2025',
  },
  {
    title: 'Jogo Responsável é papel de todos, não apenas do setor',
    excerpt: 'A responsabilidade pelo jogo responsável deve ser compartilhada entre operadores, reguladores e jogadores para garantir um ambiente seguro.',
    date: '19/09/2024',
  },
  {
    title: 'As apostas eleitorais são proibidas por lei federal',
    excerpt: 'Entenda a legislação que proíbe apostas relacionadas a eleições e as consequências legais para quem viola essas normas.',
    date: '17/09/2024',
  },
  {
    title: 'Influenciadores e embaixadores de bets estão sujeitos à sanções administrativas',
    excerpt: 'A regulamentação sobre publicidade de apostas online e as responsabilidades legais de influenciadores e embaixadores do setor.',
    date: '11/09/2024',
  },
  {
    title: 'Quem paga pelos pequenos reparos no imóvel alugado?',
    excerpt: 'Vazamento na pia? Lâmpada queimada? Infiltração na parede? Nem tudo é obrigação do inquilino! A Lei do Inquilinato estabelece regras claras sobre conservação e pequenos reparos...',
    date: '04/09/2024',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-4">
            Blog Jurídico
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-2xl md:text-3xl text-gray-neutral max-w-2xl mx-auto">
            O Escritório Fidelis & Cota faz uma meticulosa curadoria sobre as notícias mais relevantes do sistema jurídico nacional e disponibiliza aqui em seu blog.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white border border-primary/20 rounded-xl p-6 hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1"
            >
              <div className="mb-4">
                <span className="text-base md:text-lg text-primary font-semibold">
                  {post.date}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 leading-tight">
                {post.title}
              </h3>
              <p className="text-gray-neutral text-lg md:text-xl leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <a
                href="#"
                className="text-primary hover:text-primary-700 font-semibold text-lg md:text-xl inline-flex items-center space-x-2 group"
              >
                <span>Ler mais</span>
                <span className="group-hover:translate-x-1 transition-transform">»</span>
              </a>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#"
            className="text-primary hover:text-primary-700 font-semibold text-lg inline-flex items-center space-x-2 group"
          >
            <span>Veja mais</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

