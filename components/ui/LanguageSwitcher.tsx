"use client";

import { Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useUIStore } from "@/store/uiStore";
import { MagneticButton } from "@/components/animations/AdvancedAnimations";

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useUIStore();

  const languages = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "id", label: "Indonesia", flag: "🇮🇩" },
  ];

  const currentLang = languages.find((lang) => lang.code === language);

  return (
    <div className="relative">
      <MagneticButton>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
          aria-label="Change language"
        >
          <Globe className="w-4 h-4" />
          <span className="text-sm font-medium">{currentLang?.flag}</span>
        </button>
      </MagneticButton>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-40 bg-background border border-border rounded-lg shadow-lg overflow-hidden z-50"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as "en" | "id");
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2.5 text-left text-sm flex items-center gap-2 hover:bg-muted transition-colors ${
                  language === lang.code ? "bg-muted/50" : ""
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
