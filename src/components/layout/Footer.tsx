import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bgDark text-textLight py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Trigger Group</h3>
            <p className="text-gray-400 mb-6">
              Premium plumbing, electrical and energy solutions for Melbourne homes since 2012.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors text-2xl">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors text-2xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors text-2xl">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors text-2xl">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-textLight transition-colors">Home</Link></li>
              <li><Link href="/about-us" className="text-gray-400 hover:text-textLight transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-textLight transition-colors">Services</Link></li>
              <li><Link href="/contact-us" className="text-gray-400 hover:text-textLight transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><Link href="/heat-pumps/overview" className="text-gray-400 hover:text-textLight transition-colors">Heat Pumps</Link></li>
              <li><Link href="/solar-battery" className="text-gray-400 hover:text-textLight transition-colors">Solar & Battery</Link></li>
              <li><Link href="/water-filtration" className="text-gray-400 hover:text-textLight transition-colors">Water Filtration</Link></li>
              <li><Link href="/heating-cooling" className="text-gray-400 hover:text-textLight transition-colors">Heating & Cooling</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li>📞 (03) 9100 1214</li>
              <li>📍 Melbourne, VIC</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500">
          <p>© 2024 Trigger Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
