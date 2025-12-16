export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary to-primary/90 text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[url('/stunning-shanghai-bund-skyline-at-night-with-moder.jpg')] bg-cover bg-center opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="text-center space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">China Adventure</h1>
          <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 max-w-3xl mx-auto text-balance">
            A 12-day journey through Shanghai, Beijing, and Hangzhou
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 pt-2 text-sm">
            <div className="flex items-center justify-center gap-2">
              <span className="font-semibold">Dec 25, 2025 - Jan 5, 2026</span>
            </div>
            <div className="hidden sm:block text-primary-foreground/60">•</div>
            <div className="flex items-center justify-center gap-2">
              <span className="font-semibold">Shanghai • Beijing • Hangzhou</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
