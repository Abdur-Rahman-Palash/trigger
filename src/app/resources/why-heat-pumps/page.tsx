export default function WhyHeatPumpsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-bgDark text-textLight">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Why Heat Pumps Save You $$</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Learn how heat pumps can drastically reduce your energy bills
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-bgLight">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-textDark">The Savings Are Real</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Discover the financial benefits of switching to a heat pump for your hot water needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
