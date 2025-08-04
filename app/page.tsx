"use client"

import { WaitlistForm } from "@/components/waitlist-form"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/wind-background.png" alt="Wind background" fill className="object-cover" priority />
      </div>

      {/* GitHub Button */}
      <div className="absolute top-8 left-8 z-10">
        <a 
          href="https://github.com/Try-Wind" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-200 group"
          onClick={(e) => {
            e.preventDefault();
            window.open('https://github.com/Try-Wind', '_blank', 'noopener,noreferrer');
          }}
        >
          <span className="text-sm font-medium">Github</span>
          <svg 
            className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
      </div>

      {/* Logo */}
      <div className="absolute top-8 right-8 z-10">
        <Image src="/wind-logo.png" alt="Wind logo" width={90} height={90} className="opacity-95 drop-shadow-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Wind Title */}
        <div className="mb-16">
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-white wind-gradient tracking-wide wind-font">
            Wind
          </h1>
        </div>

        {/* Waitlist Form */}
        <WaitlistForm />
      </div>

      <style jsx>{`
        .wind-gradient {
          background: linear-gradient(180deg, #ffffff 0%, #e0f2fe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 40px rgba(255, 255, 255, 0.3);
        }
        .wind-font {
          font-family: 'Fredoka One', 'Bungee Shade', cursive;
          letter-spacing: 0.05em;
        }
      `}</style>
    </main>
  )
}
