import React from "react";
import { Meteors } from "@/components/ui/meteors";

export default function CollageSection() {
  return (
    <div className="dark:bg-[#0a0a0a] bg-white">
      <div className="max-w-7xl p-10 mx-auto gap-10 grid md:grid-cols-2">
        <div className="w-full relative">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl border border-transparent dark:bg-[#0a0a0a] dark:border-white/[0.2] bg-white  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <h1 className="font-bold text-xl dark:text-white text-black mb-4 relative z-50">
              Bachelor of Computer Applications (BCA)
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              Maharshi Dayanand Saraswati University
            </p>

            <div className="flex justify-between items-center mt-4 w-full">
              <div className="rounded-full py-2 w-32 text-center border border-black/[0.2] dark:bg-[#0a0a0a] dark:border-white/[0.2] text-sm dark:text-white bg-white">
                <span>2022 - 2025</span>
              </div>

              <span className="bg-black dark:bg-white font-bold text-sm rounded-full py-2 w-24 text-center text-white dark:text-black">
                76%
              </span>
            </div>

            {/* Meaty part - Meteor effect */}
            {/* <Meteors number={20} /> */}
          </div>
        </div>
        {/* <div className="w-full relative">
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                    <div className="relative shadow-xl border border-transparent dark:bg-[#0a0a0a] dark:border-white/[0.2] bg-white  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">

                        <h1 className="font-bold text-xl dark:text-white text-black mb-4 relative z-50">
                            Master of Computer Applications (MCA)
                        </h1>

                        <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                            Regional College For Education Research and Technology
                        </p>

                        <div className="flex justify-between items-center mt-4 w-full">
                            <div className="rounded-full py-2 w-32 text-center border border-black/[0.2] dark:bg-[#0a0a0a] dark:border-white/[0.2] text-sm dark:text-white bg-white">
                                <span>
                                    2021 - 2023
                                </span>
                            </div>

                            <span className="bg-black dark:bg-white font-bold text-sm rounded-full py-2 w-24 text-center text-white dark:text-black">
                                8.17CGPA
                            </span>
                        </div>

                        
                        <Meteors number={20} />
                    </div>
                </div> */}
      </div>
    </div>
  );
}
