'use client';

import { useState, useEffect, useRef } from 'react';
import { X, Search } from 'lucide-react';
import Fuse from 'fuse.js';
import Link from 'next/link';

const searchData = [
  { title: 'Heat Pumps', category: 'Services', path: '/heat-pumps/overview' },
  { title: 'Viva Heat Pumps', category: 'Services', path: '/heat-pumps/viva' },
  { title: 'Neopower Heat Pumps', category: 'Services', path: '/heat-pumps/neopower' },
  { title: 'Emerald Energy Heat Pumps', category: 'Services', path: '/heat-pumps/emerald' },
  { title: 'Solar & Battery Systems', category: 'Services', path: '/solar-battery' },
  { title: 'Water Filtration', category: 'Services', path: '/water-filtration' },
  { title: 'Heating & Cooling', category: 'Services', path: '/heating-cooling' },
  { title: 'About Us', category: 'Company', path: '/about-us' },
  { title: 'Our Process', category: 'Company', path: '/our-process' },
  { title: 'FAQ', category: 'Company', path: '/faq' },
  { title: 'Contact Us', category: 'Company', path: '/contact-us' },
  { title: 'Quote Request', category: 'Company', path: '/quote-request' },
  { title: 'Energy Saving Guides', category: 'Resources', path: '/resources' },
  { title: 'Why Heat Pumps Save You Money', category: 'Resources', path: '/resources/why-heat-pumps' },
  { title: 'Govt Rebates Explained', category: 'Resources', path: '/resources/rebates' },
  { title: 'Case Studies', category: 'Resources', path: '/resources/case-studies' },
];

export default function SearchOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(searchData);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const fuse = new Fuse(searchData, {
      keys: ['title', 'category'],
      threshold: 0.3,
    });
    const searchResults = fuse.search(query).map(result => result.item);
    setResults(searchResults);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white">
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-textDark">Search</h2>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
          <X size={24} className="text-textDark" />
        </button>
      </div>
      <div className="p-6 border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services, resources, and more..."
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        {results.length === 0 && query ? (
          <p className="text-gray-500 text-center py-12">No results found for "{query}"</p>
        ) : (
          <div className="space-y-2">
            {results.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                onClick={onClose}
                className="block p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="text-sm text-primary-600 font-semibold mb-1">{item.category}</div>
                <div className="text-textDark font-medium">{item.title}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
