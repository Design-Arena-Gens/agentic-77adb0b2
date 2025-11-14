'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import StarField from '@/components/StarField'

export default function APropos() {
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
            À Propos
          </h1>
          <p className="text-xl md:text-2xl font-cormorant text-cosmic-cyan">
            L'histoire d'AETERNUM
          </p>
        </motion.div>

        {/* Histoire */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="cosmic-border p-12">
            <h2 className="text-4xl font-cinzel gradient-text mb-6 text-center">Notre Histoire</h2>
            <div className="space-y-6 text-lg font-cormorant text-gray-300 leading-relaxed">
              <p>
                Fondée en 1888 dans les ateliers de Genève, AETERNUM incarne plus d'un siècle
                d'excellence horlogère suisse. Notre maison est née de la vision d'un maître
                horloger passionné par l'astronomie, qui souhaitait capturer l'infini dans
                chaque garde-temps.
              </p>
              <p>
                Depuis cinq générations, la famille AETERNUM perpétue cet héritage unique,
                alliant traditions séculaires et innovations technologiques. Chaque montre
                est le fruit de centaines d'heures de travail artisanal, réalisée par les
                mains expertes de nos maîtres horlogers certifiés.
              </p>
              <p>
                Aujourd'hui, AETERNUM est reconnue mondialement pour ses complications
                astronomiques uniques et ses cadrans étoilés sculptés à la main. Nos créations
                sont présentes dans les collections des plus grands collectionneurs et ornent
                les poignets des personnalités les plus exigeantes.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Savoir-faire */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="cosmic-border p-12">
            <h2 className="text-4xl font-cinzel gradient-text mb-6 text-center">Savoir-Faire</h2>
            <div className="grid md:grid-cols-2 gap-8 text-lg font-cormorant text-gray-300">
              <div>
                <h3 className="text-2xl text-cosmic-cyan mb-4">Manufacture</h3>
                <p className="leading-relaxed">
                  Notre manufacture de Genève abrite 50 maîtres horlogers qui travaillent
                  chaque jour à la création de garde-temps d'exception. Chaque mouvement
                  est assemblé, ajusté et décoré entièrement à la main.
                </p>
              </div>
              <div>
                <h3 className="text-2xl text-cosmic-cyan mb-4">Innovation</h3>
                <p className="leading-relaxed">
                  Notre département R&D développe constamment de nouvelles complications
                  horlogères. Nous détenons 47 brevets internationaux pour nos innovations
                  mécaniques uniques.
                </p>
              </div>
              <div>
                <h3 className="text-2xl text-cosmic-cyan mb-4">Matériaux</h3>
                <p className="leading-relaxed">
                  Nous utilisons uniquement les matériaux les plus nobles : or 18 carats,
                  platine 950, météorites authentiques et diamants certifiés. Chaque
                  composant est sélectionné pour sa qualité exceptionnelle.
                </p>
              </div>
              <div>
                <h3 className="text-2xl text-cosmic-cyan mb-4">Certification</h3>
                <p className="leading-relaxed">
                  Tous nos mouvements sont certifiés chronomètre par le COSC. Chaque montre
                  est garantie à vie et bénéficie d'un service après-vente exclusif dans
                  notre manufacture.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Valeurs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="cosmic-border p-12">
            <h2 className="text-4xl font-cinzel gradient-text mb-6 text-center">Nos Valeurs</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-24 h-24 mx-auto mb-4 rounded-full cosmic-border cosmic-glow flex items-center justify-center">
                  <div className="text-4xl">⚡</div>
                </div>
                <h3 className="text-2xl font-cinzel text-cosmic-violet mb-3">Excellence</h3>
                <p className="font-cormorant text-gray-300">
                  La quête de la perfection dans chaque détail
                </p>
              </div>
              <div>
                <div className="w-24 h-24 mx-auto mb-4 rounded-full cosmic-border cosmic-glow flex items-center justify-center">
                  <div className="text-4xl">🌟</div>
                </div>
                <h3 className="text-2xl font-cinzel text-cosmic-cyan mb-3">Innovation</h3>
                <p className="font-cormorant text-gray-300">
                  Repousser les limites de l'horlogerie
                </p>
              </div>
              <div>
                <div className="w-24 h-24 mx-auto mb-4 rounded-full cosmic-border cosmic-glow flex items-center justify-center">
                  <div className="text-4xl">♾️</div>
                </div>
                <h3 className="text-2xl font-cinzel text-cosmic-rose mb-3">Éternité</h3>
                <p className="font-cormorant text-gray-300">
                  Créer des pièces qui traversent le temps
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-cinzel gradient-text mb-8">Visitez Notre Manufacture</h2>
          <p className="text-xl font-cormorant text-gray-300 mb-8 max-w-2xl mx-auto">
            Découvrez les coulisses de la création horlogère et rencontrez nos maîtres artisans
          </p>
          <Link
            href="/contact"
            className="inline-block cosmic-border px-12 py-4 text-lg font-cormorant hover:bg-cosmic-violet/20 transition-all duration-300 cosmic-glow"
          >
            Réserver une Visite
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
