import Image from 'next/image'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Tentar usar a logo, se não existir, usar texto */}
      <div className="relative w-12 h-12">
        <Image
          src="/logo.png"
          alt="Fidelis & Cota Logo"
          fill
          className="object-contain"
          onError={(e) => {
            // Se a logo não existir, esconder e usar texto
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
          }}
        />
      </div>
      <div>
        <div className="text-2xl md:text-3xl font-bold text-primary">
          Fidelis & Cota
        </div>
        <div className="hidden sm:block text-xs text-gray-neutral font-light">
          Advocacia e Consultoria
        </div>
      </div>
    </div>
  )
}

