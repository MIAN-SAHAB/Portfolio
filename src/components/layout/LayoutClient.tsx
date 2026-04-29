"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import LoadingScreen from "@/components/ui/LoadingScreen";
import HireMeModal from "@/components/layout/HireMeModal";
import ContactModal from "@/components/layout/ContactModal";

// Create context to control modals from any page
import { createContext, useContext } from "react";

interface ModalContextType {
  openHireMe: () => void;
  openContact: () => void;
}

export const ModalContext = createContext<ModalContextType>({
  openHireMe: () => {},
  openContact: () => {},
});

export const useModals = () => useContext(ModalContext);

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        openHireMe: () => setIsHireMeOpen(true),
        openContact: () => setIsContactOpen(true)
      }}
    >
      <LoadingScreen />
      <CustomCursor />

      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </div>

      <HireMeModal isOpen={isHireMeOpen} onClose={() => setIsHireMeOpen(false)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </ModalContext.Provider>
  );
}
