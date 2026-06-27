export default function NeopowerPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-bgDark text-textLight">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Neopower Heat Pumps</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Cutting-edge technology for maximum efficiency
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-bgLight">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-textDark">Neopower Heat Pump Range</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Discover the Neopower difference with our premium range of heat pumps.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
