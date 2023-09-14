import React from 'react'
import Hero from '../components/Hero'
import CtaSection from '../components/CtaSection'
import Preview from '../components/Preview'
import PromoSection from '../components/PromoSection'
import StatsSection from '../components/StatsSection'
import TestimonialSection from '../components/TestimonialSection'
import LogoClouds from '../components/LogoClouds'

export default function HomePage() {
  return (
    <>
      <Hero />
      <CtaSection />
      <PromoSection />
      <Preview />
      <StatsSection />
      <TestimonialSection />
      {/* <LogoClouds /> */}
    </>
  )
}
