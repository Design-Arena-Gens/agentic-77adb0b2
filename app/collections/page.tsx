'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import StarField from '@/components/StarField'

export default function Collections() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const collections = [
    {
      name: 'Héritage',
      tagline: 'L\'Élégance Intemporelle',
      description: 'Des montres classiques qui incarnent la tradition horlogère suisse. Boîtiers en or blanc, cadrans guilloché, mouvements mécaniques à remontage manuel.',
      price: 'À partir de 45 000 CHF',
      href: '/heritage',
      gradient: 'from-cosmic-violet/30 to-cosmic-dark',
    },
    {
      name: 'Sport',
      tagline: 'Performance Extrême',
      description: 'Conçues pour les aventuriers et les sportifs d\'élite. Étanchéité 300m, chronographes haute précision, matériaux ultra-résistants.',
      price: 'À partir de 38 000 CHF',
      href: '/sport',
      gradient: 'from-cosmic-cyan/30 to-cosmic-dark',
    },
    {
      name: 'Cosmos',
      tagline: 'L\'Infini au Poignet',
      description: 'Notre collection signature inspirée par l\'univers. Cadrans étoilés, phases lunaires, complications astronomiques uniques.',
      price: 'À partir de 65 000 CHF',
      href: '/cosmos',
      gradient: 'from-cosmic-rose/30 to-cosmic-dark',
    },
    {
      name: 'Tourbillon',
      tagline: 'L\'Art Mécanique Ultime',
      description: 'Les pièces les plus complexes de notre manufacture. Tourbillons volants, réserves de marche de 10 jours, finitions exceptionnelles.',
      price: 'À partir de 125 000 CHF',
      href: '/tourbillon',
      gradient: 'from-cosmic-violet/30 via-cosmic-cyan/20 to-cosmic-dark',
    },
    {
      name: 'Femme',
      tagline: 'Raffinement & Grâce',
      description: 'Créations délicates serties de diamants. Boîtiers réduits, bracelets en nacre, mouvements miniaturisés de haute précision.',
      price: 'À partir de 32 000 CHF',
      href: '/femme',
      gradient: 'from-cosmic-rose/30 to-cosmic-dark',
    },
    {
      name: 'Éditions Limitées',
      tagline: 'Exclusivité Absolue',
      description: 'Séries numérotées de 50 pièces maximum. Collaborations avec des artistes, matériaux rares, complications uniques au monde.',
      price: 'Sur demande',
      href: '/limited',
      gradient: 'from-cosmic-cyan/30 via-cosmic-violet/20 to-cosmic-dark',
    },
  ]

  return (
    <main className="relative min-h-screen pt-20">
      <StarField />

      <div className="relative z-10 px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-cinzel font-bold gradient-text mb-6">
            Nos Collections
          </h1>
          <p className="text-xl md:text-2xl font-cormorant text-cosmic-cyan">
            Six univers d'exception pour tous les instants de votre vie
          </p>
        </motion.div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-8 pb-12 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'thin' }}
        >
          {collections.map((collection, index) => (
            <motion.div
              key={collection.name}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="flex-shrink-0 w-[90vw] md:w-[600px] snap-start"
            >
              <div className="cosmic-border h-full p-8 hover:bg-cosmic-violet/5 transition-all duration-300">
                <div className={`h-96 bg-gradient-to-br ${collection.gradient} mb-8 flex items-center justify-center cosmic-glow`}>
                  <div className="w-48 h-48 rounded-full cosmic-border cosmic-glow flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border border-cosmic-cyan/50"></div>
                  </div>
                </div>

                <h2 className="text-4xl font-cinzel gradient-text mb-3">{collection.name}</h2>
                <p className="text-2xl font-cormorant text-cosmic-cyan mb-6">{collection.tagline}</p>
                <p className="text-lg font-cormorant text-gray-300 mb-6 leading-relaxed">
                  {collection.description}
                </p>
                <p className="text-xl font-cormorant text-cosmic-violet mb-8">{collection.price}</p>

                <div className="flex gap-4">
                  <Link
                    href={collection.href}
                    className="flex-1 text-center cosmic-border px-8 py-3 text-lg font-cormorant hover:bg-cosmic-cyan/20 transition-all duration-300"
                  >
                    Découvrir
                  </Link>
                  <Link
                    href="/personnalisation"
                    className="flex-1 text-center cosmic-border px-8 py-3 text-lg font-cormorant hover:bg-cosmic-violet/20 transition-all duration-300"
                  >
                    Personnaliser
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-lg font-cormorant text-gray-400 mb-8">
            Faites défiler horizontalement pour explorer toutes nos collections
          </p>
          <Link
            href="/contact"
            className="inline-block cosmic-border px-12 py-4 text-lg font-cormorant hover:bg-cosmic-rose/20 transition-all duration-300"
          >
            Prendre Rendez-vous
          </Link>
        </div>
      </div>
    </main>
  )
}
