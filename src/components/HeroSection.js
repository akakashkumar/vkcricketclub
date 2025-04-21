import React from "react";

const HeroSection = () => {
  return (
    <div>
      <section className="flex flex-col lg:flex-row justify-between gap-5 items-center lg:py-5">
        <div>
          <h2 className="text-3xl text-center font-medium font-mono">
            Elevate Your Game with Expert Cricket Coaching in Ranchi
          </h2>
          <p className="mt-2 text-lg font-sans">
            Ready to take your cricket skills to the next level? Vk Cricket Club
            provides professional coaching and top-notch facilities in Ranchi,
            Jharkhand. Our experienced coaches are committed to helping you
            master the fundamentals and excel in your cricketing journey.
          </p>
        </div>
        <img
          className="w-full lg:w-1/2  rounded"
          src="banner.jpg"
          alt="banner"
        />
      </section>
    </div>
  );
};

export default HeroSection;
