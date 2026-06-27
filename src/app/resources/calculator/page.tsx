export default function CalculatorPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-bgDark text-textLight">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Rebate & Finance Calculator</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Calculate your potential savings and explore finance options
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-bgLight">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-textDark">Calculate Your Savings</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Our handy calculator will help you estimate your savings and find the best finance option for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
