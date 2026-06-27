export default function SolarBatteryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-bgDark text-textLight">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Solar & Battery Systems</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Generate your own clean energy and store it for when you need it most
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-bgLight">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-textDark">Power Your Home with the Sun</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Solar panels allow you to generate your own clean electricity from the sun,
                while battery storage lets you save that energy for night-time use or
                during power outages. Together, they can drastically reduce or even
                eliminate your electricity bills.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
