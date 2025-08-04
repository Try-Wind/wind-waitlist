"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { addToWaitlist } from "@/app/actions/waitlist"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || isLoading) return

    setIsLoading(true)

    try {
      await addToWaitlist(email)
      setIsSubmitted(true)
      setEmail("")

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error("Error adding to waitlist:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent border-none text-white placeholder:text-white/70 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none shadow-none text-sm px-0"
          disabled={isLoading || isSubmitted}
          required
        />
        <Button
          type="submit"
          size="sm"
          className="ml-3 rounded-full w-8 h-8 p-0 bg-white/20 hover:bg-white/30 border border-white/30 transition-all duration-300"
          disabled={isLoading || isSubmitted || !email}
        >
          {isSubmitted ? <Check className="w-4 h-4 text-white" /> : <ArrowRight className="w-4 h-4 text-white" />}
        </Button>
      </div>
    </form>
  )
}
