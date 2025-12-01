"use client";

import { motion } from "framer-motion";
import { ArrowRight, Car, Sparkles, Map, Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ui/ServiceCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/lib/data/tours";
import WebGLHero from "@/components/3d/WebGLHero";
import HorizontalScrollGallery from "@/components/sections/HorizontalScrollGallery";
import {
  MagneticButton,
  TextReveal,
  ScrollReveal,
  ParallaxImage,
} from "@/components/animations/AdvancedAnimations";
import { featuredDestinations } from "@/lib/data/tours";

export default function Home() {
  const whatsappNumber = "+6281234567890";

  return (
    <div className="overflow-hidden">
      {/* WebGL Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <WebGLHero />

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-6"
          >
            <TextReveal
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-tight"
              delay={0.3}
            >
              Sunda Bali Tour
            </TextReveal>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light max-w-3xl mx-auto"
            >
              Private Driver & Custom Tour Experience in Bali
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto"
            >
              Where warm Sunda hospitality meets the enchanting beauty of Bali
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagneticButton>
                  <Button
                    size="lg"
                    className="gradient-primary text-white text-lg px-8 py-6 group"
                  >
                    Book Now via WhatsApp
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </MagneticButton>
              </a>
              <Link href="/tours">
                <MagneticButton>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                  >
                    View Tour Packages
                  </Button>
                </MagneticButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/70 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <TextReveal className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                Our Services
              </TextReveal>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Tailored experiences designed for your perfect Bali adventure
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <ServiceCard
              icon={Car}
              title="Private Driver"
              description="Comfortable air-conditioned vehicles with experienced, friendly English-speaking drivers"
              delay={0}
            />
            <ServiceCard
              icon={Map}
              title="Custom Itinerary"
              description="Create your perfect day - we'll take you wherever you want to go in Bali"
              delay={0.1}
            />
            <ServiceCard
              icon={Sparkles}
              title="Hidden Gems"
              description="Discover secret spots and local favorites that tourists rarely find"
              delay={0.2}
            />
            <ServiceCard
              icon={Heart}
              title="Airport Transfer"
              description="Hassle-free pickup and drop-off service for a smooth start to your journey"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Gallery - Featured Destinations */}
      <HorizontalScrollGallery destinations={featuredDestinations} />

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              What Travelers Say
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of happy travelers who discovered Bali with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                name={testimonial.name}
                location={testimonial.location}
                rating={testimonial.rating}
                comment={testimonial.comment}
                image={testimonial.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <TextReveal className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                What Travelers Say
              </TextReveal>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Join thousands of happy travelers who discovered Bali with us
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                name={testimonial.name}
                location={testimonial.location}
                rating={testimonial.rating}
                comment={testimonial.comment}
                image={testimonial.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Parallax */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&auto=format&fit=crop&q=80"
          alt="Bali Beach"
          speed={0.5}
        />
        <div className="absolute inset-0 bg-black/60 z-1" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center text-white space-y-6">
              <TextReveal className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold">
                Ready for Your Bali Adventure?
              </TextReveal>
              <p className="text-lg sm:text-xl max-w-2xl mx-auto text-white/90">
                Let us create an unforgettable journey tailored just for you
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MagneticButton>
                    <Button
                      size="lg"
                      className="bg-[#25D366] hover:bg-[#20BD5A] text-white text-lg px-8 py-6"
                    >
                      Chat on WhatsApp
                    </Button>
                  </MagneticButton>
                </a>
                <Link href="/contact">
                  <MagneticButton>
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                    >
                      Contact Us
                    </Button>
                  </MagneticButton>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
