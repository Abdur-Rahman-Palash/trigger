'use client';

import { useCartStore } from '@/lib/store';
import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { items, removeItem, updateQuantity, clearCart } = useCartStore();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`fixed inset-0 z-50 flex justify-end ${isOpen ? 'visible' : 'invisible'}`}>
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-50' : 'opacity-0'}`}
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div
        className={`relative w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-textDark">Your Cart</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X size={24} className="text-textDark" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-6">Your cart is empty</p>
                <Link href="/shop" onClick={onClose} className="inline-block px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-lg flex items-center justify-center text-white text-2xl">
                      🛒
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-textDark">{item.name}</h3>
                      <p className="text-primary-600 font-bold">${item.price.toFixed(2)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-auto text-red-500 hover:text-red-700"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="p-6 border-t border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <span className="text-textDark font-semibold">Total</span>
                <span className="text-textDark font-bold text-xl">${total.toFixed(2)}</span>
              </div>
              <button className="w-full py-3 bg-accent-500 text-bgDark font-bold rounded-lg hover:bg-accent-400 transition-colors mb-3">
                Checkout
              </button>
              <Link href="/shop" onClick={onClose} className="w-full block text-center py-3 border border-gray-300 text-textDark rounded-lg hover:bg-gray-50 transition-colors">
                View Cart
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
