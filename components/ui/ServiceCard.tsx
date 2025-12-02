"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group h-full"
    >
      <Card className="h-full relative overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] hover:shadow-[0_8px_48px_0_rgba(0,0,0,0.15)]">
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Animated border glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-xl" />
        </div>

        <CardContent className="relative p-6 sm:p-8 flex flex-col items-center text-center space-y-4 sm:space-y-6">
          {/* Icon container with enhanced glassmorphism */}
          <motion.div
            whileHover={{ rotate: 360, scale: 1.15 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative w-16 h-16 sm:w-20 sm:h-20"
          >
            {/* Glow effect behind icon */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/50 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

            {/* Icon background with morphglass */}
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary via-primary/90 to-primary/80 shadow-[0_8px_24px_0_rgba(var(--primary-rgb,99,102,241),0.3)] group-hover:shadow-[0_12px_32px_0_rgba(var(--primary-rgb,99,102,241),0.5)] transition-shadow duration-500 flex items-center justify-center backdrop-blur-sm border border-white/20">
              <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white relative z-10" />
            </div>
          </motion.div>

          <h3 className="text-xl sm:text-2xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>

          <p className="text-muted-foreground group-hover:text-foreground/80 text-sm sm:text-base leading-relaxed transition-colors duration-300">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
