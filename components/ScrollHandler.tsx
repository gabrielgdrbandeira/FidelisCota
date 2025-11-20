'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollHandler() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined' || pathname !== '/') return

    const hash = window.location.hash.substring(1)
    if (hash) {
      const scrollToSection = () => {
        const element = document.getElementById(hash)
        if (element) {
          const header = document.querySelector('header')
          const headerHeight = header ? header.offsetHeight : 120
          const elementTop = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementTop - headerHeight - 20
          
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'instant'
          })
        } else {
          // Se o elemento ainda não existe, tenta novamente
          setTimeout(scrollToSection, 100)
        }
      }

      setTimeout(scrollToSection, 100)
    }
  }, [pathname])

  return null
}
