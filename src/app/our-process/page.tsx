export default function OurProcessPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-bgDark text-textLight">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Our Process</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Simple, straightforward, and designed to give you the best experience possible
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-bgLight">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-textDark">How It Works</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                From your first call to the final installation and beyond, we're with you
                every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
