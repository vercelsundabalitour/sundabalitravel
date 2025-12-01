"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Clock, DollarSign, MapPin, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { tourPackages, TourPackage } from "@/lib/data/tours";

const categories = ["All", "Adventure", "Culture", "Beach", "Nature", "Family"];

export default function ToursPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);
  const whatsappNumber = "+6281234567890";

  const filteredTours =
    selectedCategory === "All"
      ? tourPackages
      : tourPackages.filter((tour) => tour.category === selectedCategory);

  const handleBookNow = (tourTitle: string) => {
    const message = `Hi! I'm interested in booking the "${tourTitle}" tour package. Could you provide more details?`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&auto=format&fit=crop&q=80"
            alt="Bali Tours"
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
              Tour Packages
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Discover unforgettable experiences tailored to your perfect Bali
              adventure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border sticky top-20 z-40 backdrop-blur-sm bg-background/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category
                    ? "gradient-primary text-white"
                    : ""
                }
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredTours.map((tour, index) => (
              <motion.div
                key={tour.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-primary">
                        {tour.category}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                      {tour.title}
                    </h3>

                    <p className="text-muted-foreground line-clamp-2">
                      {tour.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-primary font-semibold">
                        <DollarSign className="w-4 h-4" />
                        <span>{tour.price}</span>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button
                        onClick={() => setSelectedTour(tour)}
                        variant="outline"
                        className="flex-1"
                      >
                        View Details
                      </Button>
                      <Button
                        onClick={() => handleBookNow(tour.title)}
                        className="flex-1 gradient-primary text-white"
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredTours.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-xl text-muted-foreground">
                No tours found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Tour Details Modal */}
      <Dialog open={!!selectedTour} onOpenChange={() => setSelectedTour(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedTour && (
            <>
              <DialogHeader>
                <div className="relative h-64 -mx-6 -mt-6 mb-4">
                  <Image
                    src={selectedTour.image}
                    alt={selectedTour.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <DialogTitle className="text-3xl font-heading">
                  {selectedTour.title}
                </DialogTitle>
                <DialogDescription className="text-base">
                  {selectedTour.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>{selectedTour.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-primary">
                      {selectedTour.price}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>{selectedTour.category}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-heading font-semibold text-lg mb-2">
                    About This Tour
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedTour.longDescription}
                  </p>
                </div>

                <div>
                  <h4 className="font-heading font-semibold text-lg mb-3">
                    Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedTour.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading font-semibold text-lg mb-3">
                    What's Included
                  </h4>
                  <ul className="space-y-2">
                    {selectedTour.included.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={() => handleBookNow(selectedTour.title)}
                  className="w-full gradient-primary text-white text-lg py-6"
                  size="lg"
                >
                  Book This Tour via WhatsApp
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
