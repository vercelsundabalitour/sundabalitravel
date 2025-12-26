"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { FaWhatsapp, FaUniversity, FaMoneyBillWave } from "react-icons/fa";
import { SiWise } from "react-icons/si";

export default function BookingPage() {
  const searchParams = useSearchParams();
  const tourName = searchParams.get("tourName") || "";
  const basePrice = parseFloat(searchParams.get("basePrice") || "0");

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    amountOfPeople: 1,
    from: "",
    to: "",
    email: "",
    message: "",
  });

  const [totalAmount, setTotalAmount] = useState(0);
  const whatsappNumber = "6285724336853";

  useEffect(() => {
    setTotalAmount(basePrice * formData.amountOfPeople);
  }, [basePrice, formData.amountOfPeople]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `🎫 NEW TOUR BOOKING REQUEST\n\n📋 Tour Details:\nTour: ${tourName}\n\n👤 Customer Information:\nName: ${
      formData.name
    } ${formData.surname}\nEmail: ${
      formData.email
    }\n\n📅 Travel Details:\nNumber of People: ${
      formData.amountOfPeople
    }\nFrom: ${formData.from}\nTo: ${
      formData.to
    }\n\n💰 Price Calculation:\nBase Price: $${basePrice} per person\nTotal Amount: $${totalAmount} (${
      formData.amountOfPeople
    } × $${basePrice})\n\n💬 Message:\n${
      formData.message || "No additional message"
    }\n\nPlease confirm availability and send booking confirmation. Thank you!`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "amountOfPeople" ? parseInt(value) || 1 : value,
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
          {tourName && (
            <p className="text-2xl text-blue-600 font-semibold mb-2">
              {tourName}
            </p>
          )}
          <p className="text-xl text-gray-600">
            Complete the form below to confirm your booking
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
                  First Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Surname *
                </label>
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Amount of People *
                </label>
                <input
                  type="number"
                  name="amountOfPeople"
                  value={formData.amountOfPeople}
                  onChange={handleChange}
                  required
                  min="1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="1"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  From (Date) *
                </label>
                <input
                  type="date"
                  name="from"
                  value={formData.from}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  To (Date) *
                </label>
                <input
                  type="date"
                  name="to"
                  value={formData.to}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Any special requests or questions..."
                />
              </div>

              {/* Total Amount Display */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 border-2 border-blue-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-semibold">
                    Base Price:
                  </span>
                  <span className="text-xl font-bold text-gray-900">
                    ${basePrice} × {formData.amountOfPeople}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t-2 border-blue-200">
                  <span className="text-lg font-bold text-gray-900">
                    Total Amount:
                  </span>
                  <span className="text-3xl font-bold text-blue-600">
                    ${totalAmount}
                  </span>
                </div>
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
