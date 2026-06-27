'use client';

import Link from 'next/link';

const products = [
  { id: '1', name: 'Heat Pump Maintenance Kit',  image: '/hotwaterheatpumps.png', description: 'Complete maintenance kit for your heat pump system. Includes all essential tools and cleaning supplies to keep your system running efficiently.' },
  { id: '2', name: 'Water Filter Replacement',  image: '/waterfilteration.png', description: 'High-quality water filter replacement cartridges for your home water filtration system. Ensures clean and safe drinking water for your family.' },
  { id: '3', name: 'Smart Thermostat',  image: '/heatingandcooling.png', description: 'WiFi-enabled smart thermostat with energy-saving features. Control your home temperature from anywhere using your smartphone.' },
  { id: '4', name: 'Solar Panel Cleaner',  image: '/solarandbatterysystem.png', description: 'Professional-grade solar panel cleaning solution. Removes dirt, dust, and debris to maximize your solar panel efficiency.' },
  { id: '5', name: 'Energy Monitor',  image: '/solarvic.png', description: 'Real-time energy monitoring device. Track your home energy consumption and identify opportunities to reduce your electricity bills.' },
  { id: '6', name: 'Plumbing Tool Set',  image: '/emerald.png', description: 'Comprehensive plumbing tool set for DIY repairs and maintenance. Includes wrenches, pliers, pipe cutters, and more.' },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-bgDark text-textLight">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Shop</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Quality products for your home energy needs
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-bgLight">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/shop/${product.id}`}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer block"
              >
                <div className="h-48 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-textDark">{product.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
