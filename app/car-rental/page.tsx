"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp, FaCar, FaUsers, FaMapMarkerAlt } from "react-icons/fa";

interface CarOption {
  id: string;
  name: string;
  price: string;
  passengers: number;
  image: string;
  features: string[];
}

export default function CarRentalPage() {
  const whatsappNumber = "6285724336853";
  const [selectedCar, setSelectedCar] = useState<string>("");

  const carOptions: CarOption[] = [
    {
      id: "avanza",
      name: "Toyota Avanza (Latest Model)",
      price: "800,000",
      passengers: 4,
      image: "/cars/avanza.png",
      features: [
        "Latest model with air conditioning",
        "Comfortable for 4 passengers",
        "Professional English-speaking driver",
        "Fuel included",
        "Perfect for couples or small families",
      ],
    },
    {
      id: "hiace",
      name: "Toyota Hi-Ace",
      price: "1,200,000",
      passengers: 14,
      image: "/cars/hiace.png",
      features: [
        "Spacious for up to 14 passengers",
        "Air conditioned",
        "Professional driver",
        "Fuel included",
        "Ideal for group tours",
      ],
    },
    {
      id: "alphard",
      name: "Toyota Alphard",
      price: "2,500,000",
      passengers: 4,
      image: "/cars/alphard.jpg",
      features: [
        "Luxury MPV experience",
        "Premium comfort for 4 passengers",
        "Professional chauffeur",
        "Fuel included",
        "Perfect for VIP tours",
      ],
    },
    {
      id: "premio",
      name: "Premio Luxury",
      price: "3,500,000",
      passengers: 5,
      image: "/cars/premio.png",
      features: [
        "Ultimate luxury sedan",
        "Premium leather seats",
        "Professional chauffeur service",
        "Fuel included",
        "Exclusive VIP experience",
      ],
    },
  ];

  const handleBookCar = (carName: string) => {
    const message = `Hi! I'm interested in renting the ${carName} with driver. Can you provide more details and availability?`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-28 pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Car Rental with Driver
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Customize your own Bali adventure with our private car service
          </p>
          <p className="text-lg text-gray-500">
            Explore Bali at your own pace with a professional driver
          </p>
        </motion.div>

        {/* Coverage Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <FaMapMarkerAlt className="text-4xl text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Coverage Areas</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-3">
                Standard Coverage (Included)
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-gray-700">Kuta</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-gray-700">Denpasar</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-gray-700">Canggu</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-gray-700">South Bali</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-gray-700">Ubud</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-3">
                Outside Coverage
              </h3>
              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <p className="text-gray-700 mb-2">
                  <span className="font-bold">Additional Charge:</span> Rp
                  200,000
                </p>
                <p className="text-sm text-gray-600">
                  For destinations outside Kuta, Denpasar, Canggu, South Bali,
                  and Ubud areas
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Car Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {carOptions.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-64 bg-gray-200">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {car.name}
                </h3>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaUsers className="text-blue-500" />
                    <span className="text-sm">Up to {car.passengers} pax</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-blue-600">
                      Rp {car.price}
                    </span>
                    <span className="text-gray-500">/day</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3">
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {car.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleBookCar(car.name)}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-xl" />
                  Book {car.name}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big Car Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-xl p-8 text-white"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Need a Bigger Vehicle?
              </h3>
              <p className="text-lg opacity-90">
                Big car available for up to 30 passengers - Contact us for
                details
              </p>
            </div>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Hi! I need a big car for 30 passengers. Can you provide details?"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors whitespace-nowrap flex items-center gap-2"
            >
              <FaWhatsapp className="text-2xl" />
              Request Big Car
            </a>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Why Rent a Car with Driver?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🗺️</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">
                Complete Flexibility
              </h3>
              <p className="text-gray-600">
                Create your own itinerary and explore Bali at your own pace
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨‍✈️</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">
                Professional Drivers
              </h3>
              <p className="text-gray-600">
                English-speaking drivers who know Bali inside out
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">
                All-Inclusive Pricing
              </h3>
              <p className="text-gray-600">
                Fuel, driver, and parking fees all included in one price
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
