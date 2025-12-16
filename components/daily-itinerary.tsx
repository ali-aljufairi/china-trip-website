"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Clock, MapPin, Info, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Activity {
  time?: string
  activity: string
  location?: string
  locationChinese?: string
  notes?: string
  example?: string
  locations?: string[]
}

interface DayItinerary {
  date: string
  city: string
  title: string
  activities: Activity[]
  image: string
}

interface DailyItineraryProps {
  itinerary: DayItinerary[]
}

export function DailyItinerary({ itinerary }: DailyItineraryProps) {
  const [selectedDay, setSelectedDay] = useState(0)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    })
  }

  const goToPreviousDay = () => {
    if (selectedDay > 0) {
      setSelectedDay(selectedDay - 1)
    }
  }

  const goToNextDay = () => {
    if (selectedDay < itinerary.length - 1) {
      setSelectedDay(selectedDay + 1)
    }
  }

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">Daily Itinerary</h2>

        {/* Mobile: Compact navigation */}
        <div className="lg:hidden mb-6">
          <div className="flex items-center justify-between gap-3 bg-card rounded-lg p-3 shadow-sm">
            <button
              onClick={goToPreviousDay}
              disabled={selectedDay === 0}
              className={cn(
                "p-2 rounded-lg transition-colors",
                selectedDay === 0
                  ? "text-muted-foreground/40 cursor-not-allowed"
                  : "text-foreground hover:bg-accent active:bg-accent/80",
              )}
              aria-label="Previous day"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex-1 text-center">
              <div className="text-lg font-bold">
                Day {selectedDay + 1} of {itinerary.length}
              </div>
              <div className="text-sm text-muted-foreground">{itinerary[selectedDay].city}</div>
            </div>

            <button
              onClick={goToNextDay}
              disabled={selectedDay === itinerary.length - 1}
              className={cn(
                "p-2 rounded-lg transition-colors",
                selectedDay === itinerary.length - 1
                  ? "text-muted-foreground/40 cursor-not-allowed"
                  : "text-foreground hover:bg-accent active:bg-accent/80",
              )}
              aria-label="Next day"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Desktop: Day selector sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-4 space-y-2 max-h-[calc(100vh-2rem)] overflow-y-auto">
              {itinerary.map((day, index) => (
                <button
                  key={day.date}
                  onClick={() => setSelectedDay(index)}
                  className={cn(
                    "w-full text-left p-4 rounded-lg transition-all",
                    selectedDay === index
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-card hover:bg-accent hover:shadow-md",
                  )}
                >
                  <div className="font-semibold">Day {index + 1}</div>
                  <div
                    className={cn(
                      "text-sm mt-1",
                      selectedDay === index ? "text-primary-foreground/80" : "text-muted-foreground",
                    )}
                  >
                    {day.city}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Day details */}
          <div className="lg:col-span-3">
            {/* City Image */}
            <div className="mb-6 rounded-xl overflow-hidden shadow-lg">
              <img
                src={itinerary[selectedDay].image || "/placeholder.svg"}
                alt={itinerary[selectedDay].city}
                className="w-full h-48 sm:h-64 md:h-80 object-cover"
              />
            </div>

            <Card className="p-4 sm:p-6 lg:p-8">
              <div className="mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span>{itinerary[selectedDay].city}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-balance">{itinerary[selectedDay].title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{formatDate(itinerary[selectedDay].date)}</p>
              </div>

              <div className="space-y-6">
                {itinerary[selectedDay].activities.map((activity, index) => (
                  <div
                    key={index}
                    className="relative pl-6 sm:pl-8 pb-6 border-l-2 border-border last:border-0 last:pb-0"
                  >
                    <div className="absolute left-0 top-0 -ml-[9px] h-4 w-4 rounded-full bg-primary ring-4 ring-background" />

                    <div className="space-y-2">
                      {activity.time && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 flex-shrink-0" />
                          <span className="font-medium">{activity.time}</span>
                        </div>
                      )}

                      <h4 className="text-base sm:text-lg font-semibold text-balance">{activity.activity}</h4>

                      {activity.location && (
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          <div className="flex flex-col gap-1">
                            <span className="text-sm text-muted-foreground">{activity.location}</span>
                            {activity.locationChinese && (
                              <a
                                href={`https://map.baidu.com/search/${encodeURIComponent(activity.locationChinese)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-primary hover:underline"
                              >
                                {activity.locationChinese} (Baidu Maps)
                              </a>
                            )}
                          </div>
                        </div>
                      )}

                      {activity.locations && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {activity.locations.map((loc) => (
                            <span
                              key={loc}
                              className="px-2 py-1 bg-secondary/20 text-secondary-foreground rounded-md text-xs"
                            >
                              {loc}
                            </span>
                          ))}
                        </div>
                      )}

                      {activity.notes && (
                        <div className="flex items-start gap-2 mt-2 p-3 bg-accent/50 rounded-lg">
                          <Info className="h-4 w-4 text-accent-foreground mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-accent-foreground">{activity.notes}</span>
                        </div>
                      )}

                      {activity.example && (
                        <div className="text-sm text-muted-foreground mt-2">
                          <span className="font-medium">Suggestion:</span> {activity.example}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
