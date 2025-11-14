'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import StarField from '@/components/StarField'

export default function Sport() {
  const models = [
    {
      name: 'Diver',
      ref: 'AET-S-001',
      price: '38 000 CHF',
      specs: ['Titane Grade 5', 'Étanchéité 300m', 'Chronographe', 'Lunette Céramique'],
    },
    {
      name: 'Chrono',
      ref: 'AET-S-002',
      price: '42 000 CHF',
      specs: ['Acier Inoxydable', 'Chronographe Flyback', 'Tachymètre', 'Verre Saphir AR'],
    },
    {
      name: 'GMT',
      ref: 'AET-S-003',
      price: '48 000 CHF',
      specs: ['Or & Céramique', 'Double Fuseau', 'Étanchéité 200m', 'Mouvement COSC'],
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
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-cinzel font-bold gradient-text mb-6">
            Collection Sport
          </h1>
          <p className="text-xl md:text-2xl font-cormorant text-cosmic-cyan max-w-3xl mx-auto">
            Performance extrême et robustesse absolue. Conçues pour les aventuriers et les sportifs d'élite.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="cosmic-border p-12">
            <div className="h-96 bg-gradient-to-br from-cosmic-cyan/20 to-cosmic-dark flex items-center justify-center cosmic-glow mb-8">
              <div className="w-64 h-64 rounded-full cosmic-border cosmic-glow"></div>
            </div>
            <p className="text-lg md:text-xl font-cormorant text-gray-300 leading-relaxed text-center">
              La collection Sport incarne la fusion parfaite entre haute horlogerie et performance technique.
              Résistance extrême, précision chronométrique et fonctionnalités avancées pour accompagner
              les explorateurs modernes dans toutes leurs aventures.
            </p>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
          {models.map((model, index) => (
            <motion.div
              key={model.ref}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
              className="cosmic-border p-8 hover:bg-cosmic-cyan/5 transition-all duration-300"
            >
              <div className="h-80 bg-gradient-to-br from-cosmic-cyan/20 to-cosmic-dark flex items-center justify-center cosmic-glow mb-6">
                <div className="w-48 h-48 rounded-full cosmic-border"></div>
              </div>
              <h3 className="text-3xl font-cinzel gradient-text mb-2">{model.name}</h3>
              <p className="text-sm font-cormorant text-gray-500 mb-4">Réf. {model.ref}</p>
              <ul className="space-y-2 mb-6">
                {model.specs.map((spec) => (
                  <li key={spec} className="text-lg font-cormorant text-gray-300">
                    • {spec}
                  </li>
                ))}
              </ul>
              <p className="text-2xl font-cinzel text-cosmic-cyan mb-6">{model.price}</p>
              <div className="flex gap-3">
                <Link
                  href="/personnalisation"
                  className="flex-1 text-center cosmic-border px-4 py-3 text-sm font-cormorant hover:bg-cosmic-cyan/20 transition-all duration-300"
                >
                  Personnaliser
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 text-center cosmic-border px-4 py-3 text-sm font-cormorant hover:bg-cosmic-violet/20 transition-all duration-300"
                >
                  Essayer
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/collections"
            className="inline-block cosmic-border px-12 py-4 text-lg font-cormorant hover:bg-cosmic-rose/20 transition-all duration-300"
          >
            ← Retour aux Collections
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
