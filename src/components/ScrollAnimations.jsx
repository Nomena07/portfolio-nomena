import { useEffect } from 'react'

export default function ScrollAnimations() {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animated')
          }, index * 100)
          observer.unobserve(entry.target)
        }
      })
    }, { root: null, rootMargin: '0px 0px -60px 0px', threshold: 0.1 })

    elements.forEach(el => observer.observe(el))

    // Horizontal scroll fade-in for portfolio cards
    const portfolioGrid = document.querySelector('.portfolio-grid')
    if (portfolioGrid) {
      const handleScroll = () => {
        const cards = portfolioGrid.querySelectorAll('.portfolio-card')
        const gridRect = portfolioGrid.getBoundingClientRect()
        const gridCenter = gridRect.left + gridRect.width / 2

        cards.forEach((card) => {
          const cardRect = card.getBoundingClientRect()
          const cardCenter = cardRect.left + cardRect.width / 2
          const distance = Math.abs(gridCenter - cardCenter)
          const maxDistance = gridRect.width / 2
          const opacity = Math.max(0.3, 1 - (distance / maxDistance) * 0.7)

          card.style.opacity = opacity
          if (opacity > 0.7) {
            card.classList.add('animated')
          }
        })
      }

      portfolioGrid.addEventListener('scroll', handleScroll)
      handleScroll()

      return () => {
        observer.disconnect()
        portfolioGrid.removeEventListener('scroll', handleScroll)
      }
    }

    return () => observer.disconnect()
  }, [])

  return null
}
