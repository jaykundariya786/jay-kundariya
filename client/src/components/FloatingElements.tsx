import { floatingElements1 } from "@/lib/imageDate";

// More vibrant colors and better positioning

function TestimonialLogoCard({ image }: { image: string }) {
  return (
    <div className="p-10 bg-white dark:bg-card card-hover transition-all duration-500 w-[200px] h-[200px] flex flex-col">
      <img src={image} className="w-full h-full object-contain" />
    </div>
  );
}

export default function FloatingElements() {
  return (
    <div className="w-full overflow-hidden justify-center mt-32 flex flex-col fixed inset-0  z-[-1] blur-sm before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-white before:to-transparent before:content-[''] after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-white after:to-transparent after:content-['']">
      <div className="flex pt-4 md:pt-6 animate-scroll-slow">
        {[...floatingElements1, ...floatingElements1, ...floatingElements1].map(
          (testimonial, i) => (
            <div key={`testimonial-${i}`} className="flex-shrink-0 mx-4">
              <TestimonialLogoCard {...testimonial} />
            </div>
          )
        )}
      </div>

      <div className="flex pb-4 md:pb-6 animate-scroll-reverse mt-8">
        {[...floatingElements1, ...floatingElements1, ...floatingElements1]
          .slice()
          .reverse()
          .map((testimonial, i) => (
            <div
              key={`testimonial-reverse-${i}`}
              className="flex-shrink-0 mx-4"
            >
              <TestimonialLogoCard {...testimonial} />
            </div>
          ))}
      </div>
    </div>
  );
}
