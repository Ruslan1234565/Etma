"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Testimonial } from "@/features/interface/press"

interface PressCarouselClientProps {
  testimonials: Testimonial[];
}

export default function PressCarouselClient({ testimonials }: PressCarouselClientProps) {
  const [api, setApi] = React.useState<any>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="mb-12">
      <Carousel
        setApi={setApi}
        className="w-full max-w-6xl mx-auto"
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
              <div className="p-2">
                <div className="text-center p-6">
                  <blockquote className="text-base md:text-lg font-medium text-gray-800 mb-3 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  {testimonial.author && (
                    <cite className="text-sm text-gray-600">
                      — {testimonial.author}
                    </cite>
                  )}
                  {testimonial.publication && (
                    <p className="text-xs text-gray-500 mt-1">
                      {testimonial.publication}
                    </p>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 md:left-4" />
        <CarouselNext className="right-2 md:right-4" />
      </Carousel>

      <div className="flex justify-center mt-8">
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current ? "bg-green-500" : "bg-gray-300"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
