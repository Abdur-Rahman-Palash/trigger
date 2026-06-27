export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-bgDark text-textLight">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Reviews & Testimonials</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Don't just take our word for it — hear from our happy customers!
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-bgLight">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-textDark">What Our Customers Say</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Real stories from real Melbourne homeowners who have transformed their
                homes with Trigger Group.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
