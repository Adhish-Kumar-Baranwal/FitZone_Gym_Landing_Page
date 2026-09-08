import React, { useState } from "react";
import { ArrowRight, ArrowLeft, Star, StarHalf } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = ({data, heading, subheading}) => {

  const stars = [1, 2, 3, 4, 5];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [Autoplay()],
  );

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div id="testimonials" className="bg-zinc-900 py-20 px-16">
      <div className="text-center">
        <p className=" text-sm text-orange-500 uppercase font-semibold mb-2">
          {heading}
        </p>
        <div className="max-w-4xl mx-auto flex-center gap-4 my-3">
          <div className="hidden md:block flex-1 h-0.5 bg-zinc-700"></div>
          <p className="text-lg md:text-2xl lg:text-3xl font-semibold">
            {subheading}
          </p>
          <div className="hidden md:block flex-1 h-0.5 bg-zinc-700"></div>
        </div>
      </div>

      <div className="relative md:px-12">
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-orange-500 hover:bg-orange-600"
        >
          <ArrowLeft size={18} />
        </button>
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex mt-8">
            {data.map((item) => {
              return (
                <div
                  key={item.name}
                  className="shrink-0 px-2 flex basis-full md:basis-1/2 lg:basis-1/3"
                  // style={{ flex: "0 0 50% md:33.333%" }}
                >
                  <div
                    className="bg-zinc-800 border-zinc-700 border pb-auto rounded-md mx-2 md:mx-6 py-6 px-4 w-full h-full"
                    key={item.name}
                  >
                    <p className="text-xl font-semibold ">{item.name}</p>
                    <p className="text-sm text-zinc-400">{item.memberSince}</p>
                    <p className="pb-4 flex text-sm">
                      {stars.map((star) =>
                        star <= item.rating ? (
                          <Star fill="gold" color="gold" key={star} />
                        ) : star - 0.5 <= item.rating ? (
                          <StarHalf fill="gold" color="gold" key={star} />
                        ) : null,
                      )}
                    </p>
                    <p className="text-[16px] text-zinc-200">"{item.review}"</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-orange-500 hover:bg-orange-600"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
