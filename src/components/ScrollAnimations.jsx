import { useEffect } from 'react'

export default function ScrollAnimations() {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animated')
          }, index * 80)
          observer.unobserve(entry.target)
        }
      })
    }, { root: null, rootMargin: '0px 0px -60px 0px', threshold: 0.1 })

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
