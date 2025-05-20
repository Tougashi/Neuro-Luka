'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const features = [
    {
      title: "Perkiraan Ukuran Luka yang Akurat",
      description: "Dapatkan hasil pengukuran luka yang presisi dengan teknologi pemrosesan gambar dan perhitungan canggih.",
      icon: "ri-ruler-line"
    },
    {
      title: "Klasifikasi Jaringan",
      description: "Sistem kami bisa membedakan jenis jaringan pada luka untuk membantu menentukan perawatan yang tepat.",
      icon: "ri-microscope-line"
    },
    {
      title: "Deteksi Luka Otomatis",
      description: "Cukup unggah foto luka — teknologi AI kami akan mendeteksi dan menandai area yang perlu diperhatikan secara otomatis.",
      icon: "ri-ai-generate"
    },
    {
      title: "Prediksi Pemulihan",
      description: "Dapatkan estimasi waktu penyembuhan berdasarkan kondisi luka dan faktor-faktor pasien lainnya.",
      icon: "ri-line-chart-line"
    }
  ];

  const faqs = [
    {
      question: "Apa itu Neuro-Luka?",
      answer: "Neuro-Luka adalah aplikasi pengukur luka digital yang menggunakan teknologi kecerdasan buatan untuk mengukur dan menganalisis luka secara akurat. Aplikasi ini membantu tenaga medis dalam mendokumentasikan dan memantau perkembangan penyembuhan luka."
    },
    {
      question: "Bagaimana cara menggunakan Neuro-Luka?",
      answer: "Cara menggunakan Neuro-Luka sangat sederhana. Anda hanya perlu mengambil foto luka menggunakan kamera smartphone, dan aplikasi akan secara otomatis mengukur dimensi luka dan memberikan analisis detail tentang kondisi luka tersebut."
    },
    {
      question: "Apakah Neuro-Luka akurat?",
      answer: "Ya, Neuro-Luka menggunakan algoritma AI yang telah dilatih dengan ribuan data luka untuk memberikan hasil pengukuran yang akurat. Tingkat akurasi kami mencapai 95% dibandingkan dengan pengukuran manual oleh tenaga medis profesional."
    },
    {
      question: "Apakah ada biaya untuk menggunakan Neuro-Luka?",
      answer: "Neuro-Luka tersedia secara gratis untuk semua pengguna. Kami berkomitmen untuk memberikan solusi pengukuran luka yang terjangkau dan mudah diakses oleh semua tenaga medis."
    },
    {
      question: "Apakah data pasien aman?",
      answer: "Ya, kami sangat memperhatikan keamanan data. Semua data pasien dienkripsi dan disimpan dengan aman sesuai dengan standar keamanan medis internasional. Kami juga mematuhi semua regulasi privasi data yang berlaku."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-3 rounded-full bg-green-50 text-green-700 font-medium text-sm mb-8 shadow-sm">
            Didukung oleh Teknologi Kecerdasan Buatan
          </span>
  
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Analisis Luka Lebih Cerdas, Cepat, dan Mudah
          </motion.h1>
  
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ambil keputusan lebih cepat dan tepat — cukup unggah foto, dan biarkan AI kami membantu merencanakan perawatan yang optimal.
          </motion.p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 group-hover:bg-green-100 transition-colors duration-300">
                  <i className={`${feature.icon} ri-2x`}></i>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                    {feature.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Pertanyaan yang Sering Diajukan
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Temukan jawaban untuk pertanyaan umum tentang Neuro-Luka
          </motion.p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.button
                className="w-full text-left bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex justify-between items-center">
                  <motion.h3 
                    className="text-xl font-semibold text-gray-900"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  >
                    {faq.question}
                  </motion.h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-6 h-6 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <motion.p 
                        className="mt-4 text-gray-600 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {faq.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.p 
            className="text-gray-600 text-lg font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Masih punya pertanyaan? Hubungi tim dukungan kami
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ