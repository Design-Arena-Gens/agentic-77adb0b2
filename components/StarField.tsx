'use client'

import { useEffect, useState } from 'react'

export default function StarField() {
  const [stars, setStars] = useState<Array<{ left: string; top: string; size: string; delay: string }>>([])

  useEffect(() => {
    const generateStars = () => {
      const newStars = []
      for (let i = 0; i < 200; i++) {
        newStars.push({
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          size: `${Math.random() * 2 + 1}px`,
          delay: `${Math.random() * 3}s`,
        })
      }
      setStars(newStars)
    }

    generateStars()
  }, [])

  return (
    <div className="stars-container">
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  )
}
