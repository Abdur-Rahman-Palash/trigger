'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, X, Menu, ChevronDown } from 'lucide-react';
import CartDrawer from './CartDrawer';
import SearchOverlay from './SearchOverlay';
import { useCartStore } from '@/lib/store';

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cartCount = useCartStore((state) => state.items.reduce((sum, item) => sum + item.quantity, 0));

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(!isSearchOpen);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-bgDark/95 backdrop-blur-md border-b border-white/10 font-inter">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-textLight hover:text-primary-400 transition-colors">
              Trigger Group
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-textLight hover:text-primary-400 transition-colors">
                Home
              </Link>

              {/* Services Dropdown (Mega Menu) */}
              <div
                className="relative group"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="text-textLight hover:text-primary-400 transition-colors flex items-center gap-1">
                  Services <ChevronDown size={16} />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-white shadow-2xl rounded-xl opacity-100 visible transition-all duration-300 transform translate-y-0">
                    <div className="grid grid-cols-3 gap-8 p-8">
                      <div>
                        <h3 className="font-bold text-textDark mb-4">Heat Pumps</h3>
                        <ul className="space-y-2">
                          <li><Link href="/heat-pumps/overview" className="text-gray-600 hover:text-primary-600">Heat Pump Overview</Link></li>
                          <li><Link href="/heat-pumps/viva" className="text-gray-600 hover:text-primary-600">Viva</Link></li>
                          <li><Link href="/heat-pumps/neopower" className="text-gray-600 hover:text-primary-600">Neopower</Link></li>
                          <li><Link href="/heat-pumps/emerald" className="text-gray-600 hover:text-primary-600">Emerald Energy</Link></li>
                          <li><Link href="/heat-pumps/rates" className="text-gray-600 hover:text-primary-600">Supply & Install Rates</Link></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-textDark mb-4">Solar & Energy</h3>
                        <ul className="space-y-2">
                          <li><Link href="/solar-battery" className="text-gray-600 hover:text-primary-600">Solar & Battery Systems</Link></li>
                          <li><Link href="/water-filtration" className="text-gray-600 hover:text-primary-600">Whole Home Water Filtration</Link></li>
                          <li><Link href="/heating-cooling" className="text-gray-600 hover:text-primary-600">Heating & Cooling</Link></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-textDark mb-4">Featured</h3>
                        <div className="space-y-4">
                          <Link href="/resources/why-heat-pumps" className="block bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors">
                            <div className="h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded mb-2"></div>
                            <p className="text-sm font-semibold text-textDark">Why Heat Pumps Save You $$</p>
                          </Link>
                          <Link href="/resources/rebates" className="block bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors">
                            <div className="h-24 bg-gradient-to-br from-accent-400 to-accent-600 rounded mb-2"></div>
                            <p className="text-sm font-semibold text-textDark">Govt Rebates Explained</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* About Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
              >
                <button className="text-textLight hover:text-primary-400 transition-colors flex items-center gap-1">
                  About <ChevronDown size={16} />
                </button>
                {isAboutOpen && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-lg opacity-100 visible transition-all duration-300 transform translate-y-0">
                    <ul className="p-4 space-y-2">
                      <li><Link href="/about-us" className="block text-gray-600 hover:text-primary-600 py-1">About Us</Link></li>
                      <li><Link href="/our-process" className="block text-gray-600 hover:text-primary-600 py-1">Our Process</Link></li>
                      <li><Link href="/faq" className="block text-gray-600 hover:text-primary-600 py-1">FAQ</Link></li>
                      <li><Link href="/testimonials" className="block text-gray-600 hover:text-primary-600 py-1">Reviews / Testimonials</Link></li>
                      <li><Link href="/contact-us" className="block text-gray-600 hover:text-primary-600 py-1">Contact Us</Link></li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <button className="text-textLight hover:text-primary-400 transition-colors flex items-center gap-1">
                  Resources <ChevronDown size={16} />
                </button>
                {isResourcesOpen && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-lg opacity-100 visible transition-all duration-300 transform translate-y-0">
                    <ul className="p-4 space-y-2">
                      <li><Link href="/resources" className="block text-gray-600 hover:text-primary-600 py-1">Energy Saving Guides</Link></li>
                      <li><Link href="/resources/calculator" className="block text-gray-600 hover:text-primary-600 py-1">Rebate & Finance Calculator</Link></li>
                      <li><Link href="/resources/case-studies" className="block text-gray-600 hover:text-primary-600 py-1">Case Studies</Link></li>
                    </ul>
                  </div>
                )}
              </div>

              <Link href="/shop" className="text-textLight hover:text-primary-400 transition-colors">
                Shop
              </Link>
            </div>

            {/* Utility Icons & CTAs */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-textLight hover:text-primary-400 hover:bg-white/10 rounded-full transition-all"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              {/* <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-textLight hover:text-primary-400 hover:bg-white/10 rounded-full transition-all"
                aria-label="Cart"
              >
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent-500 text-bgDark text-xs font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button> */}
              <Link href="/signin" className="p-2 text-textLight hover:text-primary-400 hover:bg-white/10 rounded-full transition-all">
                <User size={20} />
              </Link>
              <Link href="/quote-request" className="px-6 py-2 bg-accent-500 text-bgDark font-semibold rounded-lg hover:bg-accent-400 transition-colors">
                Get a Free Quote
              </Link>
              <a href="tel:0391001214" className="px-6 py-2 border border-textLight text-textLight font-semibold rounded-lg hover:bg-textLight hover:text-bgDark transition-colors">
                📞 Call Now
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-textLight"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-bgDark border-t border-white/10">
            <div className="container mx-auto px-6 py-6 space-y-4">
              <Link href="/" className="block text-textLight text-lg font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link href="/services" className="block text-textLight text-lg font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
              <Link href="/about-us" className="block text-textLight text-lg font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
              <Link href="/resources" className="block text-textLight text-lg font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Resources</Link>
              <Link href="/shop" className="block text-textLight text-lg font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
              <Link href="/quote-request" className="block text-textLight text-lg font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Get a Quote</Link>
              <Link href="/contact-us" className="block text-textLight text-lg font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            </div>
          </div>
        )}
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
