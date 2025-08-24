import { Testimonial, MediaLogo } from "@/features/interface/press"

interface PressSectionProps {
  testimonials: Testimonial[];
  mediaLogos: MediaLogo[];
}

export default function PressSection({ testimonials, mediaLogos }: PressSectionProps) {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="text-center p-6"
              >
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
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 md:gap-8 flex-wrap">
          {mediaLogos.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center justify-center px-4 py-2"
            >
              <span className="text-xs md:text-sm font-semibold text-gray-700 tracking-wide">
                {logo.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
