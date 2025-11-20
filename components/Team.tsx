import Image from 'next/image'
import { FaGraduationCap, FaIdCard, FaHeart, FaBriefcase } from 'react-icons/fa'

const teamMembers = [
  {
    name: 'Rafaela Barbosa Fidelis Campos',
    role: 'ADVOGADA',
    image: '/team/rafaela.jpg', // Você precisará adicionar a imagem
    education: 'Formada pelo Centro Universitário Newton Paiva',
    oab: 'Inscrita na OAB/MG 244.086',
    approach: 'Acolhimento e escuta ativa para compreender cada caso com empatia',
    specialties: 'Atuação focada em Direito de Família e Direito Trabalhista',
    social: 'Rafaa_bfc',
  },
  {
    name: 'Julia Cota Oliveira',
    role: 'ADVOGADA',
    image: '/team/julia.jpg', // Você precisará adicionar a imagem
    education: 'Formada pela Pontifícia Universidade Católica de Minas Gerais',
    oab: 'Inscrita na OAB/MG 240.799',
    approach: 'Atuação preventiva e consultiva para evitar problemas futuros',
    specialties: 'Atuação focada em Direito de Família e Direito Trabalhista',
    social: 'Juh_cota',
  },
]

export default function Team() {
  return (
    <section id="equipe" className="py-20 bg-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Nossa Equipe
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-gray-neutral max-w-2xl mx-auto">
            Profissionais comprometidos com a excelência e o atendimento humanizado
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="relative bg-gradient-to-br from-primary to-primary-700 p-8 text-center">
                <div className="relative inline-block">
                  <div className="w-48 h-48 rounded-full border-4 border-white mx-auto overflow-hidden bg-white shadow-xl relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={192}
                      height={192}
                      className="object-cover w-full h-full"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className="mt-6 text-white">
                  <p className="text-xs md:text-sm font-light mb-2">Quem sou eu?</p>
                  <h3 className="text-lg md:text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm md:text-base font-medium">{member.role}</p>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <FaGraduationCap className="text-primary text-xl" />
                    </div>
                    <div>
                      <p className="text-primary font-semibold text-base md:text-lg">Formação</p>
                      <p className="text-gray-neutral text-sm md:text-base">{member.education}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <FaIdCard className="text-primary text-xl" />
                    </div>
                    <div>
                      <p className="text-primary font-semibold text-base md:text-lg">OAB</p>
                      <p className="text-gray-neutral text-sm md:text-base">{member.oab}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <FaHeart className="text-primary text-xl" />
                    </div>
                    <div>
                      <p className="text-primary font-semibold text-base md:text-lg">Abordagem</p>
                      <p className="text-gray-neutral text-sm md:text-base">{member.approach}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <FaBriefcase className="text-primary text-xl" />
                    </div>
                    <div>
                      <p className="text-primary font-semibold text-base md:text-lg">Especialidades</p>
                      <p className="text-gray-neutral text-sm md:text-base">{member.specialties}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-gray-neutral text-sm md:text-base">@{member.social}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

