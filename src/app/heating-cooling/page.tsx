export default function HeatingCoolingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-bgDark text-textLight">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Heating & Cooling</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Stay comfortable in every season with efficient heating and cooling solutions
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-bgLight">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-textDark">Year-Round Comfort</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                From ducted heating to split system air conditioning, we have the perfect
                solution to keep your home comfortable no matter what the weather outside is like.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
