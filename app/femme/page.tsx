'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import StarField from '@/components/StarField'

export default function Femme() {
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
            Collection Femme
          </h1>
          <p className="text-xl md:text-2xl font-cormorant text-cosmic-cyan max-w-3xl mx-auto">
            Raffinement et grâce. Créations délicates serties de diamants.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="max-w-5xl mx-auto cosmic-border p-12 text-center"
        >
          <div className="h-96 bg-gradient-to-br from-cosmic-rose/30 to-cosmic-dark flex items-center justify-center cosmic-glow mb-8">
            <div className="w-48 h-48 rounded-full cosmic-border cosmic-glow"></div>
          </div>
          <h3 className="text-4xl font-cinzel gradient-text mb-6">À partir de 32 000 CHF</h3>
          <p className="text-lg md:text-xl font-cormorant text-gray-300 leading-relaxed mb-8">
            Des créations joaillères qui transcendent le temps. Boîtiers réduits, bracelets en nacre,
            mouvements miniaturisés de haute précision. L'élégance féminine sublimée par l'art horloger.
          </p>
          <Link
            href="/contact"
            className="inline-block cosmic-border px-12 py-4 text-lg font-cormorant hover:bg-cosmic-rose/20 transition-all duration-300 cosmic-glow"
          >
            Découvrir en Boutique
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
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
