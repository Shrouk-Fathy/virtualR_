import React from "react";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-center">
        Pricing
      </h2>
      <div className="flex flex-wrap mt-10">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="lg:mx-0 mx-4 p-10 border border-neutral-700 rounded-xl flex flex-col justify-center items-center">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/ Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-3/4 lg:w-full shadow-lg border border-orange-900 hover:bg-orange-900 transition-all 
              duration-200 mt-20 py-2 rounded-lg tracking-tight text-xl">Subscribe</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
