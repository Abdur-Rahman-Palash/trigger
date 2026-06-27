export default function AboutUsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-bgDark text-textLight">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">About Trigger Group</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Melbourne's trusted plumbing, electrical and energy solutions experts since 2012
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-bgLight">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-textDark">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Founded in 2012, Trigger Group has grown to become one of Melbourne's most
                trusted names in plumbing, electrical, and renewable energy solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
