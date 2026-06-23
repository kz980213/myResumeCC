import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="回到顶部"
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center hover:bg-primary transition-colors"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  )
}
