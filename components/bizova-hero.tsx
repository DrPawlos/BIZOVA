'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronRight, Zap, TrendingUp, Shield, Users, Rocket, Cpu } from 'lucide-react'

interface HeroProps {
  subtitle?: string
  primaryButtonLabel?: string
  secondaryButtonLabel?: string
  imagePath?: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
}

const features = [
  { icon: Zap, label: 'Automation' },
  { icon: TrendingUp, label: 'Growth Analytics' },
  { icon: Shield, label: 'Security First' },
  { icon: Users, label: 'Team Collaboration' },
  { icon: Rocket, label: 'Scalability' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

const imageVariants = {
  hidden: { opacity: 0, x: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
}

export function Hero({
  subtitle = 'Empower your team with modern IT tools that accelerate growth, boost productivity, and drive digital transformation for businesses of all sizes.',
  primaryButtonLabel = 'Get Started',
  secondaryButtonLabel = 'Learn More',
  imagePath = '/hero-images/business-growth-through-it.jpg', // updated image path to reflect generic business growth
  onPrimaryClick,
  onSecondaryClick,
}: HeroProps) {
  return (
    <section className="min-h-screen w-full bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Background accent elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
          {/* Left Column */}
          <motion.div className="flex flex-col justify-center space-y-6 sm:space-y-7 md:space-y-8" variants={containerVariants}>
            <motion.div
              className="inline-flex items-center gap-2 w-fit px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-500/15 backdrop-blur-sm border border-blue-400/40 rounded-full"
              variants={itemVariants}
            >
              <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-300" />
              <span className="text-xs sm:text-sm font-semibold text-blue-200">BIZOVA</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight text-balance"
              variants={itemVariants}
            >
              <span className="text-blue-400">Transform</span> Your Business with IT Solutions
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed text-balance max-w-lg"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4" variants={itemVariants}>
              <Button
                onClick={onPrimaryClick}
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-6 py-5 sm:px-8 sm:py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group text-sm sm:text-base"
              >
                {primaryButtonLabel}
                <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={onSecondaryClick}
                size="lg"
                variant="outline"
                className="border-2 border-slate-400 hover:bg-slate-800 hover:border-blue-400 font-semibold px-6 py-5 sm:px-8 sm:py-6 rounded-full transition-all duration-300 bg-transparent text-white text-sm sm:text-base"
              >
                {secondaryButtonLabel}
              </Button>
            </motion.div>

            {/* Feature Badges */}
            <motion.div
              className="flex flex-wrap gap-2 sm:gap-3 pt-4 sm:pt-6"
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/15 hover:border-blue-400/50 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <feature.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-300" />
                  <span className="text-xs sm:text-sm font-medium text-slate-200">{feature.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="relative h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px] mt-8 lg:mt-0"
            variants={imageVariants}
          >
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-600/30 to-blue-400/20 rounded-xl sm:rounded-2xl blur-2xl" />
            
            {/* Image Container */}
            <div className="relative h-full rounded-xl sm:rounded-2xl overflow-hidden border border-blue-400/30 shadow-2xl">
              <Image
                src={imagePath || "/placeholder.svg"}
                alt="Business IT Transformation Platform"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}
