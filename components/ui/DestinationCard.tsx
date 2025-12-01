"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";

interface DestinationCardProps {
  name: string;
  description: string;
  image: string;
  delay?: number;
}

export default function DestinationCard({
  name,
  description,
  image,
  delay = 0,
}: DestinationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="group cursor-pointer"
    >
      <Card className="overflow-hidden h-full border-0 shadow-xl">
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: delay + 0.2 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-heading font-bold text-white"
            >
              {name}
            </motion.h3>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: delay + 0.3 }}
              viewport={{ once: true }}
              className="text-white/90 text-sm sm:text-base"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
