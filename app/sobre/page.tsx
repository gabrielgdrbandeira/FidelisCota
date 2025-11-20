'use client'

import { useEffect } from 'react'

export default function SobrePage() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Vai para o topo primeiro
    window.scrollTo(0, 0)
    
    // Redireciona para home com hash
    window.location.href = '/#sobre'
  }, [])

  return null
}
