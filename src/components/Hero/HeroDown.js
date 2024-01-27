import React from "react";
import Morning from "../../assets/david-mao-m0l5J8Lqnzo-unsplash.jpg"

const HeroDown = () => {
  return (
    <div>
      <div className="bg-black p-16">
        <div className="flex justify-center text-center text-white">
          <h1 className="text-2xl">
            Best-Selling • 2HP • 1500 Watt • Professional Grade • Power Vortex •
            Safety-Built • Dishwasher Safe Pitcher • Stainless Blade
            <p className="text-lg">
              The Beloved Brandless Pro-Blender Now Available at our LOWEST
              PRICE EVER.
            </p>
          </h1>
        </div>
      </div>

      <div className="hero min-h-fit bg-green-300">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={Morning} className="max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Morning Fatburner!</h1>
      <h1 className="py-6 font-bold">"KICKSTART YOUR METABOLISM EVERY MORNING" GUMMY
      <br/>
• NEW! Sugar-Free, Super Weight Management Formula
<br/>
• Green Tea & Green Coffee Bean Infused
<br/>
• Natural Caffeine Sources
<br/>
• Garcinia Cambogia
<br/>
• Raspberry Ketones
<br/>
• Natural Flavor & Color</h1>
      <button className="btn btn-info">Learn More</button>
    </div>
  </div>
</div>

<div className="bg-black p-5">
        <div className="flex justify-center text-center text-white">
          <h1 className="text-2xl">NEW! GET THEM TODAY.</h1>
        </div>
      </div>

    </div>
  );
};

export default HeroDown;
