'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import StarField from '@/components/StarField'

export default function Personnalisation() {
  const [config, setConfig] = useState({
    collection: 'heritage',
    case: 'white-gold',
    dial: 'black',
    strap: 'leather-black',
    complication: 'none',
  })

  const [price, setPrice] = useState(45000)

  const options = {
    collection: [
      { value: 'heritage', label: 'Héritage', basePrice: 45000 },
      { value: 'sport', label: 'Sport', basePrice: 38000 },
      { value: 'cosmos', label: 'Cosmos', basePrice: 65000 },
    ],
    case: [
      { value: 'white-gold', label: 'Or Blanc 18K', price: 0 },
      { value: 'rose-gold', label: 'Or Rose 18K', price: 2000 },
      { value: 'platinum', label: 'Platine 950', price: 15000 },
      { value: 'titanium', label: 'Titane Grade 5', price: -5000 },
    ],
    dial: [
      { value: 'black', label: 'Noir Laqué', price: 0 },
      { value: 'white', label: 'Blanc Nacré', price: 3000 },
      { value: 'blue', label: 'Bleu Cosmique', price: 3500 },
      { value: 'meteorite', label: 'Météorite Gibeon', price: 12000 },
      { value: 'diamond', label: 'Pavé Diamants', price: 35000 },
    ],
    strap: [
      { value: 'leather-black', label: 'Cuir Alligator Noir', price: 0 },
      { value: 'leather-brown', label: 'Cuir Alligator Brun', price: 0 },
      { value: 'bracelet-gold', label: 'Bracelet Or', price: 18000 },
      { value: 'bracelet-platinum', label: 'Bracelet Platine', price: 28000 },
      { value: 'rubber', label: 'Caoutchouc Sport', price: -1500 },
    ],
    complication: [
      { value: 'none', label: 'Aucune', price: 0 },
      { value: 'date', label: 'Quantième', price: 2000 },
      { value: 'moonphase', label: 'Phase de Lune', price: 8000 },
      { value: 'chronograph', label: 'Chronographe', price: 12000 },
      { value: 'tourbillon', label: 'Tourbillon', price: 80000 },
    ],
  }

  const updateConfig = (category: string, value: string) => {
    setConfig({ ...config, [category]: value })

    // Calculate price
    let newPrice = options.collection.find((c) => c.value === (category === 'collection' ? value : config.collection))?.basePrice || 45000

    if (category === 'case' || config.case) {
      const caseOption = options.case.find((c) => c.value === (category === 'case' ? value : config.case))
      if (caseOption) newPrice += caseOption.price
    }

    if (category === 'dial' || config.dial) {
      const dialOption = options.dial.find((d) => d.value === (category === 'dial' ? value : config.dial))
      if (dialOption) newPrice += dialOption.price
    }

    if (category === 'strap' || config.strap) {
      const strapOption = options.strap.find((s) => s.value === (category === 'strap' ? value : config.strap))
      if (strapOption) newPrice += strapOption.price
    }

    if (category === 'complication' || config.complication) {
      const compOption = options.complication.find((c) => c.value === (category === 'complication' ? value : config.complication))
      if (compOption) newPrice += compOption.price
    }

    setPrice(newPrice)
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
            Personnalisation
          </h1>
          <p className="text-xl md:text-2xl font-cormorant text-cosmic-cyan">
            Créez votre montre unique
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="sticky top-24 h-fit"
          >
            <div className="cosmic-border p-8">
              <div className="h-96 bg-gradient-to-br from-cosmic-violet/20 via-cosmic-cyan/20 to-cosmic-rose/20 flex items-center justify-center cosmic-glow mb-6">
                <div className="w-64 h-64 rounded-full cosmic-border cosmic-glow flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border-2 border-cosmic-cyan/50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-2 h-16 bg-cosmic-violet mb-2 mx-auto"></div>
                      <div className="w-2 h-48 bg-cosmic-cyan mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-cinzel gradient-text mb-4">Votre Configuration</h3>
                <div className="space-y-2 text-lg font-cormorant text-gray-300 mb-6">
                  <p>Collection: {options.collection.find((c) => c.value === config.collection)?.label}</p>
                  <p>Boîtier: {options.case.find((c) => c.value === config.case)?.label}</p>
                  <p>Cadran: {options.dial.find((d) => d.value === config.dial)?.label}</p>
                  <p>Bracelet: {options.strap.find((s) => s.value === config.strap)?.label}</p>
                  <p>Complication: {options.complication.find((c) => c.value === config.complication)?.label}</p>
                </div>

                <div className="text-4xl font-cinzel text-cosmic-violet mb-8">
                  {price.toLocaleString('fr-CH')} CHF
                </div>

                <button className="w-full cosmic-border px-8 py-4 text-lg font-cormorant hover:bg-cosmic-violet/20 transition-all duration-300 cosmic-glow">
                  Commander Cette Montre
                </button>

                <p className="text-sm font-cormorant text-gray-400 mt-4">
                  Délai de fabrication: 6-8 mois
                </p>
              </div>
            </div>
          </motion.div>

          {/* Options */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Collection */}
            <div className="cosmic-border p-6">
              <h3 className="text-2xl font-cinzel gradient-text mb-4">Collection</h3>
              <div className="space-y-3">
                {options.collection.map((option) => (
                  <label
                    key={option.value}
                    className={`block cursor-pointer p-4 border transition-all duration-300 ${
                      config.collection === option.value
                        ? 'border-cosmic-cyan bg-cosmic-cyan/10'
                        : 'border-cosmic-violet/30 hover:border-cosmic-violet'
                    }`}
                  >
                    <input
                      type="radio"
                      name="collection"
                      value={option.value}
                      checked={config.collection === option.value}
                      onChange={(e) => updateConfig('collection', e.target.value)}
                      className="mr-3"
                    />
                    <span className="font-cormorant text-lg">{option.label}</span>
                    <span className="float-right text-cosmic-violet">
                      {option.basePrice.toLocaleString('fr-CH')} CHF
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Case */}
            <div className="cosmic-border p-6">
              <h3 className="text-2xl font-cinzel gradient-text mb-4">Boîtier</h3>
              <div className="space-y-3">
                {options.case.map((option) => (
                  <label
                    key={option.value}
                    className={`block cursor-pointer p-4 border transition-all duration-300 ${
                      config.case === option.value
                        ? 'border-cosmic-cyan bg-cosmic-cyan/10'
                        : 'border-cosmic-violet/30 hover:border-cosmic-violet'
                    }`}
                  >
                    <input
                      type="radio"
                      name="case"
                      value={option.value}
                      checked={config.case === option.value}
                      onChange={(e) => updateConfig('case', e.target.value)}
                      className="mr-3"
                    />
                    <span className="font-cormorant text-lg">{option.label}</span>
                    <span className="float-right text-cosmic-violet">
                      {option.price > 0 ? '+' : ''}{option.price.toLocaleString('fr-CH')} CHF
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Dial */}
            <div className="cosmic-border p-6">
              <h3 className="text-2xl font-cinzel gradient-text mb-4">Cadran</h3>
              <div className="space-y-3">
                {options.dial.map((option) => (
                  <label
                    key={option.value}
                    className={`block cursor-pointer p-4 border transition-all duration-300 ${
                      config.dial === option.value
                        ? 'border-cosmic-cyan bg-cosmic-cyan/10'
                        : 'border-cosmic-violet/30 hover:border-cosmic-violet'
                    }`}
                  >
                    <input
                      type="radio"
                      name="dial"
                      value={option.value}
                      checked={config.dial === option.value}
                      onChange={(e) => updateConfig('dial', e.target.value)}
                      className="mr-3"
                    />
                    <span className="font-cormorant text-lg">{option.label}</span>
                    <span className="float-right text-cosmic-violet">
                      {option.price > 0 ? '+' : ''}{option.price.toLocaleString('fr-CH')} CHF
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Strap */}
            <div className="cosmic-border p-6">
              <h3 className="text-2xl font-cinzel gradient-text mb-4">Bracelet</h3>
              <div className="space-y-3">
                {options.strap.map((option) => (
                  <label
                    key={option.value}
                    className={`block cursor-pointer p-4 border transition-all duration-300 ${
                      config.strap === option.value
                        ? 'border-cosmic-cyan bg-cosmic-cyan/10'
                        : 'border-cosmic-violet/30 hover:border-cosmic-violet'
                    }`}
                  >
                    <input
                      type="radio"
                      name="strap"
                      value={option.value}
                      checked={config.strap === option.value}
                      onChange={(e) => updateConfig('strap', e.target.value)}
                      className="mr-3"
                    />
                    <span className="font-cormorant text-lg">{option.label}</span>
                    <span className="float-right text-cosmic-violet">
                      {option.price > 0 ? '+' : ''}{option.price.toLocaleString('fr-CH')} CHF
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Complications */}
            <div className="cosmic-border p-6">
              <h3 className="text-2xl font-cinzel gradient-text mb-4">Complications</h3>
              <div className="space-y-3">
                {options.complication.map((option) => (
                  <label
                    key={option.value}
                    className={`block cursor-pointer p-4 border transition-all duration-300 ${
                      config.complication === option.value
                        ? 'border-cosmic-cyan bg-cosmic-cyan/10'
                        : 'border-cosmic-violet/30 hover:border-cosmic-violet'
                    }`}
                  >
                    <input
                      type="radio"
                      name="complication"
                      value={option.value}
                      checked={config.complication === option.value}
                      onChange={(e) => updateConfig('complication', e.target.value)}
                      className="mr-3"
                    />
                    <span className="font-cormorant text-lg">{option.label}</span>
                    <span className="float-right text-cosmic-violet">
                      {option.price > 0 ? '+' : ''}{option.price.toLocaleString('fr-CH')} CHF
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
