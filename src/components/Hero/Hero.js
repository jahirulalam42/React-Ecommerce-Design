import React from 'react'
import Hero1 from '../../assets/hero1.jpg'
import Hero2 from '../../assets/hero2.jpg'
import Hero3 from '../../assets/hero3.jpg'


const Hero = () => {
  return (
    <div className="w-full">
      <div className="hero min-h-min bg-white ">
  <div className="hero-content flex-col lg:flex-row-reverse min-w-full">
    <div>

    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={Hero3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Helping You COOK Your Best.</h2>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Shop All Nutrition</button>
    </div>
  </div>
</div>

    </div>
   
   <div>

   <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={Hero2} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Helping You FEEL Your Best.</h2>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Shop All Nutrition</button>
    </div>
  </div>
</div>

   </div>

    <div>

    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={Hero1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Helping You LIVE Your Best.</h2>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Shop All Nutrition</button>
    </div>
  </div>
</div>

    </div>
    
    <div>
      <h1 className="text-5xl font-bold">Brandless
The Wellness Platform</h1>
      <p className="py-6">Wellness is more than just how you feel. It’s about taking care of your health, body and your home. Brandless offers products that help you be your best in all aspects of life.</p>
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero
