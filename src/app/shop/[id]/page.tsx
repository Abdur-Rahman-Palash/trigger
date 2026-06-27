'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { X, User, Mail, Phone, MapPin, Send, ArrowLeft } from 'lucide-react';

const products = [
  { id: '1', name: 'Heat Pump Maintenance Kit',  image: '/hotwaterheatpumps.png', description: 'Complete maintenance kit for your heat pump system. Includes all essential tools and cleaning supplies to keep your system running efficiently.' },
  { id: '2', name: 'Water Filter Replacement',  image: '/waterfilteration.png', description: 'High-quality water filter replacement cartridges for your home water filtration system. Ensures clean and safe drinking water for your family.' },
  { id: '3', name: 'Smart Thermostat', image: '/heatingandcooling.png', description: 'WiFi-enabled smart thermostat with energy-saving features. Control your home temperature from anywhere using your smartphone.' },
  { id: '4', name: 'Solar Panel Cleaner',  image: '/solarandbatterysystem.png', description: 'Professional-grade solar panel cleaning solution. Removes dirt, dust, and debris to maximize your solar panel efficiency.' },
  { id: '5', name: 'Energy Monitor',  image: '/solarvic.png', description: 'Real-time energy monitoring device. Track your home energy consumption and identify opportunities to reduce your electricity bills.' },
  { id: '6', name: 'Plumbing Tool Set',  image: '/emerald.png', description: 'Comprehensive plumbing tool set for DIY repairs and maintenance. Includes wrenches, pliers, pipe cutters, and more.' },
];

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [isInterestModalOpen, setIsInterestModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const product = products.find(p => p.id === params.id);

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <button
            onClick={() => router.push('/shop')}
            className="text-primary-600 hover:underline"
          >
            Return to Shop
          </button>
        </div>
      </main>
    );
  }

  const handleInterested = () => {
    setIsInterestModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Interest form submitted:', { product, ...formData });
    // Handle form submission here
    setIsInterestModalOpen(false);
    setFormData({ name: '', email: '', phone: '', address: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-bgDark text-textLight">
        <div className="container mx-auto px-6">
          <button
            onClick={() => router.push('/shop')}
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Back to Shop
          </button>
          <h1 className="text-5xl font-bold mb-6">{product.name}</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Quality products for your home energy needs
          </p>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-20 bg-bgLight">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img src={product.image} alt={product.name} className="w-full h-96 object-cover" />
              </div>
              <div className="md:w-1/2 p-8">
                <h2 className="text-3xl font-bold text-textDark mb-4">{product.name}</h2>
                
                <p className="text-gray-700 leading-relaxed mb-8">{product.description}</p>
                <button
                  onClick={handleInterested}
                  className="w-full py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors text-lg"
                >
                  I'm Interested
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interest Form Modal */}
      {isInterestModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-textDark">I'm Interested</h2>
                <button
                  onClick={() => setIsInterestModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} className="text-gray-500" />
                </button>
              </div>

              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Product:</p>
                <p className="font-semibold text-textDark">{product.name}</p>
                
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Enter your address"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent text-sm font-semibold rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300"
                >
                  <Send size={18} />
                  Submit Interest
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
