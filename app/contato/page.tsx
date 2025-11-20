'use client'

import { useEffect } from 'react'

export default function ContatoPage() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Vai para o topo primeiro
    window.scrollTo(0, 0)
    
    // Redireciona para home com hash
    window.location.href = '/#contato'
  }, [])

  return null
}
