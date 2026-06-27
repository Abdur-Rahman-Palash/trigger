"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional()
});

type FormData = z.infer<typeof formSchema>;

export default function QuoteRequestPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Thank you for your quote request! We'll be in touch soon.");
  };

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-bgDark text-textLight">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Get a Free Quote</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Fill out the form below and we'll get back to you with a free, no-obligation quote
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-bgLight">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-textDark font-semibold mb-2">
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-textDark font-semibold mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-textDark font-semibold mb-2">
                  Phone *
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <label htmlFor="service" className="block text-textDark font-semibold mb-2">
                  Service *
                </label>
                <select
                  id="service"
                  {...register("service")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="heat-pumps">Heat Pumps</option>
                  <option value="solar-battery">Solar & Battery</option>
                  <option value="water-filtration">Water Filtration</option>
                  <option value="heating-cooling">Heating & Cooling</option>
                  <option value="other">Other</option>
                </select>
                {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-textDark font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-accent-500 text-bgDark font-bold text-lg rounded-lg hover:bg-accent-400 transition-colors"
              >
                Get Your Free Quote
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
