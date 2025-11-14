'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import StarField from '@/components/StarField'

export default function Home() {
  return (
    <main className="relative">
      <StarField />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <h1 className="text-7xl md:text-9xl font-cinzel font-bold gradient-text mb-6">
            AETERNUM
          </h1>
          <p className="text-xl md:text-3xl font-cormorant mb-12 text-cosmic-cyan">
            L'Éternité en Chaque Seconde
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Link
              href="/collections"
              className="inline-block cosmic-border px-12 py-4 text-lg font-cormorant hover:bg-cosmic-violet/20 transition-all duration-300 cosmic-glow"
            >
              Découvrir les Collections
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl text-center z-10"
        >
          <h2 className="text-5xl md:text-7xl font-cinzel gradient-text mb-8">
            L'Art de la Précision
          </h2>
          <p className="text-xl md:text-2xl font-cormorant leading-relaxed text-gray-300">
            Depuis les ateliers de Genève, AETERNUM perpétue l'excellence horlogère suisse.
            Chaque montre est une œuvre d'art mécanique, façonnée par les mains expertes de nos
            maîtres horlogers. Une fusion parfaite entre tradition séculaire et innovation cosmique.
          </p>
        </motion.div>
      </section>

      {/* Collections Preview */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl w-full z-10">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-cinzel gradient-text mb-16 text-center"
          >
            Nos Collections
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Héritage', desc: 'L\'élégance intemporelle', href: '/heritage' },
              { name: 'Sport', desc: 'Performance extrême', href: '/sport' },
              { name: 'Cosmos', desc: 'L\'infini au poignet', href: '/cosmos' },
            ].map((collection, index) => (
              <motion.div
                key={collection.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="cosmic-border p-8 hover:bg-cosmic-violet/10 transition-all duration-300 group"
              >
                <div className="h-64 bg-gradient-to-br from-cosmic-violet/20 to-cosmic-cyan/20 mb-6 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full cosmic-border cosmic-glow"></div>
                </div>
                <h3 className="text-3xl font-cinzel gradient-text mb-4">{collection.name}</h3>
                <p className="text-lg font-cormorant text-gray-400 mb-6">{collection.desc}</p>
                <Link
                  href={collection.href}
                  className="inline-block text-cosmic-cyan hover:text-cosmic-violet transition-colors duration-300"
                >
                  Découvrir →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl text-center z-10"
        >
          <h2 className="text-5xl md:text-7xl font-cinzel gradient-text mb-8">
            Savoir-Faire d'Exception
          </h2>
          <p className="text-xl md:text-2xl font-cormorant leading-relaxed text-gray-300 mb-12">
            Plus de 300 heures de travail artisanal pour chaque pièce. Des mouvements mécaniques
            conçus et assemblés à la main, certifiés chronomètre par le COSC. L'horlogerie suisse
            dans sa plus pure expression.
          </p>
          <Link
            href="/personnalisation"
            className="inline-block cosmic-border px-12 py-4 text-lg font-cormorant hover:bg-cosmic-cyan/20 transition-all duration-300"
          >
            Personnaliser Votre Montre
          </Link>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center z-10"
        >
          <h2 className="text-5xl md:text-7xl font-cinzel gradient-text mb-8">
            Entrez dans l'Éternité
          </h2>
          <p className="text-xl md:text-2xl font-cormorant mb-12 text-gray-300">
            Visitez notre boutique ou prenez rendez-vous avec nos experts
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="cosmic-border px-12 py-4 text-lg font-cormorant hover:bg-cosmic-violet/20 transition-all duration-300"
            >
              Nous Contacter
            </Link>
            <Link
              href="/apropos"
              className="cosmic-border px-12 py-4 text-lg font-cormorant hover:bg-cosmic-cyan/20 transition-all duration-300"
            >
              Notre Histoire
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
