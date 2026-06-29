'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Heat Pumps',
    description: 'Efficient hot water heating that saves you money',
    color: 'from-primary-500 to-primary-700',
    slug: '/heat-pumps/overview',
    image: '/hotwaterheatpumps.png'
  },
  {
    title: 'Solar & Battery',
    description: 'Harness the sun\'s power for your home',
    color: 'from-secondary-500 to-secondary-700',
    slug: '/solar-battery',
    image: '/solarandbatterysystem.png'
  },
  {
    title: 'Water Filtration',
    description: 'Clean, safe water for your whole home',
    color: 'from-accent-500 to-accent-700',
    slug: '/water-filtration',
    image: '/waterfilteration.png'
  },
  {
    title: 'Heating & Cooling',
    description: 'Year-round comfort for your family',
    color: 'from-primary-600 to-secondary-600',
    slug: '/heating-cooling',
    image: '/heatingandcooling.png'
  }
];

const partners = [
  { name: 'BPC', logo: '/bpc.png' },
  { name: 'Energy Safe Vic', logo: '/energystate.png' },
  { name: 'Solar Vic', logo: '/solarvic.png' },
  { name: 'Emerald', logo: '/emerald.png' },
  { name: 'Neopower', logo: '/neopower.png' },
  { name: 'Viva', logo: '/viva.png' }
];

const whyUs = [
  { title: 'Quality First', description: 'We use only the best materials and brands', icon: '✅' },
  { title: 'Expert Care', description: 'Our team is fully licenced and insured', icon: '👨‍🔧' },
  { title: 'Real Results', description: '1000+ happy customers and counting', icon: '⭐' }
];

const process = [
  { step: 1, title: 'Enquiry', icon: '📞' },
  { step: 2, title: 'Quote', icon: '📝' },
  { step: 3, title: 'Installation', icon: '🔧' },
  { step: 4, title: 'Aftercare', icon: '🤝' }
];

const testimonials = [
  { quote: 'Trigger Group did an amazing job installing our heat pump! Professional, efficient, and great value for money.', name: 'Sarah M.' },
  { quote: 'Our solar system has exceeded our expectations. We\'re saving hundreds on electricity bills!', name: 'John D.' },
  { quote: 'Friendly team, clean work, and they even cleaned up afterwards. Highly recommend!', name: 'Emma L.' }
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const whyUsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll('.animate-element'),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out' }
      );
    }

    // Services grid
    if (servicesRef.current) {
      gsap.fromTo(
        servicesRef.current.querySelectorAll('.service-card'),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    // Why us
    if (whyUsRef.current) {
      gsap.fromTo(
        whyUsRef.current.querySelectorAll('.why-item'),
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: whyUsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    // Process timeline
    if (processRef.current) {
      gsap.fromTo(
        processRef.current.querySelectorAll('.process-step'),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: processRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    // Testimonials
    if (testimonialsRef.current) {
      gsap.fromTo(
        testimonialsRef.current.querySelectorAll('.testimonial-card'),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full min-h-[calc(100vh-5rem)] bg-bgDark text-textLight flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-transparent to-secondary-500/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-6 z-10 text-center">
          <h1 className="animate-element text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Smarter Energy. Better Homes.
             
          </h1>

          <p className="animate-element text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
            We deliver premium plumbing, electrical & energy solutions that save you money, reduce your carbon footprint, and make your home more comfortable.
          </p>

          <div className="animate-element flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-accent-500 text-bgDark font-bold rounded-lg hover:bg-accent-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent-500/25">
              Get a Free Quote
            </button>
            <button className="px-8 py-4 border-2 border-textLight text-textLight font-semibold rounded-lg hover:bg-textLight hover:text-bgDark transition-all duration-300">
              Call (03) 9100 1214
            </button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-textDark">Our Partners</h2>
          <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="hover:opacity-80 transition-opacity duration-300"
              >
                <img src={partner.logo} alt={partner.name} className="h-12 md:h-16 w-auto object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section ref={servicesRef} className="py-20 bg-bgLight">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div key={i} className="service-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button className="text-primary-600 font-semibold hover:text-primary-700 flex items-center gap-2">
                    Learn more →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trigger Group */}
      <section ref={whyUsRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="h-96 rounded-xl overflow-hidden"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="/whytriggerus.png" alt="Why Choose Trigger Group" className="w-full h-full object-cover" />
            </motion.div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Choose Trigger Group?</h2>
              <div className="space-y-8">
                {whyUs.map((item, i) => (
                  <div key={i} className="why-item flex items-start gap-4">
                    <div className="text-4xl">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section ref={processRef} className="py-20 bg-bgLight">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Process
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-8">
            {process.map((item, i) => (
              <div key={i} className="process-step text-center flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-primary-100 flex items-center justify-center text-5xl mb-4 border-4 border-primary-200">
                  {item.icon}
                </div>
                <div className="font-bold text-xl mb-1">Step {item.step}</div>
                <div className="text-gray-600">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Our Customers Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="testimonial-card bg-bgLight p-8 rounded-xl shadow-lg">
                <div className="text-yellow-500 text-3xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="font-semibold text-lg">— {testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zip Pay */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Payment Options</h2>
            <p className="text-xl mb-6 opacity-90">Pay later with Zip Pay. No interest, no hidden fees.</p>
            <div className="text-7xl font-bold">💳</div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-bgDark text-textLight">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Get a free, no-obligation quote today and see how much you could save with Trigger Group.
            </p>
            <button className="px-10 py-5 bg-accent-500 text-bgDark font-bold rounded-lg hover:bg-accent-400 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
              Get Your Free Quote Now
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
