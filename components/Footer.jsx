import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-green-700 to-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative h-10 w-10 bg-white rounded">
                <Image
                  src="/logo.png"
                  alt="Neuro Luka Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                Neuro Luka
              </h3>
            </div>
            <p className="text-green-100 leading-relaxed mb-6 max-w-lg">
              Aplikasi yang dirancang untuk membantu tenaga medis dan klien dalam menganalisis luka secara otomatis menggunakan teknologi pemrosesan citra digital dan kecerdasan buatan (AI).
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-200">Navigasi</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-green-100 hover:text-white transition-colors flex items-center">
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/analisis" className="text-green-100 hover:text-white transition-colors flex items-center">
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Analisis
                </Link>
              </li>
              <li>
                <Link href="/history" className="text-green-100 hover:text-white transition-colors flex items-center">
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Riwayat
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-200">Kontak</h3>
            <address className="not-italic space-y-4">
              <p className="flex items-start text-green-100">
                <svg className="h-5 w-5 mr-3 mt-0.5 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  Mugarsari, Tamansari<br />
                  Tasikmalaya, Indonesia 46196
                </span>
              </p>
              <p className="flex items-center text-green-100">
                <svg className="h-5 w-5 mr-3 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                neuroluka@gmail.com
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-green-100">
              © {currentYear} Neuro Luka. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer