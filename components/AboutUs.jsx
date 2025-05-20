'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50" id='tentang'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:shadow-2xl transition-all duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="md:flex">
            <motion.div 
              className="md:w-2/6 p-8 md:p-12 bg-gradient-to-br from-green-50 to-green-100"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Tentang Kami
              </motion.h1>
              <motion.div 
                className="w-20 h-1 bg-green-600 rounded-full mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
              <motion.p 
                className="text-gray-700 text-lg hidden md:block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Inovasi dalam analisis luka menggunakan teknologi AI
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="md:w-4/6 p-8 md:p-12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="prose prose-lg max-w-none">
                <motion.p 
                  className="text-gray-800 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Selamat datang di aplikasi <span className="font-semibold text-green-700">Neuro Luka</span>, sebuah proyek inovatif yang dikembangkan 
                  sebagai bagian dari tugas akhir semester (UAS) mata kuliah kalkulus. Aplikasi ini dirancang untuk membantu 
                  tenaga medis dan klien dalam menganalisis luka secara otomatis menggunakan teknologi pemrosesan citra digital 
                  dan kecerdasan buatan (AI).
                </motion.p>
                <motion.p 
                  className="text-gray-800 text-lg leading-relaxed mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Proyek ini dibuat oleh mahasiswa Teknik Informatika Universitas Siliwangi yang beranggotakan:
                </motion.p>
                <motion.ul 
                  className="mt-4 space-y-2 text-gray-700"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  {[
                    "Muhammad Adryan Suryaman",
                    "Farhan Esha Putra Kusuma Atmaja",
                    "Yogi Nugraha",
                    "Bunga Rylla Octaramadhany",
                    "Farid Syah Fadillah"
                  ].map((name, index) => (
                    <motion.li 
                      key={name}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                    >
                      <motion.span 
                        className="w-2 h-2 bg-green-600 rounded-full mr-3"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                      />
                      {name}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}