import React from "react";
import code from "../assets/code.jpg";
import { checklistItems } from "../constants";
import { CheckCircle2 } from "lucide-react";

const Workflow = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-center">
        Accelerate your
        <span className="ml-4 bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          coding workflow.
        </span>
      </h2>
      <div className="flex flex-col lg:flex-row mt-20">
        <div className="w-full lg:w-1/2">
          <img src={code} alt="code" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-wrap mt-10 lg:mt-20">
          {checklistItems.map((listItem, index) => (
            <div key={index} className="flex flex-col w-full py-10 lg:py-0">
              <div className="flex">
                <div
                  className="flex mx-6 h-10 w-10 p-2 bg-neutral-900
                     text-green-700 justify-center items-center rounded-full"
                >
                  <CheckCircle2 />
                </div>
                <div>
                  <h5 className="mt-1 mb-6 text-xl">{listItem.title}</h5>
                </div>
              </div>
              <div className="mr-2 px-20 text-neutral-500">
                {listItem.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
