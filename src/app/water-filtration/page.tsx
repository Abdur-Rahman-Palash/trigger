export default function WaterFiltrationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-bgDark text-textLight">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Whole Home Water Filtration</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Clean, safe, great-tasting water from every tap in your home
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-bgLight">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-textDark">Pure Water for Your Whole Home</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Enjoy filtered water from every tap, shower, and appliance in your home.
                Our whole home filtration systems remove contaminants, improve taste,
                and protect your plumbing from scale buildup.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
