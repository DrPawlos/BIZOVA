'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { signUpWithProfileAndBusiness } from '@/app/auth/actions'

interface FormDataState {
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
  repeatPassword: string
  businessName: string
  businessEmail: string
  businessPhone: string
  businessLocation: string
}

export function SignUpForm({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  const [step, setStep] = useState<1 | 2>(1)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<FormDataState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    repeatPassword: '',
    businessName: '',
    businessEmail: '',
    businessPhone: '',
    businessLocation: '',
  })
  const router = useRouter()

  const handleInputChange = (field: keyof FormDataState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setError(null)
  }

  const handleStep1Continue = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // Validate step 1 fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      setError('Please fill in all required fields')
      return
    }

    if (formData.password !== formData.repeatPassword) {
      setError('Passwords do not match')
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long')
      return
    }

    // Move to step 2
    setStep(2)
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    // Validate step 2 fields
    if (!formData.businessName) {
      setError('Business name is required')
      setIsLoading(false)
      return
    }

    try {
      // Create FormData object for server action
      const submitData = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        submitData.append(key, value)
      })

      const result = await signUpWithProfileAndBusiness(submitData)
      
      if (result?.error) {
        setError(result.error)
        setIsLoading(false)
      }
      // If no error, the server action will redirect automatically
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'An error occurred')
      setIsLoading(false)
    }
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Sign up</CardTitle>
          <CardDescription>
            {step === 1 
              ? 'Create your account - Step 1 of 2' 
              : 'Set up your business - Step 2 of 2'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Step Indicator */}
          <div className="mb-6 flex items-center justify-center gap-2">
            <div
              className={cn(
                'h-2 w-16 rounded-full transition-colors',
                step === 1 ? 'bg-primary' : 'bg-primary/50'
              )}
            />
            <div
              className={cn(
                'h-2 w-16 rounded-full transition-colors',
                step === 2 ? 'bg-primary' : 'bg-muted'
              )}
            />
          </div>

          {/* Step 1: Personal Information */}
          {step === 1 && (
            <form onSubmit={handleStep1Continue}>
              <div className="flex flex-col gap-4">
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold">Personal Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="firstName">
                        First Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="John"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="lastName">
                        Last Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Doe"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-semibold">Security</h3>
                  <div className="grid gap-2">
                    <Label htmlFor="password">
                      Password <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      required
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="repeatPassword">
                      Repeat Password <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="repeatPassword"
                      name="repeatPassword"
                      type="password"
                      required
                      value={formData.repeatPassword}
                      onChange={(e) => handleInputChange('repeatPassword', e.target.value)}
                    />
                  </div>
                </div>

                {error && <p className="text-sm text-red-500">{error}</p>}

                <Button type="submit" className="w-full">
                  Continue to Business Information
                </Button>

                <div className="text-center text-sm">
                  Already have an account?{' '}
                  <Link href="/auth/login" className="underline underline-offset-4">
                    Login
                  </Link>
                </div>
              </div>
            </form>
          )}

          {/* Step 2: Business Information */}
          {step === 2 && (
            <form onSubmit={handleSignUp}>
              <div className="flex flex-col gap-4">
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold">Business Information</h3>
                  <div className="grid gap-2">
                    <Label htmlFor="businessName">
                      Business Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="businessName"
                      name="businessName"
                      type="text"
                      placeholder="Acme Inc."
                      required
                      value={formData.businessName}
                      onChange={(e) => handleInputChange('businessName', e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="businessEmail">Business Email</Label>
                    <Input
                      id="businessEmail"
                      name="businessEmail"
                      type="email"
                      placeholder="contact@acme.com"
                      value={formData.businessEmail}
                      onChange={(e) => handleInputChange('businessEmail', e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="businessPhone">Business Phone</Label>
                    <Input
                      id="businessPhone"
                      name="businessPhone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.businessPhone}
                      onChange={(e) => handleInputChange('businessPhone', e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="businessLocation">Business Location</Label>
                    <Input
                      id="businessLocation"
                      name="businessLocation"
                      type="text"
                      placeholder="123 Main St, City, State"
                      value={formData.businessLocation}
                      onChange={(e) => handleInputChange('businessLocation', e.target.value)}
                    />
                  </div>
                </div>

                {error && (
                  <div className="rounded-md bg-red-50 p-3">
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    disabled={isLoading}
                  >
                    Back
                  </Button>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? 'Creating Account...' : 'Create Account'}
                  </Button>
                </div>

                <div className="text-center text-sm">
                  Already have an account?{' '}
                  <Link href="/auth/login" className="underline underline-offset-4">
                    Login
                  </Link>
                </div>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
