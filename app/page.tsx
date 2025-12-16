import { HeroSection } from "@/components/hero-section"
import { DailyItinerary } from "@/components/daily-itinerary"
import { tripData } from "@/lib/trip-data"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <DailyItinerary itinerary={tripData.itinerary} />
    </main>
  )
}
