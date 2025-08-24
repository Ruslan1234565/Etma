"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Testimonial, MediaLogo } from "@/features/interface/press"

interface PressCarouselProps {
  testimonials: Testimonial[];
  mediaLogos: MediaLogo[];
}

export default function PressCarousel({ testimonials, mediaLogos }: PressCarouselProps) {
  const [api, setApi] = React.useState<any>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <Carousel
            setApi={setApi}
            className="w-full max-w-7xl mx-auto"
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
                    <Card className="border-0 shadow-none bg-transparent h-full">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                        <blockquote className="text-lg md:text-xl font-medium text-gray-800 mb-4 leading-relaxed">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="w-12 h-px bg-gray-300 mb-3"></div>
                        {testimonial.author && (
                          <cite className="text-sm text-gray-600 font-medium">
                            — {testimonial.author}
                          </cite>
                        )}
                        {testimonial.publication && (
                          <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">
                            {testimonial.publication}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4 bg-white border-gray-200 hover:bg-gray-50" />
            <CarouselNext className="right-2 md:right-4 bg-white border-gray-200 hover:bg-gray-50" />
          </Carousel>
        </div>
 
        <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap mb-8">
          {mediaLogos.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center justify-center px-4 py-2"
            >
              <span className="text-sm font-semibold text-gray-700 tracking-wide uppercase">
                {logo.logo}
              </span>
            </div>
          ))}
        </div>
 
        <div className="flex justify-center">
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === current ? "bg-green-500" : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
