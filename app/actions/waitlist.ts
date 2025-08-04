"use server"

import { createClient } from "@/lib/supabase"

export async function addToWaitlist(email: string) {
  const supabase = createClient()

  const { data, error } = await supabase
    .from("waitlist")
    .insert([
      {
        email: email.toLowerCase().trim(),
        created_at: new Date().toISOString(),
      },
    ])
    .select()

  if (error) {
    console.error("Error adding to waitlist:", error)
    throw new Error("Failed to add email to waitlist")
  }

  return data
}
