"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Users, Award, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Heart,
    title: "Warm Hospitality",
    description:
      "Experience genuine Sunda warmth and care in every interaction",
  },
  {
    icon: Users,
    title: "Local Expertise",
    description:
      "Native guides with deep knowledge of Bali's culture and hidden gems",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering exceptional experiences every time",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description:
      "Licensed, insured, and dedicated to your security and comfort",
  },
];

const timeline = [
  {
    year: "2018",
    title: "The Beginning",
    description:
      "Started as a small family-run tour service with one vehicle and a dream to share Bali's beauty",
  },
  {
    year: "2019",
    title: "Growing Together",
    description:
      "Expanded our fleet and team, serving over 500 happy travelers from around the world",
  },
  {
    year: "2021",
    title: "Digital Expansion",
    description:
      "Launched our online booking system and gained recognition for exceptional service",
  },
  {
    year: "2023",
    title: "Award Recognition",
    description:
      "Received the TripAdvisor Certificate of Excellence and expanded to specialized tours",
  },
  {
    year: "2024",
    title: "Today",
    description:
      "Serving 3000+ travelers annually with a team of 15+ experienced guides and drivers",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&auto=format&fit=crop",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&auto=format&fit=crop&q=80"
            alt="About Sunda Bali Tour"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white">
              About Us
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Where Sunda warmth meets Balinese beauty
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sunda Bali Tour was born from a simple passion: sharing the
                  incredible beauty and rich culture of Bali with travelers from
                  around the world, while bringing the warmth and hospitality of
                  Sunda traditions.
                </p>
                <p>
                  Founded by a Sundanese family who fell in love with Bali, we
                  understand what it means to be both a local and a traveler.
                  This unique perspective allows us to create experiences that
                  go beyond typical tourist routes, revealing the authentic soul
                  of Bali.
                </p>
                <p>
                  Every tour we offer is crafted with care, blending Sundanese
                  hospitality—known for its warmth, respect, and genuine
                  care—with deep knowledge of Bali's hidden treasures. We don't
                  just show you places; we help you feel the spirit of the
                  island.
                </p>
                <p>
                  Today, we're proud to be one of Bali's most trusted tour
                  operators, but we've never forgotten our roots. Whether you're
                  our first guest or our thousandth, you'll always be treated
                  like family.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&auto=format&fit=crop"
                alt="Our Team"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 sm:p-8 space-y-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full gradient-primary flex items-center justify-center mx-auto">
                      <value.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-heading font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our Journey
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to becoming Bali's trusted tour partner
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-12 border-l-2 border-primary/30 last:pb-0"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                    {item.year}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Memories We've Created
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Capturing moments of joy, adventure, and discovery
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
