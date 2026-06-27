export default function EmeraldPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-bgDark text-textLight">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Emerald Energy Heat Pumps</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Premium quality for premium homes
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-bgLight">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-textDark">Emerald Energy Range</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Explore the Emerald Energy range of heat pumps, designed for efficiency and durability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
