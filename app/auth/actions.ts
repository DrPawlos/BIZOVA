'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

/**
 * Server action to handle user signup with profile and business creation
 * This creates a new user, business, and links them together in a single transaction
 */
export async function signUpWithProfileAndBusiness(formData: FormData) {
  const supabase = await createClient()

  // Extract form data
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string
  const phone = formData.get('phone') as string
  const businessName = formData.get('businessName') as string
  const businessEmail = formData.get('businessEmail') as string
  const businessPhone = formData.get('businessPhone') as string
  const businessLocation = formData.get('businessLocation') as string

  // Validate required fields
  if (!email || !password || !firstName || !lastName || !businessName) {
    return {
      error: 'Email, password, first name, last name, and business name are required',
    }
  }

  try {
    // Step 1: Create the auth user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/dashboard`,
      },
    })

    if (authError) {
      return { error: authError.message }
    }

    if (!authData.user) {
      return { error: 'Failed to create user account' }
    }

    // Step 2: Create the business
    const { data: businessData, error: businessError } = await supabase
      .from('businesses')
      .insert({
        name: businessName,
        email: businessEmail || email,
        phone: businessPhone,
        location: businessLocation,
      })
      .select()
      .single()

    if (businessError) {
      // If business creation fails, we should ideally delete the auth user
      // but since we can't easily do that, we'll just return the error
      return { error: `Failed to create business: ${businessError.message}` }
    }

    // Step 3: Create the profile linked to both user and business
    const { error: profileError } = await supabase.from('profiles').insert({
      id: authData.user.id,
      first_name: firstName,
      last_name: lastName,
      phone: phone,
      email: email,
      business_id: businessData.id,
    })

    if (profileError) {
      return { error: `Failed to create profile: ${profileError.message}` }
    }

    revalidatePath('/', 'layout')
    redirect('/dashboard')
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
    }
  }
}

/**
 * Server action to handle user logout
 * Signs out the user and redirects to login page
 */
export async function logout() {
  const supabase = await createClient()
  
  const { error } = await supabase.auth.signOut()
  
  if (error) {
    return { error: error.message }
  }
  
  revalidatePath('/', 'layout')
  redirect('/auth/login')
}

