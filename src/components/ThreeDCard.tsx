"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { IconPhoneCall,IconMail  } from "@tabler/icons-react";

export default function ThreeDCard() {
  return (
    <CardContainer className="inter-var h-full">
      <CardBody className="bg-gray-50 h-full relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#0a0a0a] dark:border-white/[0.2] border-black/[0.1] w-auto md:w-[20rem] lg:w-[30rem] rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Hi, I’m Kapil Kumawat!
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Looking to collaborate or have a project in mind? I’d love to hear from you! Let’s create something amazing together!
        </CardItem>
        {/* <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/images/projects/me.jpeg"
            height="1000"
            width="1000"
            className="h-[400px] mx-auto w-auto object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem> */}
        <div className="contact-detail pt-8">
          <div className="flex items-center gap-3 ">
            <div className="aspect-square h-10 w-10 rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative">
              <IconPhoneCall className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
            </div>
              <a href="tel:919672520566" className="text-white">+91 9672520566</a>
          </div>
          <div className="flex items-center gap-3 pt-5">
            <div className="aspect-square h-10 w-10 rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative">
              <IconMail  className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
            </div>
              <a href="mailto:kapilkumawat.work@gmail.com" className="text-white">kapilkumawat.work@gmail.com</a>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
