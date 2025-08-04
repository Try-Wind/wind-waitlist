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

      {/* Logo */}
      <div className="absolute top-8 right-8 z-10">
        <Image src="/wind-logo.png" alt="Wind logo" width={80} height={80} className="opacity-95 drop-shadow-sm" />
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
          font-family: 'CursiveFont', cursive;
        }
      `}</style>
    </main>
  )
}
