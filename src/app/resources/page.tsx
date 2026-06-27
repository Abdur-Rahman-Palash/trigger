export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-bgDark text-textLight">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Energy Saving Guides</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Tips, tricks, and guides to help you save energy and money
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-bgLight">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-textDark">Learn & Save</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Browse our collection of guides, calculators, and resources to help you
                make informed decisions about your home energy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
