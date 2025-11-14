'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import StarField from '@/components/StarField'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'heritage',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

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
            Contact
          </h1>
          <p className="text-xl md:text-2xl font-cormorant text-cosmic-cyan">
            Nos experts sont à votre service
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="cosmic-border p-8">
              <h2 className="text-3xl font-cinzel gradient-text mb-6">Prendre Rendez-vous</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-cormorant text-gray-400 mb-2">Nom Complet</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-cosmic-dark border border-cosmic-violet/30 px-4 py-3 text-white font-cormorant focus:border-cosmic-cyan focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-cormorant text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-cosmic-dark border border-cosmic-violet/30 px-4 py-3 text-white font-cormorant focus:border-cosmic-cyan focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-cormorant text-gray-400 mb-2">Téléphone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-cosmic-dark border border-cosmic-violet/30 px-4 py-3 text-white font-cormorant focus:border-cosmic-cyan focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-cormorant text-gray-400 mb-2">Collection d'Intérêt</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-cosmic-dark border border-cosmic-violet/30 px-4 py-3 text-white font-cormorant focus:border-cosmic-cyan focus:outline-none transition-colors"
                  >
                    <option value="heritage">Héritage</option>
                    <option value="sport">Sport</option>
                    <option value="cosmos">Cosmos</option>
                    <option value="tourbillon">Tourbillon</option>
                    <option value="femme">Femme</option>
                    <option value="limited">Éditions Limitées</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-cormorant text-gray-400 mb-2">Message</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-cosmic-dark border border-cosmic-violet/30 px-4 py-3 text-white font-cormorant focus:border-cosmic-cyan focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full cosmic-border px-8 py-4 text-lg font-cormorant hover:bg-cosmic-violet/20 transition-all duration-300 cosmic-glow"
                >
                  {submitted ? 'Message Envoyé ✓' : 'Envoyer'}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="cosmic-border p-8">
              <h3 className="text-2xl font-cinzel gradient-text mb-4">Boutique Genève</h3>
              <div className="space-y-3 font-cormorant text-gray-300">
                <p>Rue du Rhône 118</p>
                <p>1204 Genève, Suisse</p>
                <p className="pt-2">Lundi - Samedi: 10h - 19h</p>
                <p>Dimanche: Sur rendez-vous</p>
              </div>
            </div>

            <div className="cosmic-border p-8">
              <h3 className="text-2xl font-cinzel gradient-text mb-4">Coordonnées</h3>
              <div className="space-y-3 font-cormorant text-gray-300">
                <p>
                  Téléphone:{' '}
                  <a href="tel:+41225551234" className="text-cosmic-cyan hover:text-cosmic-violet transition-colors">
                    +41 22 555 12 34
                  </a>
                </p>
                <p>
                  Email:{' '}
                  <a href="mailto:contact@aeternum.ch" className="text-cosmic-cyan hover:text-cosmic-violet transition-colors">
                    contact@aeternum.ch
                  </a>
                </p>
                <p>
                  WhatsApp:{' '}
                  <a href="https://wa.me/41225551234" className="text-cosmic-cyan hover:text-cosmic-violet transition-colors">
                    +41 22 555 12 34
                  </a>
                </p>
              </div>
            </div>

            <div className="cosmic-border p-8">
              <h3 className="text-2xl font-cinzel gradient-text mb-4">Service Client</h3>
              <p className="font-cormorant text-gray-300 leading-relaxed">
                Notre équipe d'experts est disponible pour répondre à toutes vos questions
                et vous accompagner dans le choix de votre garde-temps d'exception.
              </p>
            </div>

            <div className="cosmic-border p-8">
              <h3 className="text-2xl font-cinzel gradient-text mb-4">Réseaux Sociaux</h3>
              <div className="flex space-x-6 font-cormorant text-lg">
                <a href="#" className="text-cosmic-cyan hover:text-cosmic-violet transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-cosmic-cyan hover:text-cosmic-violet transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-cosmic-cyan hover:text-cosmic-violet transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
