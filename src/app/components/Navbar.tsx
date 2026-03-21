import React, { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import svgPaths from "../../imports/svg-paths";
import logo from "../../assets/logo.png";

function LogoComponent() {
  return (
    <div className="flex items-center justify-center">
      <img
        src={logo}
        alt="Ateion Logo"
        className="h-[40px] md:h-[60px] w-auto object-contain"
      />
    </div>
  );
}

function NavButton({ 
  children, 
  onClick 
}: { 
  children: React.ReactNode; 
  onClick?: () => void;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <Button
        variant="secondary"
        className="h-[34px] px-[20px] rounded-full bg-[rgba(235,235,235,0.8)] hover:bg-[rgba(215,215,215,0.95)] text-[#292929] font-bold text-[13px] font-['Manrope']"
      >
        {children}
      </Button>
    </motion.div>
  );
}

function NavLinks() {
  const navigate = useNavigate();
  
  return (
    <div className="flex gap-[16px] items-center">
      <NavButton onClick={() => navigate('/')}>
        About Us
      </NavButton>
      <NavButton onClick={() => navigate('/')}>
        Workshops
      </NavButton>
      <NavButton onClick={() => navigate('/gco')}>
        Global Olympiad
      </NavButton>
      <NavButton onClick={() => navigate('/')}>
        Resources
      </NavButton>
    </div>
  );
}

function NavActions() {
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(251, 68, 68, 0.3)" }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate('/contact')}
    >
      <Button
        className="h-[36px] px-[20px] rounded-full bg-[#fb4444] hover:bg-[#ff5555] font-bold text-[13px] font-['Manrope']"
      >
        Get Connected
      </Button>
    </motion.div>
  );
}

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-[280px] bg-white z-50 md:hidden shadow-lg"
          >
            <div className="flex flex-col p-6 gap-4">
              <button
                onClick={onClose}
                className="self-end text-2xl text-gray-600"
                aria-label="Close menu"
              >
                ✕
              </button>
              <nav className="flex flex-col gap-3 mt-8">
                <Button variant="ghost" onClick={() => handleNavigate('/')} className="justify-start">
                  About Us
                </Button>
                <Button variant="ghost" onClick={() => handleNavigate('/')} className="justify-start">
                  Workshops
                </Button>
                <Button variant="ghost" onClick={() => handleNavigate('/gco')} className="justify-start">
                  Global Olympiad
                </Button>
                <Button variant="ghost" onClick={() => handleNavigate('/')} className="justify-start">
                  Resources
                </Button>
                <Button onClick={() => handleNavigate('/contact')} className="mt-4">
                  Get Connected
                </Button>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="flex items-center justify-between px-[24px] py-[20px] w-full max-w-[1280px] mx-auto">
          <button onClick={() => navigate('/')} aria-label="Go to homepage">
            <LogoComponent />
          </button>

          <div className="hidden md:block">
            <NavLinks />
          </div>

          <div className="hidden md:block">
            <NavActions />
          </div>

          <button
            className="md:hidden flex flex-col gap-[5px] p-2 z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
