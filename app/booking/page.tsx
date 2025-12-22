"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaUniversity, FaMoneyBillWave } from "react-icons/fa";
import { SiWise } from "react-icons/si";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    pax: "",
    hotel: "",
    pickupTime: "",
    tourType: "",
  });

  const whatsappNumber = "6285724336853";

  const pickupTimes = [
    { value: "02:00", label: "2:00 AM (Jeep Tour Only)" },
    { value: "02:30", label: "2:30 AM (Jeep Tour Only)" },
    { value: "06:00", label: "6:00 AM" },
    { value: "06:30", label: "6:30 AM" },
    { value: "07:00", label: "7:00 AM" },
    { value: "07:30", label: "7:30 AM" },
    { value: "08:00", label: "8:00 AM" },
    { value: "08:30", label: "8:30 AM" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi! I would like to book a tour:\n\nName: ${formData.name}\nNumber of Pax: ${formData.pax}\nHotel Name: ${formData.hotel}\nPickup Time: ${formData.pickupTime}\nTour Type: ${formData.tourType}\n\nPlease confirm availability and send payment details. Thank you!`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 pt-28 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your Bali Adventure
          </h1>
          <p className="text-xl text-gray-600">
            Easy booking process with flexible payment options
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaWhatsapp className="text-4xl text-green-500" />
              <h2 className="text-2xl font-bold text-gray-900">Booking Form</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Passengers *
                </label>
                <input
                  type="number"
                  name="pax"
                  value={formData.pax}
                  onChange={handleChange}
                  required
                  min="1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 2"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Hotel Name *
                </label>
                <input
                  type="text"
                  name="hotel"
                  value={formData.hotel}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your hotel name in Bali"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Pickup Time *
                </label>
                <select
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select pickup time</option>
                  {pickupTimes.map((time) => (
                    <option key={time.value} value={time.label}>
                      {time.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tour Type *
                </label>
                <input
                  type="text"
                  name="tourType"
                  value={formData.tourType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., UNESCO Heritage Tour"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <FaWhatsapp className="text-2xl" />
                Send Booking via WhatsApp
              </button>
            </form>
          </motion.div>

          {/* Payment Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Bank Transfer */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <FaUniversity className="text-4xl text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Bank Transfer
                </h2>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-3">
                    Bank Central Asia (BCA)
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Account Name:</span>
                      <span className="font-semibold">Muhtar Parid Kamil</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Account Number:</span>
                      <span className="font-semibold font-mono">
                        1831433855
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Swift Code:</span>
                      <span className="font-semibold">CENAIDJA</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <SiWise className="text-2xl text-purple-600" />
                    <h3 className="font-bold text-gray-800">Wise Transfer</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-semibold">
                        sundabalitour@gmail.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <FaMoneyBillWave className="text-4xl text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Payment Terms
                </h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      Deposit 30%
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Pay 30% deposit to secure your booking
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      Full Payment at Pickup
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Pay the remaining 70% when our driver picks you up
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold">Note:</span> After booking, we
                    will send you payment confirmation and tour details via
                    WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl shadow-xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
          <p className="text-lg mb-6">
            Our team is available 24/7 to assist you with your booking
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            <FaWhatsapp className="text-2xl" />
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  );
}
