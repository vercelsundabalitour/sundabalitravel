"use client";

import { motion } from "framer-motion";
import { AlertCircle, Clock, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function CancellationPolicyPage() {
  const whatsappNumber = "6285724336853";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 pt-28 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cancellation Policy
          </h1>
          <p className="text-xl text-gray-600">
            Please read our cancellation terms carefully
          </p>
        </motion.div>

        {/* Main Policy Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="text-4xl text-red-600" />
            <h2 className="text-2xl font-bold text-gray-900">
              Cancellation Charge
            </h2>
          </div>

          <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Rp 200,000 per person
            </h3>
            <p className="text-gray-700">
              A cancellation fee of Rp 200,000 will be charged for each person
              if you cancel your booking, regardless of the cancellation timing.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">
                  Notify Us Early
                </h3>
                <p className="text-gray-600 text-sm">
                  Please inform us as soon as possible if you need to cancel
                  your booking. Early notification helps us manage our schedule
                  better.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">
                  Rescheduling Option
                </h3>
                <p className="text-gray-600 text-sm">
                  If possible, consider rescheduling your tour instead of
                  canceling. We're happy to work with you to find a better date
                  that suits your schedule.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">
                  Special Circumstances
                </h3>
                <p className="text-gray-600 text-sm">
                  For emergencies or special circumstances (medical issues,
                  flight cancellations, etc.), please contact us directly. We
                  will review your situation on a case-by-case basis.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Payment Terms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Clock className="text-4xl text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">
              Payment & Refund Process
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-2">
                If You Paid 30% Deposit
              </h3>
              <p className="text-gray-600 text-sm">
                The cancellation fee of Rp 200,000 per person will be deducted
                from your deposit. Any remaining amount will be refunded to you
                within 3-5 business days.
              </p>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-2">
                If You Haven't Paid Yet
              </h3>
              <p className="text-gray-600 text-sm">
                The cancellation fee of Rp 200,000 per person will be charged
                for processing the cancellation and compensating for the
                reserved booking.
              </p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-2">Refund Timeline</h3>
              <p className="text-gray-600 text-sm">
                Refunds (if applicable after deducting the cancellation fee)
                will be processed within 3-5 business days to your original
                payment method (bank transfer or Wise).
              </p>
            </div>
          </div>
        </motion.div>

        {/* How to Cancel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How to Cancel Your Booking
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FaWhatsapp className="text-2xl text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 mb-2">
                  Via WhatsApp (Fastest)
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Send us a message on WhatsApp with your booking details and
                  cancellation request. We'll process it immediately.
                </p>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    "Hi! I need to cancel my booking. Here are my details:"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <FaWhatsapp className="text-xl" />
                  Contact via WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="text-2xl text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 mb-2">Via Email</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Send an email to:{" "}
                  <a
                    href="mailto:sundabalitour@gmail.com"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    sundabalitour@gmail.com
                  </a>
                </p>
                <p className="text-gray-600 text-sm">
                  Include your booking details, tour date, and reason for
                  cancellation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="text-2xl text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 mb-2">Via Phone</h3>
                <p className="text-gray-600 text-sm">
                  Call us at:{" "}
                  <a
                    href={`tel:+${whatsappNumber}`}
                    className="text-purple-600 hover:underline font-semibold"
                  >
                    +62 857-2433-6853
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-xl p-8 text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Important Notes</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-xl">•</span>
              <span>
                The cancellation fee is non-negotiable and applies to all
                bookings
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl">•</span>
              <span>
                No-shows (not showing up without prior cancellation) will result
                in full payment being charged
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl">•</span>
              <span>
                Weather-related cancellations initiated by us will result in a
                full refund or free rescheduling
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl">•</span>
              <span>
                We recommend purchasing travel insurance to protect against
                unforeseen circumstances
              </span>
            </li>
          </ul>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8"
        >
          <Link
            href="/"
            className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
